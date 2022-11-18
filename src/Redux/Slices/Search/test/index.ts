import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import {weatherItem} from 'Types';
import {MyService} from './my-service';

interface MyState {
  citiesSearch: {}[];
}

const initialState: MyState = {
  citiesSearch: [],
};

const testObj = {
  coord: {
    lon: -84.2013,
    lat: 30.8774,
  },
  weather: [
    {
      id: 802,
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03d',
    },
  ],
  base: 'stations',
  main: {
    temp: 24.89,
    feels_like: 25,
    temp_min: 23.81,
    temp_max: 25.62,
    pressure: 1012,
    humidity: 60,
    sea_level: 1012,
    grnd_level: 1004,
  },
  visibility: 10000,
  wind: {
    speed: 2.63,
    deg: 277,
    gust: 5.76,
  },
  clouds: {
    all: 43,
  },
  dt: 1668289279,
  sys: {
    type: 2,
    id: 2032700,
    country: 'US',
    sunrise: 1668254461,
    sunset: 1668292864,
  },
  timezone: -18000,
  id: 4185632,
  name: 'Cairo',
  cod: 200,
  createdAt: '12.11.2022. - 23:41',
};

export const postData = createAsyncThunk(
  'data/postData',
  async (
    param: {
      citiesSearch: weatherItem[];
    },
    {rejectWithValue},
  ) => {
    try {
      const myService: MyService = new MyService();
      return await myService.postData(param.citiesSearch);
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  },
);

const combineExtraReducers = (builder: ActionReducerMapBuilder<MyState>) => {
  builder.addCase(postData.fulfilled, (state, {payload}) => {
    state.citiesSearch = payload;
  });
};

export const dataSlice = createSlice({
  name: 'Search',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    combineExtraReducers(builder);
  },
});
