/*--- 
  SUMMARY:
  This file creates the stack navigation for navigating the About Screen

  SCREENS:
  - about.js
---*/
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';

const { Navigator, Screen } = createStackNavigator();

export const AboutStack = () => (
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
      name='About'
      component={About}
      options={{ title: 'About Tournament Arc', headerTitleAlign: 'center' }}
    />
  </Navigator>
);

export default AboutStack;