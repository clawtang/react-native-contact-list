import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

const HeaderWithLogoImage = ({ imageSource, headerText, headerStyle, logoStyle, textStyle }) => {
  return (
    <View style={[styles.headerStyle, headerStyle]}>
      <Image
        source={imageSource}
        style={[styles.logoStyle, logoStyle]}
      />
      <Text style={[styles.textStyle, textStyle]}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    height: 80,
    marginTop: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#ccc',
    width: Dimensions.get('window').width,
  },
  logoStyle: {
    height: 40,
    width: 40,
    marginTop: 20,
  },
  textStyle: {
    marginTop: 20,
    marginLeft: 10,
    color: '#aaa',
    fontWeight: 'bold',
    fontSize: 15,
    fontStyle: 'italic',
  },
});

export { HeaderWithLogoImage };
