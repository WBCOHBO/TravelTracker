import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TextSample from './text/text';
import Login from './Login/Login';

const TravelTracker = () => (
    <Login/>
);

AppRegistry.registerComponent('TravelTracker', () => TravelTracker);