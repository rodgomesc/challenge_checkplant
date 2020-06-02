import React from 'react';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes/index.routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar translucent backgroundColor="transparent" animated />
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
