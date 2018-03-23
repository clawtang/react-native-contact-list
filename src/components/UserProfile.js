import React, { Component } from 'react';
import {
  // View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import {
  // Gravatar,
  // GravatarApi
} from 'react-native-gravatar';
import {
  Card,
  Button,
  // Confirm
} from './common';
import { navigateTo, userDelete } from '../actions';
// import { capitalize } from '../helpers';


class UserProfile extends Component {
  static navigationOptions = {
    title: 'Contact Profile',
  }

  // state = {
  //   showModal: false,
  // }
  //
  // onAccept() {
  //   const { uid } = this.props.navigation.state.params;
  //
  //   this.toggleModal();
  //   this.props.userDelete({ uid });
  // }
  //
  // onDecline() {
  //   this.toggleModal();
  // }

  toggleModal() {
    // this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const user = this.props.navigation.state.params;

    console.log('wtf man ', user);
    return (
      <Card>
        {/* <Gravatar
          options={{
            // email: user.email,
            parameters: { size: '200', d: 'mm' },
            secure: true
          }}
        /> */}
        <Text>Hello</Text>
        <Button onPress={() => console.log('user should be undefinied', user)} />
      </Card>
    );
    // return (
    //   <Card>

    //     <Text>first name: {capitalize(user.firstName)}</Text>
    //     <Text>last name: {capitalize(user.lastName)}</Text>
    //     <Text>username: {user.username}</Text>
    //     <Text>email: {user.email}</Text>
    //     <Button
    //       onPress={() => this.props.navigateTo('UserEdit', { user })}
    //     >Edit Details</Button>
    //     <Button
    //       onPress={() => this.toggleModal()}
    //     >
    //       Delete Contact
    //     </Button>
    //
    //     <Confirm
    //       visible={this.state.showModal}
    //       onAccept={() => this.onAccept()}
    //       onDecline={() => this.onDecline()}
    //     >
    //       Are you sure you want to delete this?
    //     </Confirm>
    //   </Card>
    // );
  }

//   render() {
//     const user = this.props.navigation.state.params;
//     console.log('user', user);
//
//   }
}

// const mapStateToProps = state => {
//   const { users } = state.users;
//
//   return { users };
// };

export default connect(null, {
  navigateTo, userDelete
})(UserProfile);
