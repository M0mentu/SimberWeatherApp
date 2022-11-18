import React, {useEffect} from 'react';
import styles from './styles';
import {citySearchInterface} from 'Types';
import {Box, Divider, Input, InputGroup, useTheme} from 'native-base';
import {Assets} from 'Assets';
import SvgView from 'SimpleWeather/SvgView';
import ActionSheet from 'react-native-actions-sheet';
import {useDispatch, useSelector} from 'react-redux';
import CitySearchCard from '../CitySearchCard';
import {forwardRef} from 'react';
import DefaultFlatList from '../DefaultFlatList';
import {getSearchCities, setSearchCities} from 'src/Redux/Slices/Search';
import {RootState} from 'src/Redux/Slices/rootReducer';
import {combineCityCountryName} from 'src/Utils/Helpers';

const CitySearch: React.FC<citySearchInterface> = forwardRef(
  (props, ref: any) => {
    const Theme = useTheme();

    const styleSheet = styles(Theme);

    const [searchText, setSearchText] = React.useState('');

    const selectSearchCities = (state: RootState) => state.search.citiesSearch;

    const searchCitiesLoading = (state: RootState) => state.search.loading;

    const searchCitiesError = (state: RootState) => state.search.loading;

    const citiesSearchData = useSelector(selectSearchCities);

    const citiesSearchLoading = useSelector(searchCitiesLoading);

    const citiesError = useSelector(searchCitiesError);

    const dispatch = useDispatch();

    const {
      images: {
        common: {Search},
      },
    } = Assets;

    const {onPress} = props;

    useEffect(() => {
      if (searchText.length > 2) {
        dispatch(getSearchCities({query: searchText}));
      } else if (searchText.length === 0) {
        dispatch(setSearchCities({cities: []}));
      }
    }, [searchText]);

    const renderSearchCityCard = ({item}) => {
      const name = combineCityCountryName(item);
      return <CitySearchCard item={item} onPress={() => onPress(name)} />;
    };

    return (
      <ActionSheet ref={ref}>
        <Box style={styleSheet.addCityInputContainer}>
          <InputGroup alignItems={'center'}>
            <SvgView svgFile={Search} height={24} width={24} ms={16} />
            <Input
              w={{
                base: '90%',
                md: '100%',
              }}
              borderWidth={0}
              variant="unstyled"
              placeholder="Enter City Name"
              style={styleSheet.inputStyle}
              borderRadius={20}
              borderColor={Theme.colors.appPrimary}
              onChangeText={setSearchText}
              value={searchText}
            />
          </InputGroup>
          <Divider />
          <DefaultFlatList
            data={citiesSearchData}
            renderItem={renderSearchCityCard}
            ItemSeparatorComponent={() => <Divider />}
            emptyString={
              citiesError || (searchText?.length > 2 && 'No Cities Found')
            }
            isFetchingData={citiesSearchLoading}
          />
        </Box>
      </ActionSheet>
    );
  },
);

export default CitySearch;
