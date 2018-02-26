import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'react-native-elements';
import {
  ScrollView,
} from 'react-native';
import ListItem from './ListItem';


class ChatList extends Component {
  renderItem() {
    const { users } = this.props;
    return users.map(user => {
      return (
        <ListItem
          user={user}
          key={user.login.username}
        />
      );
    });
  }

  render() {
    return (
      <ScrollView>
        <List style={{ marginTop: 0 }}>
          {this.renderItem()}
        </List>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return state.users;
};

export default connect(mapStateToProps)(ChatList);
