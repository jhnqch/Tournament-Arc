/*--- 
  SUMMARY:


  SCREENS:
 
---*/
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Follow from '../screens/following';

const { Navigator, Screen } = createStackNavigator();

export const FollowingStack = ({navigation}) => (
  <Navigator
    headerMode='screen'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#ADB2D3',
      },
      headerTintColor: '#fff',
      height: 60
    }}
  >
    <Screen
      name='Follow'
      component={Follow}
      options={{ 
        title: 'Following', 
        headerTitleAlign: 'center',
        }}
    />
  </Navigator>
);

export default FollowingStack;