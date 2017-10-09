import React from 'react';
import {View, Text, StyleSheet,TextInput} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  TextTitle:{
    fontSize: 30,
    right:100,
  },
  SmallTitle:{
    height:50,
    right:50,
    fontSize: 20,
  },
  LastNextStep:{
    flexDirection: 'row',    
  }
});

export default class extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Text style={styles.TextTitle}>搜尋車友</Text>
        <Text style={styles.SmallTitle}>輸入id開始尋找你的朋友</Text>
        <View style={styles.LastNextStep}>
          <Button style={{width:250}} onPress={Actions.pop}>上一步</Button>
          <Button style={{width:250}} onPress={Actions.MenuModal}>下一步</Button>
        </View>
      </View>
    );
  }
}
