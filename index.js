import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { YellowBox } from 'react-native';


YellowBox.ignoreWarnings(['Called stopObserving with existing subscriptions']);
AppRegistry.registerComponent(appName, () => App);
