import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Button } from './Button';

class LoginForm extends Component {
  render() {
    const {
      username = '',
      email = '',
      password,
      buttonStyle,
      buttonTextStyle,
      underlineColorAndroid,
      onEmailChange,
      onPasswordChange,
      onButtonPress,
      buttonText,
    } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          placeholder={username || email}
          placeholderTextColor={'rgba(0,0,0,0.75)'}
          underlineColorAndroid={underlineColorAndroid}
          style={styles.input}
          onChangeText={onEmailChange}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          placeholder={password}
          placeholderTextColor={'rgba(0,0,0,0.75)'}
          underlineColorAndroid={underlineColorAndroid}
          style={styles.input}
          onChangeText={onPasswordChange}
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry
        />
        <Button
          onPress={onButtonPress}
          buttonStyle={buttonStyle}
          textStyle={buttonTextStyle}
        >
          {buttonText}
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingLeft: 10,
    marginBottom: 15,
  },
});

export { LoginForm };
