import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
  // TouchableOpacity,
} from 'react-native';
import { ListItem as ElementsListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';


class ListItem extends Component {
onItemPress() {
  // console.log('pressed item:', this.props.user);
  Actions.userProfile({ user: this.props.user });
}

  render() {
    const user = this.props.user;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.onItemPress()}
      >
        <ElementsListItem
          roundAvatar
          avatar={{ uri: user.picture.thumbnail }}
          title={`${user.name.first.toUpperCase()}`}
          subtitle={user.email}
          user={user}
        />
      </TouchableWithoutFeedback>
    );
  }
}

export default ListItem;
