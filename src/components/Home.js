import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
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

  render() {
    return (
      <View style={styles.container}>
        <HorizontalScrollContainer pagingEnabled >
          <HorizontalScrollPage
            text="Chat List"
            textStyle={styles.horizontalScrollPageText}
            containerStyle={styles.horizontalScrollPageContainer}
          >
            <Button
              containerStyle={styles.buttonContainer}
              textStyle={styles.buttonText}
              onPress={() => this.onButtonPress()}
            >
              Login
            </Button>
          </HorizontalScrollPage>
          <HorizontalScrollPage
            text="Manage all your social media contacts"
          >
            <Text>Placeholder</Text>
          </HorizontalScrollPage>
          <HorizontalScrollPage
            text="Save your contacts for later"
          >
            <Text>Placeholder</Text>
          </HorizontalScrollPage>
          <HorizontalScrollPage
            text="Sign up to get started"
          >
            <Button
              containerStyle={styles.buttonContainer}
              textStyle={styles.buttonText}
            >
              Sign Up
            </Button>
          </HorizontalScrollPage>
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
    color: '#292929',
    fontSize: 50,
  },
  buttonContainer: {
    borderColor: '#292929',
    alignSelf: 'center',
    // paddingHorizontal: 80
    width: '80%',
  },
  buttonText: {
    color: '#292929',
  }
});

export default Home;
