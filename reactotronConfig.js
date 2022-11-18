import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron.configure()
  .use(sagaPlugin())
  .useReactNative()
  .setAsyncStorageHandler(AsyncStorage)
  .connect();
export default reactotron;
