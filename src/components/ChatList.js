import _ from 'lodash';
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
  navigateToUserCreate,
} from '../actions';
import { Spinner } from './common';


class ChatList extends Component {
  static navigationOptions = ({ navigation }) => {
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
  }

  renderItem() {
    const { users } = this.props;

    return users.map(user => {
      return (
        <ListItem
          user={user}
          key={user.username + user.firstName}
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

const mapStateToProps = (state) => {
  const users = _.map(state.users.users, (val, uid) => {
    return { ...val, uid };
  });

  return { users };
};

export default connect(mapStateToProps, {
  fetchUsers, navigateToUserCreate,
})(ChatList);
