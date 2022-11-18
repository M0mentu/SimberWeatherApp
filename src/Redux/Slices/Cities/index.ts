import {createSlice} from '@reduxjs/toolkit';
import {weatherItem} from 'Types';

const Cities = createSlice({
  name: 'Cities',
  initialState: {
    cities: [],
    currentCityWeather: null,
    loading: false,
    errMessage: null,
  },
  reducers: {
    getCityWeather(state, action: {payload: {city: string; index?: number}}) {
      state.errMessage = null;
      state.loading = true;
    },
    setCurrentCityWeather(state, action: {payload: {city: weatherItem}}) {
      state.currentCityWeather = action.payload.city;
      state.loading = false;
    },
    setCities(state, action: {payload: any}) {
      const {cities} = action.payload;
      state.cities = cities;
      state.loading = false;
    },
    pushCity(state, action: {payload: {city: weatherItem}}) {
      state.cities.push(action.payload.city);
      state.loading = false;
    },
    citiesError(state, action: {payload: any}) {
      state.errMessage = action.payload.error;
      state.loading = false;
    },
  },
});

export const {
  getCityWeather,
  setCities,
  pushCity,
  citiesError,
  setCurrentCityWeather,
} = Cities.actions;

export default Cities.reducer;
