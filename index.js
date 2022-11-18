/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App/App';
import {name as appName} from './app.json';
import reactotron from 'reactotronConfig';
global.r = reactotron;
AppRegistry.registerComponent(appName, () => App);
