import React from 'react';
import { PropTypes } from "react";
import { StyleSheet, Text, View, ViewPropTypes } from "react-native";
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

const contextTypes = {
  drawer: React.PropTypes.object,
};

const propTypes = {
  name: PropTypes.string,
  sceneStyle: ViewPropTypes.style,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    // borderColor: 'red',
  },
});

class Menu extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.sceneStyle]}>
        <Text> 321 </Text>
      </View>
    );
  }
}
Menu.contextTypes = contextTypes;
Menu.propTypes = propTypes;

export default Menu;
