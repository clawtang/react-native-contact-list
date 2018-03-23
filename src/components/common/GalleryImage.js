import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

const GalleryImage = ({ imageSource, imageContainerStyle, imageStyle }) => {
  return (
    <View style={[styles.container, imageContainerStyle]}>
      <Image
        style={[styles.image, imageStyle]}
        source={imageSource}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 2,
    height: 100,
    width: (Dimensions.get('window').width / 2) - 4,
  },
  image: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
});

export { GalleryImage };
