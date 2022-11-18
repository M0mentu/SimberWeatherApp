import {createSlice} from '@reduxjs/toolkit';

const Search = createSlice({
  name: 'Search',
  initialState: {
    citiesSearch: [],
    loading: false,
    errMessage: null,
  },
  reducers: {
    getSearchCities(state, action: {payload: {query: string}}) {
      state.errMessage = null;
      state.loading = true;
    },
    setSearchCities(state, action: {payload: any}) {
      const {cities} = action.payload;
      state.citiesSearch = cities;
      state.loading = false;
    },
    citiesSearchError(state, action: {payload: any}) {
      state.errMessage = action.payload.error;
      state.loading = false;
    },
  },
});

export const {getSearchCities, setSearchCities, citiesSearchError} =
  Search.actions;

export default Search.reducer;
