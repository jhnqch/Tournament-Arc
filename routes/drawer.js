/*--- 
  SUMMARY:
  This file creates the drawer Navigation in the Application, each screen represents a 
  stack navigation route of pages for the application to open. 
---*/

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

/* --- Import all the stack routes file location --- */
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import RegistrationStack from './registrationStack';

const { Navigator, Screen } = createDrawerNavigator(); // Creates Stack navigation 

/*---
  This function represents all the stack navigation routes to be displayed  
  in the drawer navigation window
---*/
export const RootDrawerNavigator = () => (
  <Navigator initialRouteName='Home'>
    <Screen
      name='Home'
      component={HomeStack}
    />
     <Screen
      name='Log In'
      component={RegistrationStack}
    />
    <Screen
      name='About'
      component={AboutStack}
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <RootDrawerNavigator />
  </NavigationContainer>
);

export default AppNavigator;