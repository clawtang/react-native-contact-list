import React, { Component } from 'react';
import {
  // View,
  Text,
  // StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import {
  // Avatar,
  // Card,
} from 'react-native-elements';
import {
  Gravatar,
  // GravatarApi
} from 'react-native-gravatar';
import { Card, Button } from './common';
import { navigateToUserEdit } from '../actions';


class UserProfile extends Component {
  static navigationOptions = {
    title: 'UserProfile',
  }

  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  navigateToUserEdit(user) {
    console.log('pressed');
    this.props.navigateToUserEdit(user);
  }

  render() {
    const {
      // picture,
      firstName,
      lastName,
      username,
      email,
      uid,
    } = this.props.navigation.state.params;

    return (
      <Card>
        <Gravatar
          options={{
            email,
            parameters: { size: '200', d: 'mm' },
            secure: true
          }}
        />
        <Text>first name: {this.capitalize(firstName)}</Text>
        <Text>last name: {this.capitalize(lastName)}</Text>
        <Text>username: {username}</Text>
        <Text>email: {email}</Text>
        <Button
          onPress={() => this.navigateToUserEdit({
            user: {
              firstName,
              lastName,
              username,
              email,
              uid,
            }
          })}
        >Edit Details</Button>
      </Card>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default connect(null, { navigateToUserEdit })(UserProfile);
