import React from 'react';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Home({navigation}) {

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}> Home Screen </Text>
            <Button 
                title='go to review details'
                onPress={() => navigation.navigate("ReviewDetails")}
            />
        </View>
    )
}
