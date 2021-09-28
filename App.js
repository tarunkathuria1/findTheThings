import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import WelcomeScreen from './screen/welcomecreen';
import FindScreen from './screen/FindScreen'
export default class App extends Component {
  render(){
    return (
      <AppContainer/>
    );
}
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  FindScreen:{screen: FindScreen}
})

const AppContainer =  createAppContainer(switchNavigator);