import React, { Component } from 'react';
import firebase from '../api/firebase';
import Modal from 'react-native-modalbox';
import {Platform, StyleSheet, Text, View, ListView, TextInput,} from 'react-native';

export default class App extends Component {

  constructor(props)  {
    super(props);
    this.state={
        username:'',
        password:'',
    }
      database = firebase.database();
      user=database.ref('User');
  }
    
    submit(){
      user.push({
          Username:this.state.username,
          Password:this.state.password,
      },()=>alert("Welcome"))
    }


render() {
    return (
      <View style={[{ flex: 1 }]}>
        <TextInput placeholder={"username"} onChangeText={(value)=>this.setState({username:value})}/>        
        <TextInput placeholder={"password"} secureTextEntry={true} onChangeText={(value)=>this.setState({password:value})}/>
          <Text onPress={this.submit.bind(this)}>Submit</Text>
      </View>
    );
 }
}