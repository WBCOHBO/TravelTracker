import React from 'react';
import {Text,StyleSheet, View, ListView, TouchableHighlight, Dimensions, Image, Animated, TextInput} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import data from '../components/data';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#555566'
    },
    TextTitle:{
      marginTop:50,
      fontSize: 30,
      left:50,
    },
    SmallTitle:{
      height:50,
      left:50,
      fontSize: 20,
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        borderColor: '#cecece',
        marginBottom: 50,
        marginHorizontal: 50
    },
    content: {
        // zIndex: 1
    },
    footerContainer: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 10,
      backgroundColor: '#555566' ,
      marginHorizontal: 40,      
    },
    listContainer: {
        marginHorizontal: 10
    },
    text: {
        color: '#fff'
    },
    containerCell: {
        marginBottom: 10
    },
    LastNextStep:{
      flex:1,
      flexDirection: 'row',    
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default class extends React.Component {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
        dataSource: ds.cloneWithRows(data),
        text: ''
    }
}

renderRow(rowData){
    return (
        <TouchableHighlight style={styles.containerCell}>
            <View>
                <View style={styles.footerContainer}>
                    <Text style={styles.text}>{rowData.friend}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}
filterSearch(text){
    const newData = data.filter(function(item){
        const itemData = item.friend.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
    })
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newData),
        text: text
    })
}
render(){
    return (
        <View style={styles.container}>
            <Animated.View
                style={[styles.content, {
                    backgroundColor: 'white',
                    flex: 1.3,
                    transform: [
                        {
                            perspective: 450
                        },
                    ]
                }]}
            >
            <Text style={styles.TextTitle}>搜尋車友</Text>
            <Text style={styles.SmallTitle}>輸入id開始尋找你的朋友</Text>
                <TextInput 
                    placeholder="輸入id"
                    style={styles.textInput}
                    onChangeText={(text) => this.filterSearch(text)}
                    value={this.state.text}
                />
                <ListView 
                    enableEmptySections={true}
                    style={styles.listContainer}
                    renderRow={this.renderRow.bind(this)}
                    dataSource={this.state.dataSource}
                />
            </Animated.View>

           <View style={styles.LastNextStep}>
              <Button style={{width:250}} onPress={Actions.pop}>上一步</Button>
              <Button style={{width:250}} onPress={Actions.MenuModal}>下一步</Button>
            </View>                        
        </View>
    )
}
}
