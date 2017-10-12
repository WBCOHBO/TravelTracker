import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { MessageBarManager } from 'react-native-message-bar';

const styles = StyleSheet.create({
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
    textAlign: 'center',
    fontSize: 15,
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
        <View style={styles.buttonContainer}>
        <Button 
        title="登入" onPress={() => Actions.searchFriend({ data: '', title: '' })}
        color="#81D8D0"
         />
        <Text style={styles.or}>----------------------或----------------------</Text>
          <Button style={{}} title="使用facebook登入" onPress={Actions.searchFriend} />
        <View>
        <TouchableOpacity onPress={Actions.register}>
           <Text style={{height: 80, textAlign: 'center',}}> 沒有帳號？點我註冊 </Text>
        </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
}

export default Launch;
