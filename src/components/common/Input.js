import React from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Input = ({
  label, value, onChangeText, placeholder, secureTextEntry
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        selectTextOnFocus
      />
    </View>
  );
};

export { Input };

const styles = StyleSheet.create({
  container: {
    // borderColor: 'black',
    // borderWidth: 1,
    height: 40,
    // height: 60,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // alignItems: 'flex-end',
  },
  input: {
    color: '#000',
    paddingRight: 5,
    // paddingLeft: 20,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 40,
    flex: 2,
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
});
