import React from 'react';
import {
  // View,

  ImageBackground,
  StyleSheet,
} from 'react-native';

const HeroImage = ({ imageSource, heroImageStyle, children }) => {
  return (
    <ImageBackground
      source={imageSource}
      style={[styles.imageStyle, heroImageStyle]}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export { HeroImage };
