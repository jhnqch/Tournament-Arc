/*--- 
  SUMMARY:
  This is the main file that the program will run 

---*/
<<<<<<< Updated upstream
import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import {AppLoading} from 'expo';
import { AppNavigator } from './routes/drawer';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
=======

import React, { useState } from "react";
import * as Font from "expo-font";
import Home from "./screens/home";
import { AppLoading } from "expo";
import { AppNavigator } from "./routes/drawer";
import { Text, View, StyleSheet } from "react-native";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import { Authenticator } from "aws-amplify-react-native";
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
/*--- 
This comment is a test comment to put while in testFile branch
---*/

export default function App(){
  const [fontsLoaded, setFontsLoaded] = useState(false)
  new Account("example@email.com", "user1", "123")

  if(fontsLoaded){
      return (
          <AppNavigator />
      );
  } else {
      return (
          <AppLoading
              startAsync={getFonts}
              onFinish={() => setFontsLoaded(true)}
          />
      )
  }
}
=======
const styles = StyleSheet.create({
  containers: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
>>>>>>> Stashed changes
