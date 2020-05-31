import React from 'react';
import './config/ReactotronConfig';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './store';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes/index.routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
