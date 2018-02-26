import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const DetailPane = ({
  leftTitleText,
  leftSubtitleText,
  rightTitleText,
  rightSubtitleText,
  detailPaneContainerStyle,
  detailWrapperStyle,
  leftDetailWrapperStyle,
  titleTextStyle,
  subtitleTextStyle,
}) => {
  return (
    <View style={[styles.detailPaneContainerStyle, detailPaneContainerStyle]}>
      <View
        style={[
          styles.detailWrapperStyle,
          detailWrapperStyle,
          styles.leftDetailWrapperStyle,
          leftDetailWrapperStyle
        ]}
      >
        <Text style={[styles.titleTextStyle, titleTextStyle]}>{leftTitleText}</Text>
        <Text style={[styles.subtitleTextStyle, subtitleTextStyle]}>{leftSubtitleText}</Text>
      </View>
      <View
        style={[
          styles.detailWrapperStyle,
          detailWrapperStyle,
        ]}
      >
        <Text style={[styles.titleTextStyle, titleTextStyle]}>{rightTitleText}</Text>
        <Text style={[styles.subtitleTextStyle, subtitleTextStyle]}>{rightSubtitleText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailPaneContainerStyle: {
    flexDirection: 'row',
    backgroundColor: '#cf000f',
    borderTopWidth: 8,
    borderTopColor: '#fff',
  },
  detailWrapperStyle: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  leftDetailWrapperStyle: {
    borderRightWidth: 3,
    borderRightColor: '#fff',
  },
  titleTextStyle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  subtitleTextStyle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
});

export { DetailPane };
