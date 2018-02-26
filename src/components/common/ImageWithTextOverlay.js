import React from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const ImageWithTextOverlay = ({ imageSource, textOverlay, imageStyle, textStyle }) => {
  return (
    <ImageBackground
      source={imageSource}
      style={[styles.imageStyle, imageStyle]}
    >
      <Text style={[styles.textStyle, textStyle]}>
        {textOverlay}
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#292929',
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 10,
    fontWeight: 'bold',

    // Android
    elevation: 1,

    // iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    borderRadius: 10,
  },
});

export { ImageWithTextOverlay };
