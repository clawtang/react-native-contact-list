import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Card } from 'react-native-elements';
// import { KeyboardAvoidingView } from 'react-native';

import { Card, CardSection, Button } from './common';
import { userCreate } from '../actions';
import UserForm from './UserForm';

class UserCreate extends Component {
  static navigationOptions = {
    title: 'UserCreate'
  }

  onButtonPress() {
    const { firstName, lastName, username, email } = this.props;

    this.props.userCreate({ firstName, lastName, username, email });
  }

  render() {
    return (
      <Card>
        <UserForm {...this.props} />
        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
            containerStyle={{ flex: 1 }}
          >
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { firstName, lastName, username, email } = state.userForm;

  return { firstName, lastName, username, email };
  // return {};
};

export default connect(mapStateToProps, {
  userCreate,
})(UserCreate);
