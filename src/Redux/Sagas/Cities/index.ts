import API from '../../../API';
import {call, put, takeLatest} from 'redux-saga/effects';
import {
  citiesError,
  getCityWeather,
  pushCity,
  setCities,
  setCurrentCityWeather,
} from '../../Slices/Cities';
import {API_KEY, SAVED_CITIES_STORAGE_KEY} from 'src/Utils/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showErrorMessage, ShowSuccessMessage} from 'src/Utils/ AlertMessage';
import {weatherItem} from 'Types';
import {getTodaysDate} from 'src/Utils/Helpers';

/**
 * all the fetched data objects are added with @param historyData array which contains the weather data for every request the user made,
 * and in every @param historyData there is @param createdAt which holds the date and time when request was made.
 *
 * @param index to check if the user requested weather info for a saved city,
 * if index is found it's set to currentCity to be used in Details screen, also @param savedCities will push new data to saved city history
 * then use it to  write it to asyncStorage and then setCities with new data.
 * if the AsyncStorage is empty @param newItem will be set with the fetched city and then use pushCity to push it to cities array, and save the city to
 * AsyncStorage.
 * if asyncStorage is not empty and @param index is  null just push the new fetched city to the cities in redux and AsyncStorage
 *
 * @param city the name of the city, country name the user has chosen
 *  */

type Params = {payload: {city: string; index?: number}; type: string};

export function* GetCityWeather({payload}: Params) {
  try {
    const Response = yield call(API.get, `data/2.5/weather`, {
      params: {
        appid: API_KEY,
        q: payload?.city,
        units: 'metric',
      },
    });

    const {data, status} = Response;

    let savedCities: weatherItem[]; //to hold new city data

    let newItem: boolean = false; //to check if city is already saved

    let customData = {
      ...data,
      createdAt: getTodaysDate(),
      historyData: [{...data, createdAt: getTodaysDate()}],
    };

    if (payload.index || payload.index === 0) {
      yield put(
        setCurrentCityWeather({city: {...data, createdAt: getTodaysDate()}}),
      );
    }
    yield AsyncStorage.getItem(SAVED_CITIES_STORAGE_KEY, (err, item) => {
      if (err) {
        console.log('[ERROR] AsyncStorage GetCityWeather  ', err);
      } else {
        if (item !== null) {
          savedCities = JSON.parse(item);
          if (payload.index || payload.index === 0) {
            savedCities[payload?.index]?.historyData?.push({
              ...data,
              createdAt: getTodaysDate(),
            });
          } else {
            newItem = customData;
            savedCities.push(customData);
          }
          AsyncStorage.setItem(
            SAVED_CITIES_STORAGE_KEY,
            JSON.stringify(savedCities),
          );
        } else {
          newItem = customData;
          savedCities = [customData];
          AsyncStorage.setItem(
            SAVED_CITIES_STORAGE_KEY,
            JSON.stringify(savedCities),
          );
        }
      }
    });
    if (payload.index || payload.index === 0) {
      yield put(setCities({cities: savedCities}));
    }
    if (newItem) {
      yield put(
        pushCity({
          city: newItem,
        }),
      );
      ShowSuccessMessage('City added successfully');
    }
  } catch ({response}) {
    showErrorMessage(response?.data?.message ?? 'Failed to get city');
    yield put(citiesError({error: response?.data?.message}));
  }
}

export function* watchGetCityWeather() {
  yield takeLatest(getCityWeather.type, GetCityWeather);
}
