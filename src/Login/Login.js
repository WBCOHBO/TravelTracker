// import React, { Component } from 'react';
// import { 
//   AppRegistry,
//   Text,
//   TextInput,
//   View,
//   TouchableOpacity,
//   Button,
//   StyleSheet,
//   Navigator,
// } from 'react-native';
// import registered from '../registered/registered';

// // <View style={[styles.container, { backgroundColor: tabBackColor }]}>
// // styles表示方式

// const styles = StyleSheet.create({
//   container: {
//     flex:2,
//     justifyContent: 'center',
//   },
//   TextInput: {
//     height:40,
//     marginLeft: 40,
//     marginRight: 60,
//   },
//   buttonContainer:{
//     // flex: 1,
//     // justifyContent: 'flex-end',
//     // alignItems: 'center',
//     // alignItems: 'flex-end'
//   },
//   button: {
//     marginLeft: 200,
//     marginRight: 50,
//     padding: 5,
//     backgroundColor: '#406E9F',
//     borderRadius: 9,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="user name."
//           onChangeText={(text) => this.setState({text})}
//         />
//         <TextInput
//           style={styles.TextInput}
//           placeholder="password."
//           onChangeText={(text) => this.setState({text})}
//         />
//         </View>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}> 註冊 </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//     let renderScene = (route, nav) => {
//       let onBack = () => {
//         nav.pop();
//       }
//       switch (route.id) {
//         case 'registered':
//           return <Page1 onBack={onBack}/>;
//         default:
//           return (
//             <View style={styles.buttonContainer}>
//             <TouchableOpacity style={styles.button} onPress={() => nav.push({id: 'registered', })}>
//               <Text style={styles.buttonText}> 註冊 </Text>
//             </TouchableOpacity>
//             </View>
//           //   <TouchableOpacity onPress={ props.onBack }>
//           //   <Text style={styles.text}>Back</Text>
//           // </TouchableOpacity>
//             // <View style={styles.center}>
//             //   <ButtonSample buttonText={'Page 1'} onPress={() => nav.push({id: 'registered', })} />
//             //   <ButtonSample buttonText={'Page 2'} onPress={() => nav.push({id: 'simple2', })} />
//             //   <ButtonSample buttonText={'Page 3'} onPress={() => nav.push({id: 'simple3', })} />
//             // </View>
//           )
//       }
//     }
  
//     let configureScene = (route, routeStack) => {
//       switch (route.id) {
//         case 'registered':
//           return Navigator.SceneConfigs.VerticalDownSwipeJump
//         // case 'simple2':
//         //   return Navigator.SceneConfigs.PushFromRight;
//         // case 'simple3':
//         //   return Navigator.SceneConfigs.FloatFromBottom;
//         default:
//           return Navigator.SceneConfigs.PushFromRight;
//       }
//     }
  
//     return (
//       <Navigator
//         style={{ flex: 1 }}
//         initialRoute={{}}
//         configureScene={configureScene}
//         renderScene={renderScene}
//       />
//     )
    
//   }
// }

// // export default (props) => {
  
// // }

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';
import StackNavigator from 'react-navigation';
// const {
//     Router,
//     Route 
// } = Navigator;

import registered from '../registered/registered';


export default (props) => {
  let renderScene = (route, nav) => {
    let onBack = () => {
      nav.pop();
    }
    switch (route.id) {
      case 'registered':
        return <Page1 onBack={onBack}/>;
      case 'simple2':
        return <Page2 onBack={onBack}/>;
      case 'simple3':
        return <Page3 onBack={onBack}/>;
      default:
        return (
          <View style={styles.center}>
            {/* <ButtonSample buttonText={'Page 1'} onPress={() => nav.push({id: 'registered', })} />
            <ButtonSample buttonText={'Page 2'} onPress={() => nav.push({id: 'simple2', })} />
            <ButtonSample buttonText={'Page 3'} onPress={() => nav.push({id: 'simple3', })} /> */}
          <TouchableOpacity onPress={() => nav.push({id: 'registered', })} />
          </View>
        )
    }
  }

  let configureScene = (route, routeStack) => {
    switch (route.id) {
      case 'registered':
        return Navigator.SceneConfigs.VerticalDownSwipeJump
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