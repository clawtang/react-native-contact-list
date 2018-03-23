import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const HorizontalScrollPage = (props) => {
  return (
    <View style={[styles.outer, props.containerStyle]}>
      <Text style={[styles.innerText, props.textStyle]}>
        {props.text || 'Component: HorizontalScrollPage'}
      </Text>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  outer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  innerText: {
    color: '#444',
    fontSize: 23,
    fontWeight: 'bold',
  },
});

export { HorizontalScrollPage };
