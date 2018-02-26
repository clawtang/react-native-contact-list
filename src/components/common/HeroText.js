import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const HeroText = ({ heroTextContainerStyle, heroTextStyle, children }) => {
  return (
    <View style={[styles.containerStyle, heroTextContainerStyle]}>
      <Text style={[styles.textStyle, heroTextStyle]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 25,
    color: '#292929',
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 10,
    fontWeight: 'bold',


    elevation: 1,


    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    borderRadius: 10,
  },
});

export { HeroText };
