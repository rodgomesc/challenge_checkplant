import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Notes from '../containers/Notes';

const Stack = createStackNavigator();

const globalNavigationOptions = {};

function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Notes"
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
      <Stack.Screen
        name="Notes"
        component={Notes}
        options={{ title: 'ANOTAÇÕES' }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
