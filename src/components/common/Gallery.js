import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

const Gallery = ({ galleryContainerStyle, children }) => {
  return (
    <ScrollView>
      <View style={[styles.galleryContainer, galleryContainerStyle]}>
        {children}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export { Gallery };
