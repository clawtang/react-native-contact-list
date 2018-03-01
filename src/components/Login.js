import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  loginUser,
  // navigateToChatList,
} from '../actions';
import { LoginForm } from './common';


class Login extends Component {
  static navigationOptions = {
    title: 'Login',
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
    // this.props.navigateToChatList();
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
    console.log('checking props', this.props);
    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={100}
        style={styles.container}
      >
        <Text
          style={styles.text}
        >{this.props.navigation.state.params.message}</Text>

        {this.renderError()}

        <LoginForm
          email="email@example.com"
          onEmailChange={this.onEmailChange.bind(this)}
          password="password"
          buttonText={this.props.navigation.state.params.message}
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
  emailChanged,
  passwordChanged,
  loginUser,
  // navigateToChatList,
})(Login);
