import React, { Component } from 'react';
import {
  View,
  // Text,
} from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  // Card,
} from 'react-native-elements';
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
            // onChangeText={value => this.props.employeeUpdate({ prop: 'firstName', value })}
            // value={this.props.firstName}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Last Name"
            placeholder="Doe"
            // onChangeText={value => this.props.employeeUpdate({ prop: 'firstName', value })}
            // value={this.props.firstName}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Username"
            placeholder="username"
            // onChangeText={value => this.props.employeeUpdate({ prop: 'firstName', value })}
            // value={this.props.firstName}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@example.com"
            // onChangeText={value => this.props.employeeUpdate({ prop: 'firstName', value })}
            // value={this.props.firstName}
          />
        </CardSection>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = state => {
  // const { firstName } = state.userForm;
  //
  // return { firstName };
  return {};
};

export default connect(mapStateToProps, {
  userUpdate
})(UserForm);
