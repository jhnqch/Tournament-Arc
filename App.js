/*--- 
  SUMMARY:
  This is the main file that the program will run 

---*/

import React, { useState } from "react";
import * as Font from "expo-font";
import Home from "./screens/home";
import { AppLoading } from "expo";
import { AppNavigator } from "./routes/drawer";
import { Text, View, StyleSheet } from "react-native";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import { Authenticator } from "aws-amplify-react-native";

Amplify.configure(config);

export default function App() {
  return (
    <View style={styles.containers}>
      <Authenticator>
        <Text>Home</Text>
      </Authenticator>
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
