import React, { Component } from 'react';
import {
  // View,
  Text,
  // StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import {
  Avatar,
  Card,
} from 'react-native-elements';


class UserProfile extends Component {
  static navigationOptions = {
    title: 'UserProfile',
  }

  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  render() {
    console.log('params', this.props.navigation.state.params);
    // const { params } = this.props.navigation.state;
    const {
      picture, name, login, email
    } = this.props.navigation.state.params.user;

    // console.log(this.props.user);
    return (
      <Card>
        <Avatar
          xlarge
          rounded
          source={{ uri: picture.large }}
          containerStyle={{ alignSelf: 'center' }}
        />
        <Text>first name: {this.capitalize(name.first)}</Text>
        <Text>last name: {this.capitalize(name.last)}</Text>
        <Text>username: {login.username}</Text>
        <Text>email: {email}</Text>
      </Card>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default connect(null)(UserProfile);
