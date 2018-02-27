import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'react-native-elements';
import {
  ScrollView,
} from 'react-native';
// import { NavigationActions } from 'react-navigation';
import ListItem from './ListItem';
import { fetchUsers } from '../actions';
import { Spinner } from './common';


class ChatList extends Component {
  static navigationOptions = {
    title: 'ChatList',
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  // componentWillUpdate() {
  //   if (this.props.currentUser === null) {
  //     const resetAction = NavigationActions.reset({
  //       index: 0,
  //       actions: [NavigationActions.navigate({
  //         routeName: 'Login',
  //       })],
  //     });
  //     this.props.navigation.dispatch(resetAction);
  //   }
  // }

  renderItem() {
    const { users } = this.props;
    console.log('users in readnersug', this.props);
    return users.results.map(user => {
      return (
        <ListItem
          user={user}
          key={user.login.username}
          navigation={this.props.navigation}
        />
      );
    });
  }

  render() {
    if (this.props.loadingUsers) {
      return <Spinner size="large" />;
    }
    return (
      <ScrollView>
        <List containerStyle={{ marginTop: 0 }}>
          {this.renderItem()}
        </List>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ users, auth }) => {
  // console.log('auth', auth);
  return { ...users, currentUser: auth.user };
};

export default connect(mapStateToProps, { fetchUsers })(ChatList);
