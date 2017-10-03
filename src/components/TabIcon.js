import React, {PropTypes,} from 'react';
import {Text,LeftButton} from 'react-native';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

const TabIcon = (props) => {
  return <Text style={{color: props.focused ? 'red' : 'black'}}>
    {props.title}
  </Text>
  Actions.refresh({renderBackButton: () => 
    <LeftButton 
     leftButtonIcon={"arrow-back"} 
     onLeft={() => Actions.pop()} leftButtonColor={"blue"} 
     leftButtonIconSize={30} 
    />
})
};

TabIcon.propTypes = propTypes;

export default TabIcon;
