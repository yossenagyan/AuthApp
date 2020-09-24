import React, { Component } from 'react';
import {View} from 'react-native';
import firebase from 'firebase';

import config from './src/config';
import Header from './src/components/Header';
import LoginFrom from './src/components/LoginFrom';

class  App extends Component {
  componentDidMount() {
    if (!firebase.apps.length) {
      console.log('init firebase ...');
    firebase.initializeApp(config.firebaseConfig)
    }
  }
  render() { 
    return ( 
      <View>
      <Header title='Authentication'></Header>
      <LoginFrom></LoginFrom>
      </View>
     );
  }
}
 
export default App;