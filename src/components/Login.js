import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
// import { NavigationActions } from 'react-navigation';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { LoginForm } from './common';

// const resetAction = NavigationActions.reset({
//   index: 0,
//   actions: [NavigationActions.navigate({ routeName: 'ChatList' })],
// });

class Login extends Component {
  static navigationOptions = {
    title: 'Login'
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
    // this.props.navigation.dispatch(resetAction);
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorText}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={100}
        style={styles.container}
      >
        <Text style={styles.text}>Enter your username and password to log in</Text>
        {this.renderError()}
        <LoginForm
          email="email@example.com"
          onEmailChange={this.onEmailChange.bind(this)}
          password="password"
          onPasswordChange={this.onPasswordChange.bind(this)}
          onButtonPress={this.onButtonPress.bind(this)}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    justifyContent: 'space-around',
    // alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    // height: 60,
    justifyContent: 'center'
  },
  errorText: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
});

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(Login);