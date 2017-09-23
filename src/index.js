// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Navigator
// } from 'react-native';
// import Login from './Login/Login';
// import NavAllDay from './text/test';


// const TravelTracker = () => (
//   <NavAllDay/>
// );

// AppRegistry.registerComponent('TravelTracker', () => TravelTracker);
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './text/test'
import { StackNavigator } from 'react-navigation';
import SecondScreen from './registered/registered'

class TravelTracker extends Component {
  static navigationOptions = {
    title: 'Home Screen',
  };

  render(){
    const { navigation } = this.props;

    return (
      <App navigation={ navigation }/>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: TravelTracker },
  SecondScreen: { screen: SecondScreen, title: 'ss' },
});

AppRegistry.registerComponent('TravelTracker', () => SimpleApp);