import React, { Component } from 'react';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input, CardSection } from './common';
import { userUpdate } from '../actions';


class UserForm extends Component {
  render() {
    return (
      <KeyboardAwareScrollView>
        <CardSection>
          <Input
            label="First Name"
            placeholder="Jane"
            onChangeText={value => this.props.userUpdate({ prop: 'firstName', value })}
            value={this.props.firstName}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Last Name"
            placeholder="Doe"
            onChangeText={value => this.props.userUpdate({ prop: 'lastName', value })}
            value={this.props.lastName}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Username"
            placeholder="username"
            onChangeText={value => this.props.userUpdate({ prop: 'username', value })}
            value={this.props.username}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@example.com"
            onChangeText={value => this.props.userUpdate({ prop: 'email', value })}
            value={this.props.email}
          />
        </CardSection>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { firstName, lastName, username, email } = state.userForm;

  return { firstName, lastName, username, email };
};

export default connect(mapStateToProps, {
  userUpdate
})(UserForm);
