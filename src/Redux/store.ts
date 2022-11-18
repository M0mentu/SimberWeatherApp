import {configureStore} from '@reduxjs/toolkit';
import Reactotron from 'reactotronConfig';
import createSagaMiddleware from 'redux-saga';
import {initSagas} from './Sagas/BindSagas';
import rootReducer from './Slices/rootReducer';

const sagaMonitor = Reactotron.createSagaMonitor();

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

initSagas(sagaMiddleware);
export type RootState = ReturnType<typeof store.getState>;

export default store;
