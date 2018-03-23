import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const HeaderLarge = ({
  mainImageSource,
  backgroundImageSource,
  titleText,
  subtitleText,
  mainImageStyle,
  backgroundImageStyle,
  headerContainerStyle,
  mainImageContainerStyle,
  titleTextStyle,
  subtitleTextStyle
}) => {
  return (
    <ImageBackground
      style={[styles.backgroundImageStyle, backgroundImageStyle]}
      source={backgroundImageSource}
    >
      <View style={[styles.headerContainerStyle, headerContainerStyle]}>
        <View style={[styles.mainImageContainerStyle, mainImageContainerStyle]}>
          <Image
            style={[styles.mainImageStyle, mainImageStyle]}
            source={mainImageSource}
          />
        </View>
        <Text style={[styles.titleTextStyle, titleTextStyle]}>{titleText}</Text>
        <Text style={[styles.subTitleTextStyle, subtitleTextStyle]}>{subtitleText}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImageStyle: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
  headerContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  mainImageContainerStyle: {
    width: 180,
    height: 180,
    // borderRadius: 90,
    // borderWidth: 15,
    // borderColor: 'rgba(0,0,0,0.4)',
  },
  mainImageStyle: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 90,
    borderWidth: 3,
    borderColor: '#fff',
  },
  titleTextStyle: {
    marginTop: 20,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  subTitleTextStyle: {
    color: '#fff',
    fontSize: 15,
    fontStyle: 'italic',
  }
});

export { HeaderLarge };
