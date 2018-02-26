import React, { Component } from 'react';
import {
  ScrollView,
  // Text,
  TouchableOpacity,
  // StyleSheet,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../data/data';


class ChatList extends Component {
  renderItem() {
    return users.map(user => (
      <TouchableOpacity
        key={user.login.username}
        onPress={() => console.log(user)}
      >
        <ListItem
          roundAvatar
          key={user.login.username}
          avatar={{ uri: user.picture.thumbnail }}
          title={`${user.name.first.toUpperCase()}`}
          subtitle={user.email}
          user={user}
        />
      </TouchableOpacity>
    ));
  }

  render() {
    return (
      <ScrollView>
        <List>
          {this.renderItem()}
        </List>
      </ScrollView>
    );
  }
}

ChatList.defaultProps = { ...users };

export default ChatList;
