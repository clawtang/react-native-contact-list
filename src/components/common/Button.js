import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

const Button = ({ onPress, children, containerStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

export { Button };

const styles = {
  text: {
    alignSelf: 'center',
    // color: '#007aff',
    color: '#292929',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  container: {
    // flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    // borderColor: '#007aff',
    borderColor: '#292929',
    marginLeft: 5,
    marginRight: 5,
  }
};
