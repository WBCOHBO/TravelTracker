import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Alert,navigator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { MessageBarManager } from 'react-native-message-bar';
import { AppRegistry, Image } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import * as firebase from 'firebase';
import apiFirebase from '../api/firebase';
import searchFriend from '../components/searchFriend';


const styles = StyleSheet.create({
  button:{
    backgroundColor: '#9FE8D9',
    width : 200, 
    textAlign: 'center',
    borderRadius: 30,
    padding: 5, 
    color: '#696969',
    fontWeight: '300',
    fontSize : 15,
    
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#696969',
    
  },
  TextTitle: {
    color:'#333333',
    textAlign: 'center',
    fontSize: 30,
    fontWeight : '900',
    color : '#ffffff' 
  },
  SmallTitle:{
    height:60,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400', 
    color: '#ffffff' 
  },
  or:{
    height:1,
    width : 100 ,
    backgroundColor:'#C3D0C7',
    marginLeft : 10,
    marginRight :10 ,
  },
  orText:{
    position:'relative',
    top : -10,
    color: '#ffffff' 
  }, 
  modal3:{
    height: 300,
    width: 300,
    borderRadius:4,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10,    
  },
  textInput: {
    height: 50,
    borderWidth: 0,
    borderColor: '#cecece',
    width: 200,
    borderRadius:30,
    marginBottom: 5,
    color:'#ffffff',
    textAlign:'center',

    // marginHorizontal: 50
},
  PopText:{
    fontSize: 18,
    marginBottom: 20
  },
  errorTextStyle: {
    fontSize: 15,
    alignSelf: 'center',
    color: '#F08080',
    marginTop: 5
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

class App extends React.Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="login" component={Login} title="Login" />
        <Scene key="searchFriend" component={searchFriend} />
      </Scene>
    </Router>
  }
}
class Launch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      // error:'',
      // loading:false
    }
  }
  
  state = { email: '', password: '', error: '' };
  onButtonPress() {
    const { email, password } = this.state;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(()=>{
      // Alert.alert('歡迎','登入成功！',[{text:"OK",onPress:Actions.searchFriend}])
      Actions.searchFriend()
    })
      .catch(() => {
          this.setState({ error: '帳號或密碼錯誤' })
      });
    
    this.setState({ error: '' });
    this.setState({ error: '', loading: true }); 

  }


  render() {
    return (
    
      <View style={styles.container}>
        <Image
          style={[{ width: 175 }]}
          source={require('../images/logo.png')}
        />

      {/* <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} > */}
    
        
          <View>
            <TextInput
              style={styles.textInput}
             onChangeText={(text) => this.setState({email: text})}
             value={this.state.email}
             placeholder={"請輸入註冊信箱"}
            />
            <TextInput
             style={styles.textInput}
             autoCorrect={false}
             placeholder='*******'
             secureTextEntry
             onChangeText={(text) => this.setState({password: text})}
             value={this.state.password}
             placeholder={"請輸入註冊密碼"}
            />
          <View>
            <Button onPress={this.onButtonPress.bind(this)} >
              <Text style={[styles.button, { marginTop: 10 }]} > 登入 </Text>
            </Button>
          </View>
            {/* <Button style={styles.button} onPress={this.onButtonPress.bind(this)} >
             <Text>登入</Text>
            </Button> */}
            <Text style={styles.errorTextStyle}>
              {this.state.error}
            </Text>
          </View>
      {/* </Modal> */}
      {/* <View style={{ flexDirection: 'row-reverse', marginTop: 20 }}>
        <Text style={styles.or}></Text>
        <Text style={styles.orText}>或</Text>
        <Text style={styles.or}></Text>
      </View>
      <View>
        <TouchableOpacity onPress={Actions.searchFriend}>
          <Text style={[styles.button, { backgroundColor: '#539BEF',color:'#ffffff'}]}> 使用facebook登入 </Text>
        </TouchableOpacity>
      </View> */}

      <View>
        <TouchableOpacity onPress={Actions.register}>
          <Text style={{ height: 80, textAlign: 'center', marginTop: 10,color : '#ffffff' }}> 沒有帳號？點我註冊 </Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

export default Launch;
