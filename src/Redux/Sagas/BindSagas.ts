import {SagaMiddleware} from 'redux-saga';
import * as sagas from './sagas';

export const initSagas = (sagaMiddleware: SagaMiddleware<object>) => {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};
