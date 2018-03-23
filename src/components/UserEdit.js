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
    title: 'Edit Contact',
  }
  // state = {
  //   showModal: false
  // };

  componentWillMount() {
    _.each(this.props.navigation.state.params.user, (value, prop) => {
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
