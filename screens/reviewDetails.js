import React from 'react';
import { Button, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function ReviewDetails({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}> Review Details Screen </Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}
