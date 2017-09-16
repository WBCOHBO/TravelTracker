// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Button,
//   TouchableOpacity
// } from 'react-native';

// export default (props) => (
//   <View style={styles.center}>
//     <Text style={styles.text}>Page 1</Text>
//     <TouchableOpacity onPress={ props.onBack }>
//       <Text style={styles.text}>Back</Text>
//     </TouchableOpacity>
//   </View>
// );

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'powderblue',
//   },
//   text: {
//     color: '#fff', fontSize: 30
//   }
// });

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';
import ButtonSample from '../ButtonSample/ButtonSample';
import Page1 from './page1';
// import Page2 from './Page2';
// import Page3 from './Page3';


export default (props) => {
  let renderScene = (route, nav) => {
    let onBack = () => {
      nav.pop();
    }
    switch (route.id) {
      case 'simple1':
        return <Page1 onBack={onBack}/>;
      // case 'simple2':
      //   return <Page2 onBack={onBack}/>;
      // case 'simple3':
      //   return <Page3 onBack={onBack}/>;
      default:
        return (
          <View style={styles.center}>
            <ButtonSample buttonText={'Page 1'} onPress={() => nav.push({id: 'simple1', })} />
            {/* <ButtonSample buttonText={'Page 2'} onPress={() => nav.push({id: 'simple2', })} />
            <ButtonSample buttonText={'Page 3'} onPress={() => nav.push({id: 'simple3', })} /> */}
          </View>
        )
    }
  }

  let configureScene = (route, routeStack) => {
    switch (route.id) {
      case 'simple1':
        return Navigator.SceneConfigs.VerticalDownSwipeJump
      // case 'simple2':
      //   return Navigator.SceneConfigs.PushFromRight;
      // case 'simple3':
      //   return Navigator.SceneConfigs.FloatFromBottom;
      default:
        return Navigator.SceneConfigs.PushFromRight;
    }
  }

  return (
    <Navigator
      style={{ flex: 1 }}
      initialRoute={{}}
      configureScene={configureScene}
      renderScene={renderScene}
    />
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});