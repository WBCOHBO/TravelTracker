
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View,Text, Dimensions,TouchableOpacity,StatusBar } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import Polyline from '@mapbox/polyline';
// import RetroMapStyles from './MapStyles/RetroMapStyles.json';
let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0500;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export default class MapExample extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
        
      }
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
          
        });
      },
    (error) => console.log(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      }
    );
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

   componentWillMount() {
    //  setTimeout(()=>this.setState({statusBarHeight: Constants.statusBarHeight}),500);
 
//  setTimeout(()=>this.forceUpdate() (), 100);
   }
  render() {
      const { height: windowHeight } = Dimensions.get('window');
      const varTop = windowHeight - 125;
      const hitSlop = {
        top: 15,
        bottom: 15,
        left: 15,
        right: 15,
      }
      
      ButtonStyle = function(vheight) {
        return {
          position: 'absolute',
          //top: vheight,
          left: 10,
          right: 10,
          backgroundColor: 'transparent',
          alignItems: 'center',
          
        }
      }
    return (
    <View style={{paddingTop: this.state.statusBarHeight }}>
        <View style={ButtonStyle(varTop)}>
            <TouchableOpacity
            hitSlop = {hitSlop}
              activeOpacity={0.7}
            //   style={styles.mapButton}
              onPress={ () => this.componentDidMount() }
            >
                {/* <Text style={{fontWeight: 'bold', color: 'black',}}>
                  Find Me
                </Text> */}
            </TouchableOpacity>
        </View>
      <MapView
        provider={ PROVIDER_GOOGLE }
        style={ styles.container }
        // customMapStyle={ RetroMapStyles }
        showsUserLocation={ true }
        showsMyLocationButton={ true }
        followUserLocation = {true}
        region={ this.state.region }
        onRegionChange={ region => this.setState({region}) }
        onRegionChangeComplete={ region => this.setState({region}) }
      >
        {/* <MapView.Marker
          coordinate={ this.state.region }
        /> */}
      </MapView>
     </View>
    );
  

    }
}
const styles = StyleSheet.create({
  container: {
    height:  '100%',
    width:  '100%',
  }
});
// const styles = StyleSheet.create({
//     container: {
//         height: '100%',
//      width: '100%',

//     },
//     text: {
//       color: 'white',
//     },
//       map: {
//       flex: 1,
//       zIndex: -1, 
//     },
//     mapButton: {
//       width: 75,
//       height: 75,
//       borderRadius: 85/2,
//       backgroundColor: 'rgba(252, 253, 253, 0.9)',
//       justifyContent: 'center',
//       alignItems: 'center',
//       shadowColor: 'black',
//       shadowRadius: 8,
//       shadowOpacity: 0.12,
//       opacity: .6,
//       zIndex: 10,
//    }});


AppRegistry.registerComponent('MapExample', () => MapExample);