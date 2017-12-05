import React from 'react';
import {TouchableOpacity,Platform, StyleSheet, Text, View, ListView, TextInput,Alert} from 'react-native';
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
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  signup() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(() => {
      Alert.alert(
        '註冊成功',
        '請按左上角返回登入頁',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // alert(this.state.email + '註冊失敗' + errorMessage)
      Alert.alert(
        '註冊失敗',
        (this.state.email + '註冊失敗' + errorMessage),
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    })
  }

  render() {
    return(
      <View >
       <Text>sign</Text>
       <View>
        <TextInput
          
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
          placeholder={"email"}
        />
        <TextInput
          
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          secureTextEntry={true}
          placeholder={"password"}
        />
        <TouchableOpacity onPress={this.signup.bind(this)}>
         <Text>Enter</Text>
        </TouchableOpacity>
       </View>
      </View>
    )
  };
}

// constructor(props)  {
//   super(props);
//   this.state={
//       username:'',
//       password:'',
//   }
//     database = firebase.database();
//     user=database.ref('User');
// }
  
//   submit(){
//     user.push({
//         Username:this.state.username,
//         Password:this.state.password,
//     },Alert.alert("Hello", "Welcome")
//     )
    
//   }

//   getUid(){
//     firebase.auth().onAuthStateChanged(function(user) {
//       if (user) {
//         user.getIdToken().then(function(user) {
//           console.log(user)
//         });
//       }
//     });
//   }

// render() {
//   return (
//     <View>
//       <TextInput placeholder={"username"} onChangeText={(value)=>this.setState({username:value})}/>        
//       <TextInput placeholder={"password"} secureTextEntry={true} onChangeText={(value)=>this.setState({password:value})}/>
//       <Text style={[styles.submit]} onPress={this.submit.bind(this)}>Submit</Text>
//     </View>
//   );
// }
// }
