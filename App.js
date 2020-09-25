import React, { Component } from 'react';
import {View} from 'react-native';
import firebase from 'firebase';

import config from './src/config';
import Header from './src/components/Header';
import LoginFrom from './src/components/LoginFrom';
import Spinner from './src/components/Spinner';
import Button from './src/components/Button';
import Card from './src/components/Card';
import CardSection from './src/components/CardSection';

class  App extends Component {
  state = {
    isLogin: null
  }
  componentDidMount() {
    if (!firebase.apps.length) {
      console.log('init firebase ...');
    firebase.initializeApp(config.firebaseConfig)
    }
    firebase.auth().onAuthStateChanged((user)=>{
        console.log('Auth State Change', user)
        this.setState({isLogin: !!user})
    })
  }
  renderContent() {
    switch (this.state.isLogin){
      case true:
        return (
          <Card>
            <CardSection>
              <Button>Logout</Button>
            </CardSection>
          </Card>
          )      
      case false:
        return <LoginFrom/>
        default:
        return (
        <Card>
          <CardSection>
            <Spinner/>
          </CardSection>
        </Card>
        )      
    }
  }
  render() { 
    return ( 
      <View>
      <Header title='Sign In'></Header>
      {this.renderContent()}
      </View>
     );
  }
}
 
export default App;