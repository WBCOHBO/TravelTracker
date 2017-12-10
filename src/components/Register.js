import React from 'react';
import { TouchableOpacity, Platform, StyleSheet, Text, View, ListView, TextInput, Alert, Image} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import firebase from '../api/firebase';
import Login from '../components/Login';


const styles = StyleSheet.create({
  submit:{
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'flex-start',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#696969',
    padding:50,
    marginTop:-100,
  },
  main:{
    width:200,
  },
  Title:{
    fontSize:20,
    color:'#ffffff',
    
  },
  textInput:{
    color:'#ffffff',
    marginTop: 10,
    textAlign: 'center',
  },
  chack:{
    justifyContent:'flex-end',
  }, 
  button: {
    backgroundColor: '#9FE8D9',
    width: 200,
    textAlign: 'center',
    borderRadius: 30,
    padding: 5,
    color: '#696969',
    fontWeight: '300',
    fontSize: 15,
    marginTop:20,
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
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(()=>{
      Alert.alert('歡迎','註冊成功！',[{text:"OK",onPress:Actions.Login}])
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
        
      <View style={styles.container}>
      
        <Image
          style={[{ width: 175 }]}
          source={require('../images/logo.png')}
        />
        <Text style={styles.Title}>註冊</Text>
        
       <View style={styles.main}>
          <TextInput 
          style={styles.textInput}
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
          placeholder={"設定信箱"}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          secureTextEntry={true}
          placeholder={"設定密碼"}
        />
         
            <TouchableOpacity  onPress={this.signup.bind(this)}>
              <Text style={styles.button}>註冊</Text>
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
