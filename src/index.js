// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Navigator
// } from 'react-native';
// import Login from './Login/Login';
// import NavAllDay from './text/test';


// const TravelTracker = () => (
//   <NavAllDay/>
// );

// AppRegistry.registerComponent('TravelTracker', () => TravelTracker);

// import React, { Component } from 'react';
// import {
//   AppRegistry,
// } from 'react-native';
// import App from './Login/Login'
// import { StackNavigator } from 'react-navigation';
// import SecondScreen from './registered/registered'

// class TravelTracker extends Component {
//   static navigationOptions = {
//     title: '行車紀錄趣',
//   };

//   render(){
//     const { navigation } = this.props;

//     return (
//       <App navigation={ navigation }/>
//     );
//   }
// }

// const SimpleApp = StackNavigator({
//   Home: { screen: TravelTracker },
//   SecondScreen: { screen: SecondScreen, title: 'ss' },
// });

// AppRegistry.registerComponent('TravelTracker', () => SimpleApp);

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Launch from './components/Launch';
import Register from './components/Register';
import Login from './components/Login';
import Login2 from './components/Login2';
import Login3 from './components/Login3';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';
import Home from './components/Home';
import DrawerContent from './components/drawer/DrawerContent';
import TabView from './components/TabView';
import TabIcon from './components/TabIcon';
import EchoView from './components/EchoView';
import MessageBar from './components/MessageBar';
import ErrorModal from './components/modal/ErrorModal';
import DemoLightbox from './components/lightbox/DemoLightbox';
import MenuIcon from './images/menu_burger.png';

const styles = StyleSheet.create({
  // container: {
  //   flex: 1, 
  //   backgroundColor: 'blue',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};  //啥意思

const getSceneStyle = () => ({
  backgroundColor: '#F5FCFF',
  shadowOpacity: 1,
  shadowRadius: 3,
});

const Example = () => (
  <Router
    createReducer={reducerCreate}
    getSceneStyle={getSceneStyle}
  >
    <Overlay>
      <Modal
        hideNavBar
        transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}
      >
        <Lightbox>
          <Stack
            hideNavBar
            key="root"
            titleStyle={{ alignSelf: 'center' }}
          >
            <Scene key="echo" back clone component={EchoView} getTitle={({ navigation }) => navigation.state.key} />
            <Scene key="launch" component={Launch} title="Launch" initial />

            <Stack
              back
              backTitle="Back"
              key="register"
              duration={0}
            >
              <Scene key="_register" component={Register} title="Register" />
              <Scene key="register2" component={Register} title="Register2" />
              <Scene key="home" component={Home} title="Replace" type={ActionConst.REPLACE} />
            </Stack>

            <Drawer
              hideNavBar
              key="drawer"
              contentComponent={DrawerContent}
              drawerImage={MenuIcon}
            >
              {/*
                Wrapper Scene needed to fix a bug where the tabs would
                reload as a modal ontop of itself
              */}
              <Scene hideNavBar>
                <Tabs
                  key="tabbar"
                  swipeEnabled
                  showLabel={false}
                  tabBarStyle={styles.tabBarStyle}
                  activeBackgroundColor="white"
                  inactiveBackgroundColor="rgba(255, 0, 0, 0.5)"
                  tabBarPosition={"bottom"}
                >
                  {/* <Stack
                    key="tab_1"
                    title="Tab #1"
                    tabBarLabel="TAB #1"
                    inactiveBackgroundColor="#FFF"
                    activeBackgroundColor="#DDD"
                    icon={TabIcon}
                    navigationBarStyle={{ backgroundColor: 'green' }}
                    titleStyle={{ color: 'white', alignSelf: 'center' }}
                  >
                    <Scene
                      key="tab1_1"
                      component={TabView}
                      title="Tab #1_1"
                      onRight={() => alert('Right button')}
                      rightTitle="Right"

                    />

                    <Scene
                      key="tab1_2"
                      component={TabView}
                      title="Tab #1_2"
                      back
                      titleStyle={{ color: 'black', alignSelf: 'center' }}
                    />
                  </Stack> */}

                  {/* <Stack
                    key="tab_2"
                    title="主頁"
                    icon={TabIcon}
                    initial
                  >
                    <Scene
                      key="tab_2_1"
                      component={TabView}
                      title=""
                      leftTitle="編輯"
                      onLeft={() => { }}
                      
                    /> */}
                    {/* <Scene
                      key="tab_2_2"
                      component={TabView}
                      title="Tab #2_2"
                      onBack={() => alert('onBack button!')}
                      backTitle="Back!"
                      panHandlers={null}
                    /> */}
                  {/* </Stack> */}

                  <Stack 
                    key="tab_3"
                    title="主頁"
                    icon={TabIcon}
                    initial
                  >
                    <Scene
                      component={TabView}
                      key="tab_3_1"
                      title=""
                      leftTitle="編輯"
                      onLeft={() => { }}
                    />
                  </Stack>

                  {/* <Stack key="tab_4">
                    <Scene key="tab_4_1" component={TabView} title="Tab #4" hideNavBar icon={TabIcon} />
                  </Stack> */}
                  <Stack key="tab_5">
                    <Scene key="tab_5_1" component={TabView} title="設定" icon={TabIcon} leftTitle=""
                      onLeft={() => { }} />
                  </Stack>
                </Tabs>
              </Scene>
            </Drawer>
          </Stack>

          <Scene key="demo_lightbox" component={DemoLightbox} />
        </Lightbox>
        <Scene key="error" component={ErrorModal} />
        <Stack key="login" titleStyle={{ alignSelf: 'center' }}>
          <Scene
            key="loginModal"
            component={Login}
            title="Login"
            onExit={() => console.log('onExit')}
            leftTitle="Cancel"
            onLeft={Actions.pop}
          />
          <Scene
            key="loginModal2"
            component={Login2}
            title="Login2"
            backTitle="Back"
            panHandlers={null}
            duration={1}
          />
          <Scene
            key="loginModal3"
            hideNavBar
            component={Login3}
            title="Login3"
            panHandlers={null}
            duration={1}
          />
        </Stack>
      </Modal>

      <Scene component={MessageBar} />
    </Overlay>
  </Router>
);

AppRegistry.registerComponent('TravelTracker', () => Example);
