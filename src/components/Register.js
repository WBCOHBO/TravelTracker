import React from 'react';
import {Platform, StyleSheet, Text, View, ListView, TextInput,Alert} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import firebase from '../api/firebase';

const styles = StyleSheet.create({
  submit:{
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'flex-start',
  },
});

export default class Register extends React.Component {
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
      },Alert.alert("Hello", "Welcome")
      )
    }

render() {
    return (
      <View>
        <TextInput placeholder={"username"} onChangeText={(value)=>this.setState({username:value})}/>        
        <TextInput placeholder={"password"} secureTextEntry={true} onChangeText={(value)=>this.setState({password:value})}/>
        <Text style={[styles.submit]} onPress={this.submit.bind(this)}>Submit</Text>
      </View>
    );
 }
}
