import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'react-native-elements';
import {
  ScrollView,
  Button,
} from 'react-native';
import ListItem from './ListItem';
import {
  fetchUsers,
  navigateToUserCreate
} from '../actions';
import { Spinner } from './common';


class ChatList extends Component {
  static navigationOptions = ({ navigation }) => {
    // const params = navigation.state.params || {};

    return {
      title: 'ChatList',
      headerRight: (
        <Button
          onPress={() => navigation.dispatch({ type: 'go_user_create' })}
          title="Add"
          color="#eaeaea"
          style={{ marginRight: 10 }}
        />
      ),
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ navigateToUserCreate });
    this.props.fetchUsers();
    console.log('props', this.props);
  }

  renderItem() {
    const { users } = this.props;
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
  return { ...users, currentUser: auth.user };
};

export default connect(mapStateToProps, {
  fetchUsers, navigateToUserCreate
})(ChatList);
