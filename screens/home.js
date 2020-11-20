import React, { Component } from "react";
import { Button, Text, View, StyleSheet, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class HomePage extends Component {
    render() {
      return (
        <ScrollView>
          <View style={style.firstContainer}>
            <Text style={style.titles}>Featured Tournaments</Text>
          </View>
          <View style={style.temp} />
          <View style={style.secondContainer}>
            <Text style={style.titles}> Upcoming Tournaments</Text>
          </View>
          <View style={style.temp} />
          <View style={style.thirdContainer}>
            <Text style={style.titles}>Live Tournaments</Text>
          </View>
          <View style={style.temp} />
          <View style={style.fourthContainer}>
            <Text style={style.titles}>Past Tournaments</Text>
          </View>
          <View style={style.temp} />
        </ScrollView>
      );
    }
  }
  
  export default HomePage;
  
  const style = StyleSheet.create({
    firstContainer: {
      paddingTop: 30,
      paddingLeft: 10,
    },
    secondContainer: {
      paddingLeft: 5,
    },
    thirdContainer: {
      paddingLeft: 10,
    },
    fourthContainer: {
      paddingLeft: 10,
    },
    titles: {
      fontWeight: "bold",
      fontSize: 20,
    },
    temp: {
      width: 500,
      height: 150,
      backgroundColor: '#486D84',
    },
  });




