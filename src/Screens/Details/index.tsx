import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Box, useTheme} from 'native-base';
import styles from './styles';
import MainView from 'src/Components/MainView';
import {useRoute} from '@react-navigation/native';
import {weatherItem} from 'Types';
import WeatherDetailsCard from 'src/Components/weatherDetailsCard';
import {useDispatch, useSelector} from 'react-redux';
import {getCityWeather} from 'src/Redux/Slices/Cities';
import {combineCityCountryName} from 'src/Utils/Helpers';
import {RootState} from 'src/Redux/store';
import DefaultOverLayLoading from 'src/Components/DefaultOverLayLoading';
import Typography from 'SimpleWeather/Typography';
import {moderateScale} from 'react-native-size-matters/extend';

type Props = {};

const Details = (props: Props) => {
  const Theme = useTheme();

  const route = useRoute() as {
    params: {item: weatherItem; index: number; fromHistory?: boolean};
  };

  const selectCurrentCityWeather = (state: RootState) =>
    state.cities.currentCityWeather;

  const selectCitiesLoading = (state: RootState) => state.cities.loading;

  const currentCityWeather = useSelector(selectCurrentCityWeather);

  const cityWeatherLoading = useSelector(selectCitiesLoading);

  const item = route?.params?.item;

  const index = route?.params?.index;

  const fromHistory = route?.params?.fromHistory;

  const styleSheet = styles(Theme);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!fromHistory) {
      let name = combineCityCountryName(item);
      dispatch(getCityWeather({city: name, index: index}));
    }
  }, []);

  const renderDateData = (dataItem: weatherItem) => {
    return dataItem ? (
      <Box style={styleSheet.dateTimeCOntainer}>
        <Typography
          style={
            styleSheet.textStyle
          }>{`Weather information for ${dataItem?.name} received on`}</Typography>
        <Typography
          style={styleSheet.textStyle}>{`${dataItem?.createdAt}`}</Typography>
      </Box>
    ) : null;
  };

  return (
    <MainView title={''}>
      <WeatherDetailsCard item={fromHistory ? item : currentCityWeather} />
      {renderDateData(fromHistory ? item : currentCityWeather)}
      {cityWeatherLoading && <DefaultOverLayLoading />}
    </MainView>
  );
};

export default Details;
