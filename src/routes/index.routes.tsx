import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Notes from '../containers/Notes';
import Home from '../containers/Home';
const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#54CFAF',
        },
        headerTintColor: '#79FFDC',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Notes"
        component={Notes}
        options={{ title: 'ANOTAÇÕES' }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
