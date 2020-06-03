import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../containers/Login';
import Notes from '../containers/Notes';
import Home from '../containers/Home';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#54CFAF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Login"
        options={{ title: 'Login', headerShown: false }}
        component={Login}
      />
      <Stack.Screen
        name="Home"
        options={{
          title: 'HOME',
          headerLeft: () => {
            return null;
          },
        }}
        component={Home}
      />
      <Stack.Screen
        name="Notes"
        component={Notes}
        options={{
          title: 'ANOTAÇÕES',
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
