import React, {useEffect, useRef} from 'react';
import {Box, FlatList, useTheme} from 'native-base';
import styles from './styles';
import MainView from 'src/Components/MainView';
import {CITIES_SCREEN_NAME} from 'src/Navigation/ScreenNames';
import {useDispatch, useSelector} from 'react-redux';
import {getCityWeather, setCities} from 'src/Redux/Slices/Cities';
import WeatherItemCard from 'src/Components/WeatherItemCard';
import {SAVED_CITIES_STORAGE_KEY} from 'src/Utils/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DefaultOverLayLoading from 'src/Components/DefaultOverLayLoading';
import DefaultButton from 'src/Components/DefaultButton';
import {ActionSheetRef} from 'react-native-actions-sheet';
import {Assets} from 'Assets';
import CitySearch from 'src/Components/CitySearch';
import {RootState} from 'src/Redux/Slices/rootReducer';
import DefaultFlatList from 'src/Components/DefaultFlatList';

type Props = {};

const Cities = (props: Props) => {
  const Theme = useTheme();

  const styleSheet = styles(Theme);

  const {
    images: {
      common: {Search},
    },
  } = Assets;

  const dispatch = useDispatch();

  const selectCities = (state: RootState) => state.cities.cities;

  const selectCitiesLoading = (state: RootState) => state.cities.loading;

  const citiesData = useSelector(selectCities);

  const citiesLoading = useSelector(selectCitiesLoading);

  const [savedCitiesLoading, setSavedCitiesLoading] = React.useState(false);

  const actionSheetRef = useRef<ActionSheetRef>(null);

  useEffect(() => {
    const getSavedCities = async () => {
      try {
        setSavedCitiesLoading(true);
        let savedCities: any = await AsyncStorage.getItem(
          SAVED_CITIES_STORAGE_KEY,
        );
        if (savedCities) {
          savedCities = JSON.parse(savedCities);
          dispatch(setCities({cities: savedCities}));
        }
      } catch (e) {
        console.log('saved cities error', e);
      } finally {
        setSavedCitiesLoading(false);
      }
    };
    getSavedCities();
  }, []);

  const renderCityCard = ({item, index}) => {
    return <WeatherItemCard item={item} index={index} />;
  };

  const renderCities = () => {
    return (
      <DefaultFlatList
        contentContainerStyle={styleSheet.citiesContainer}
        data={citiesData}
        renderItem={renderCityCard}
        emptyString={'No cities found !'}
        isFetchingData={citiesLoading || savedCitiesLoading}
      />
    );
  };

  const renderAddCityButton = () => {
    return (
      <Box style={styleSheet.addButtonContainer}>
        <DefaultButton
          showPlus
          variant="addCity"
          title={'Add City'}
          onPress={() => actionSheetRef.current?.show()}
        />
      </Box>
    );
  };

  const _getCityWeather = (cityName: string) => {
    try {
      dispatch(getCityWeather({city: cityName}));
    } catch (e) {
      console.log('get cities error', e);
    } finally {
      actionSheetRef.current?.hide();
    }
  };

  return (
    <MainView hideBack title={CITIES_SCREEN_NAME}>
      {renderCities()}
      {savedCitiesLoading ||
        (citiesLoading && <DefaultOverLayLoading message="Please Wait" />)}
      {renderAddCityButton()}
      <CitySearch
        onPress={cityName => _getCityWeather(cityName)}
        ref={actionSheetRef}
      />
    </MainView>
  );
};

export default Cities;
