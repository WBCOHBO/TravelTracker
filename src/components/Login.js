import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { MessageBarManager } from 'react-native-message-bar';

const styles = StyleSheet.create({
  login:{
    backgroundColor: '#9FE8D9',
    width : 200, 
    textAlign: 'center',
    borderRadius: 30,
    padding: 5, 
    color : '#ffffff',
    
  },
  facebook : {
    backgroundColor: '#539BEF',
    width: 200,
    textAlign: 'center',
    borderRadius: 30,
    padding: 5,
    color: '#ffffff',
    marginTop : 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'transparent',
    
  },
  TextTitle: {
    textAlign: 'center',
    fontSize: 30,
  },
  SmallTitle:{
    height:60,
    textAlign: 'center',
    fontSize: 20,
  },
  or:{
    height:1,
    width : 100 ,
    backgroundColor:'#95989A',
    marginLeft : 10,
    marginRight :10 ,
  },
  orText:{
    position:'relative',
    top : -10,
  },
  buttonContainer:{
    // flex: 1,
    // marginLeft: 100,
    // marginRight: 100,
    borderRadius: 1,
    
  },

  // button: {
  //   marginLeft: 200,
  //   marginRight: 50,
  //   padding: 5,
  //   backgroundColor: '#406E9F',
  //   borderRadius: 9,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

class Launch extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.TextTitle}>智慧行車趣</Text>
        <Text style={styles.SmallTitle}>Travel Tracker</Text>
        <View>
          <TouchableOpacity onPress={Actions.searchFriend}>
            <Text style={styles.login}> 登入 </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={Actions.searchFriend}>
            <Text style={styles.facebook}> 使用facebook登入 </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row-reverse', marginTop: 20 }}>
          <Text style={styles.or}></Text>
          <Text style={styles.orText}>或</Text>
          <Text style={styles.or}></Text>
        </View>
          <View>
          <TouchableOpacity onPress={Actions.register}>
            <Text style={{height: 80, textAlign: 'center',}}> 沒有帳號？點我註冊 </Text>
          </TouchableOpacity>
          </View>
        {/* </View> */}
      </View>
      
    );
  }
}

export default Launch;
