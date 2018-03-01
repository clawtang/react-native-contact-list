import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
// import { NavigationActions } from 'react-navigation';
import {
  HorizontalScrollPage,
  Button,
} from './common';
import {
  navigateToLogin,
} from '../actions';


class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  onButtonPress(message) {
    this.props.navigateToLogin(message);
  }

  onItemTap() {
    console.log('pressed');
  }

  render() {
    return (
      <Swiper
        style={styles.wrapper}
        activeDotStyle={{ backgroundColor: '#eaeaea' }}
        loop={false}
        bounces
      >

        <HorizontalScrollPage
          text="Chat List"
          textStyle={[styles.horizontalScrollPageText, { fontSize: 50 }]}
          containerStyle={styles.horizontalScrollPageContainer}
        >
          <Button
            containerStyle={styles.buttonContainer}
            textStyle={styles.buttonText}
            onPress={() => this.onButtonPress({ message: 'Log In' })}
          >Log In</Button>
        </HorizontalScrollPage>

        <HorizontalScrollPage
          text="Manage all your social media contacts"
          textStyle={styles.horizontalScrollPageText}
          containerStyle={styles.horizontalScrollPageContainer}
        >
          <Text>Placeholder</Text>
        </HorizontalScrollPage>

        <HorizontalScrollPage
          text="Save your contacts for later"
          textStyle={styles.horizontalScrollPageText}
          containerStyle={styles.horizontalScrollPageContainer}
        >
          <Text>Placeholder</Text>
        </HorizontalScrollPage>

        <HorizontalScrollPage
          text="Sign up to get started"
          textStyle={styles.horizontalScrollPageText}
          containerStyle={styles.horizontalScrollPageContainer}
        >
          <Button
            containerStyle={styles.buttonContainer}
            textStyle={styles.buttonText}
            onPress={() => this.onButtonPress({ message: 'Sign Up' })}
          >Sign Up</Button>
        </HorizontalScrollPage>
      </Swiper>
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
  },
});


export default connect(null, { navigateToLogin })(Home);
