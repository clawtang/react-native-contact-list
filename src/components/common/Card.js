import React from 'react';
import {
  KeyboardAvoidingView,
} from 'react-native';

const Card = (props) => (
  <KeyboardAvoidingView
    behavior="padding"
    keyboardVerticalOffset={100}
    style={styles.containerStyle}
  >
    {props.children}
  </KeyboardAvoidingView>
);

export { Card };

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    margin: 10,
    // marginLeft: 10,
    // marginRight: 10,
    // marginTop: 70,
    // marginTop: 10,
    // flex: 1,
  }
};
