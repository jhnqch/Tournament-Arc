/*--- 
  SUMMARY:
  

---*/
import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import {AppLoading} from 'expo';
import { AppNavigator } from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});

export var accounts = []

export class Account {
    constructor(email, username, password) {
        this.email = email
        this.username = username
        this.password = password
        accounts.push(this)
    }
}

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
