import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Navigator} from 'react-native';
import Launch from './components/Launch';
import Register from './components/Register';
import Login from './components/Login';
import Login2 from './components/Login2';
import Login3 from './components/Login3';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import {Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox,} from 'react-native-router-flux';
import Home from './components/Home';
import DrawerContent from './components/drawer/DrawerContent';
import TabView from './components/TabView';
import Setting from './components/Setting';
import Menu from './components/Menu';
import TabIcon from './components/TabIcon';
import EchoView from './components/EchoView';
import MessageBar from './components/MessageBar';
import ErrorModal from './components/modal/ErrorModal';
import DemoLightbox from './components/lightbox/DemoLightbox';
import MenuIcon from './images/menu_burger.png';

const styles = StyleSheet.create({
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
        
        {/* 這才是Login */}
        <Stack key="login" titleStyle={{ alignSelf: 'center' }} hideNavBar>
          <Scene
            key="searchFriend"
            component={Login}
            leftTitle="Cancel"
            onLeft={Actions.pop}
          />
          <Tabs
            swipeEnabled
            showLabel={false}
            tabBarStyle={styles.tabBarStyle}
            activeBackgroundColor="white"
            inactiveBackgroundColor="rgba(255, 0, 0, 0.5)"
            tabBarPosition={"bottom"}
          >
          <Stack key="MenuModal">
            <Scene key="MenuModal_2" component={Menu} back title="主頁" icon={TabIcon} 
            onLeft={() => alert('Left button!')} leftTitle="Left" />
          </Stack>

          <Stack key="SettingModal">
            <Scene key="SettingModal_2" component={Setting} title="設定" icon={TabIcon} leftTitle=""
            onLeft={() => { }} />
          </Stack>
          </Tabs>
        </Stack>
      </Modal>

      <Scene component={MessageBar} />
    </Overlay>
  </Router>
);

// class Example extends React.Component {
//   render() {
//     return <Router>

//       <Stack key="login" titleStyle={{ alignSelf: 'center' }} hideNavBar>
//       <Tabs
//         swipeEnabled
//         showLabel={false}
//         tabBarStyle={styles.tabBarStyle}
//         activeBackgroundColor="white"
//         inactiveBackgroundColor="rgba(255, 0, 0, 0.5)"
//         tabBarPosition={"bottom"}
//       >
//       <Stack key="tab_3">
//         <Scene key="tab_3_1" component={TabView} title="主頁" icon={TabIcon} leftTitle="編輯"
//         onLeft={() => {Actions.pop}} />
//       </Stack>

//       <Stack key="tab_5">
//         <Scene key="tab_5_1" component={Setting} title="設定" icon={TabIcon} leftTitle=""
//         onLeft={() => { }} />
//       </Stack>
//       </Tabs>
//     </Stack>
//     </Router>
//   }
// }

AppRegistry.registerComponent('TravelTracker', () => Example);
