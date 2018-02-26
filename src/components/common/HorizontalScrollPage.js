import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const HorizontalScrollPage = (props) => {
  return (
    <View style={[styles.outer, props.style]}>
      <Text style={[styles.innerText, props.style]}>Component: HorizontalScrollPage</Text>
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
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
  },
});

export { HorizontalScrollPage };
