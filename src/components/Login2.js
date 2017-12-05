import React from 'react';
import {  View,Text,TextInput,TouchableOpacity} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import * as firebase from 'firebase';
import apiFirebase from '../api/firebase';

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#F5FCFF",
//     },
// });

// export default class extends React.Component {
//     render(){
//         const title = this.props.title || 'No Title';
//         const data = this.props.data || 'No Data';
//         return (
//             <View style={styles.container}>
//                 <Text>Login page 2</Text>
//                 <Text>Title: {title}</Text>
//                 <Text>Data: {data}</Text>
//                 <Button onPress={() => { Actions.pop(); Actions.refresh({ data: 'Data after pop', title: 'title after pop' }); }}>Back and refresh</Button>
//                 <Button onPress={() => Actions.loginModal3({ data:"Custom data3", title:"Custom title3" })}>Login 3</Button>
//             </View>
//         );
//     }
// }

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
        }
      }
      signin() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
          alert('登入成功')
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert('登入失敗' + errorCode + errorMessage)
        })
      }
      render() {
        return(
          <View >
           <View>
            <TextInput
             
             onChangeText={(text) => this.setState({email: text})}
             value={this.state.email}
             placeholder={"請輸入註冊信箱"}
            />
            <TextInput
             
             onChangeText={(text) => this.setState({password: text})}
             value={this.state.password}
             placeholder={"請輸入註冊密碼"}
            />
            <TouchableOpacity onPress={this.signin.bind(this)}>
             <Text>Enter</Text>
            </TouchableOpacity>
           </View>
          </View>
        )
      };
    }
