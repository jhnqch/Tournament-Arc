/*--- 
  SUMMARY:
  This file creates the stack navigation for registration.

  SCREENS:
  - input.js
  - registration.js

---*/
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Registration from '../screens/registration';
import Inputs from '../screens/input';

const { Navigator, Screen } = createStackNavigator();

export const RegistrationStack = () => (
  <Navigator
    headerMode='screen'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#BAD7E6',
      },
      headerTintColor: '#304857',
      height: 60
    }}
  >
    <Screen
      name='Input'
      component={Inputs}
      options={{ title: 'Log In', headerTitleAlign: 'center' }}
    />
    <Screen
      name='Register'
      component={Registration}
      options={{ title: 'Review Details' }}
    />
  </Navigator>
);

export default RegistrationStack;