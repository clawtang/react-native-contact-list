import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import PageControl from 'react-native-page-control';

import {
  HorizontalScrollContainer,
  HorizontalScrollPage,
  Button,
} from './common';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({
    routeName: 'Login',
    params: {
      username: 'username',
      password: 'password',
    },
  })],
});

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  onButtonPress() {
    this.props.navigation.dispatch(resetAction);
  }

  onItemTap() {
    console.log('pressed');
  }

  render() {
    return (
      <View style={styles.container}>
        <HorizontalScrollContainer
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        >
        </HorizontalScrollContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontalScrollPageContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#777'
  },
  horizontalScrollPageText: {
    color: '#eaeaea',
    fontSize: 30,
  },
  buttonContainer: {
    borderColor: '#292929',
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    // height: 60,
  },
  buttonText: {
    color: '#eaeaea',
  }
});

export default Home;
