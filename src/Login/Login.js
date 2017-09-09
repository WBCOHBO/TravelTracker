import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="user name."
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="password."
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    );
  }
}