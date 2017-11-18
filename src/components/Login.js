import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Button, TextInput, TouchableOpacity  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { MessageBarManager } from 'react-native-message-bar';
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;
import firebase from "firebase";

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   // backgroundColor: 'transparent',
    
  // },
  // TextTitle: {
  //   textAlign: 'center',
  //   fontSize: 30,
  // },
  // SmallTitle:{
  //   height:60,
  //   textAlign: 'center',
  //   fontSize: 20,
  // },
  // or:{
  //   textAlign: 'center',
  //   fontSize: 15,
  // },
  // buttonContainer:{
  //   // flex: 1,
  //   // marginLeft: 100,
  //   // marginRight: 100,
  //   borderRadius: 1,
    
  // },
  // button: {
  //   marginLeft: 200,
  //   marginRight: 50,
  //   padding: 5,
  //   backgroundColor: '#406E9F',
  //   borderRadius: 9,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// var config = {
//   apikey: 'AIzaSyC-fB6VrKjpBv1znS3GfJor3FEwEN-BLow',
//   authDomain: 'traveltracker-9cff9.firebaseapp.com/', 
//   databaseURL: 'https://traveltracker-9cff9.firebaseio.com/'
// }

// const firebaseRef = firebase.initializeApp(config)

class Login extends React.Component {
  // _fbAuth() {
  //   LoginManager.logInWithReadPermissions(['public_profile']).then(function(result) {
  //     if (result.isCancelled) {
  //       alert('Login cancelled');
  //     } else {
  //       AccessToken.getCurrentAccessToken().then((accessTokenData) => {
  //         const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken)
  //         firebase.auth().signInWithCredential(credential).then((result) => {
  //           //Promise was successful
  //         }, (error) => {
  //           //Promise was rejected
  //           console.log(error)
  //         })
  //       }, (error => {
  //         console.log('Some error occurred:' + error)
  //       }))
  //     }
  //   },
  //   function(error) {
  //     alert('Login fail with error: ' + error);
  //   })
  // }
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.TextTitle}>智慧行車趣</Text>
      //   <Text style={styles.SmallTitle}>Travel Tracker</Text>
      //   <View style={styles.buttonContainer}>
      //   <Button 
      //   title="登入" onPress={Actions.searchFriend}
      //   color="#81D8D0"
      //    />
      //   <Text style={styles.or}>----------------------或----------------------</Text>
      //     <Button style={{}} title="使用facebook登入" onPress={Actions.searchFriend} />
      //   <View>
      //   <TouchableOpacity onPress={Actions.register}>
      //      <Text style={{height: 80, textAlign: 'center',}}> 沒有帳號？點我註冊 </Text>
      //   </TouchableOpacity>
      //   </View>
      //   </View>
      // </View>

      <View>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
 
    );
  }
}

export default Login;
