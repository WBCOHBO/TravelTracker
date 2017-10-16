import React from 'react';
import { PropTypes } from "react";
import { Dimensions ,TouchableOpacity,SectionList,Text,StyleSheet, View, ListView, TouchableHighlight, Image, Animated, TextInput,ViewPropTypes} from "react-native";
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import TeamData from '../components/TeamData';
import Modal from 'react-native-modalbox';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },    
  content: {
      // zIndex: 1
  },
  footerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#555566' ,
    // marginHorizontal: 10,      
  },
  listContainer: {
      marginHorizontal: 10
  },
  text: {
    color: '#fff',
    fontSize: 20,
    left:15,
    top:15,
    marginRight:260
  },
  Teamtext:{
    left:15,
    color: '#fff',
    fontSize: 20,
    top:15,
  },
  containerCell: {
      marginBottom: 1
  },
  textSection:{
    marginBottom:-20, 
    color: 'black',
    bottom:8,
  },
  personal:{
    fontSize: 20,
    color: '#fff',
    left:110,
    top:40,
  },
  personalPhoto:{
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 5,
    bottom:40,
    marginBottom:-15
  },
  imageAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 5
  },
  modal3:{
    height: 300,
    width: 300
  },
  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10,    
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  PopText:{
    color: "black",
    fontSize: 20,
  },
});

export default class extends React.Component {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(TeamData),
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
    };
}

// ListView
renderRow(rowData){
  const img = rowData.image
  return (
      <View style={styles.containerCell}>
              <View style={styles.footerContainer}>
                  <View>
                  <Button onPress={() => this.refs.modal3.open()} style={styles.btn}>
                      <Image 
                          style={styles.imageAvatar}
                          source={{uri: rowData.user}}
                      />
                    </Button>
                  </View>
                    <View>
                      <Text style={[styles.personal]}>{rowData.personal}</Text>
                      <Text style={styles.personal}>{rowData.personalID}</Text>
                      <Image style={styles.personalPhoto}
                      source={{uri: rowData.personalPhoto}}/>
                    </View>

                    <Text style={styles.textSection}>{rowData.section}</Text>
                    <Text style={[styles.textSection]}>{rowData.section2}</Text>
                    <Button onPress={() => this.refs.modal3.open()} style={styles.btn}>
                    <Text style={[styles.Teamtext]}>{rowData.team}</Text>
                    <Text style={[styles.text]}>{rowData.friend}</Text>               
                    </Button>

              </View>
      </View>
      
    )
}

render(){
    return (
        <View style={styles.container}>
            <Animated.View
                style={[styles.content, {
                    backgroundColor: 'white',
                    flex: 1.3,
                }]}
            >
            
              <ListView 
                enableEmptySections={true}
                style={styles.listContainer}
                renderRow={this.renderRow.bind(this)}
                dataSource={this.state.dataSource}
              />      
              

              <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} >
                  <Text style={styles.PopText}>我有一隻小毛驢</Text>
                  <Button onPress={Actions.searchFriend} style={styles.btn}>test1 </Button>
                  <Button onPress={Actions.searchFriend} style={styles.btn}>test2 </Button>
              </Modal>     
            </Animated.View>                        
        </View>
        
    )
}
}
