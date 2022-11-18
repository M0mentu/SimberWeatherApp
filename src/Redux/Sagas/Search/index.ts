import API from '../../../API';
import {call, put, takeLatest} from 'redux-saga/effects';
import {
  getSearchCities,
  setSearchCities,
  citiesSearchError,
} from '../../Slices/Search';
import {API_KEY} from 'src/Utils/Constants';
import {showErrorMessage} from 'src/Utils/ AlertMessage';

type Params = {payload: {query: string}; type: string};
export function* GetSearchCities({payload}: Params) {
  try {
    const Response = yield call(API.get, `data/2.5/find`, {
      params: {
        appid: API_KEY,
        q: payload?.query,
        units: 'metric',
      },
    });
    const {data, status} = Response;
    if (status !== 200) {
      yield put(citiesSearchError({error: data?.message}));
    } else {
      yield put(setSearchCities({cities: data.list}));
    }
  } catch ({response}) {
    showErrorMessage(
      response?.data?.message ?? 'Search could not be completed',
    );
    yield put(citiesSearchError({error: response?.data?.message}));
  }
}

export function* watchGetSearchCities() {
  yield takeLatest(getSearchCities.type, GetSearchCities);
}
