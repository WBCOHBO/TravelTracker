import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { MessageBarManager } from 'react-native-message-bar';
import { AppRegistry, Image } from 'react-native';

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

});

class Launch extends React.Component {
  
  render() {
    return (
    
      <View style={styles.container}>
        <Image
          style={[{ width: 175 }]}
          source={require('../images/logo.png')}
        />
        
        {/* <Text style={styles.TextTitle}>智慧行車趣</Text>
        <Text style={styles.SmallTitle}>Travel Tracker</Text> */}
        <View>
          <TouchableOpacity onPress={Actions.searchFriend}>
            <Text style={[styles.button, { marginTop:10 }]}> 登入 </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row-reverse', marginTop: 20 }}>
          <Text style={styles.or}></Text>
          <Text style={styles.orText}>或</Text>
          <Text style={styles.or}></Text>
        </View>
        <View>
          <TouchableOpacity onPress={Actions.searchFriend}>
            <Text style={[styles.button, { backgroundColor: '#539BEF',color:'#ffffff'}]}> 使用facebook登入 </Text>
          </TouchableOpacity>
        </View>

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
