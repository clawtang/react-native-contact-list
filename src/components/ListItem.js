import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Gravatar } from 'react-native-gravatar';
import { navigateToUserProfile } from '../actions';


class ListItem extends Component {
  onItemPress() {
    console.log('uid present?', this.props.user);
    this.props.navigateToUserProfile(this.props.user);
  }

  render() {
    const {
      firstName,
      email,
    } = this.props.user;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.onItemPress()}
      >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Gravatar
              options={{
                email,
                parameters: { size: '200', d: 'mm' },
                secure: true,
                mask: 'circle'
              }}
              style={styles.gravatar}
            />
          </View>
          <View style={styles.textContainer}>
            <Text>{firstName.toUpperCase()}</Text>
            <Text>{email}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon
              style={styles.chevron}
              size={28}
              name='chevron-right'
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  iconContainer: {

  },
  chevron: {

  },
  gravatar: {
    borderRadius: 100,
  }
});
export default connect(null, { navigateToUserProfile })(ListItem);
