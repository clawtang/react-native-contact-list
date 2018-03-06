import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserForm from './UserForm';
import { userUpdate, userSave } from '../actions';
import {
  Card,
  CardSection,
  Button,
  // Confirm
} from './common';


class UserEdit extends Component {
  static navigationOptions = {
    title: 'UserEdit',
  }
  // state = {
  //   showModal: false
  // };

  componentWillMount() {
    // console.log('insie user edit', this.props.navigation.state.params.user);
    _.each(this.props.navigation.state.params.user, (value, prop) => {
      // console.log('value', value, 'prop', prop);
      this.props.userUpdate({ prop, value });
    });
  }

  onButtonPress() {
    console.log('save', this.props);
    const { uid } = this.props.navigation.state.params.user;
    const { firstName, lastName, username, email } = this.props;

    this.props.userSave({ firstName, lastName, username, email, uid });
  }

  render() {
    return (
      <Card>
        <UserForm />
        <CardSection>
          <Button onPress={() => this.onButtonPress()}>
            Save changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { firstName, lastName, username, email } = state.userForm;

  return { firstName, lastName, username, email };
};

export default connect(mapStateToProps, {
  userUpdate, userSave
})(UserEdit);
