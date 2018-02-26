import React, { Component } from 'react';
import {
  // View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  // Content,
  Button,
  // Text
} from 'native-base';


class Sidebar extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Sidebar</Text>
        <Image
          source={require('./profilepic.jpeg')}
          style={styles.topImage}
        />
        {/* <Content> */}
        <Button block style={styles.button} light><Text> Light </Text></Button>
        <Button block style={styles.button} primary><Text> Primary </Text></Button>
        <Button block style={styles.button} success><Text> Success </Text></Button>
        <Button block style={styles.button} info><Text> Info </Text></Button>
        <Button block style={styles.button} warning><Text> Warning </Text></Button>
        <Button block style={styles.button} danger><Text> Danger </Text></Button>
        <Button block style={styles.button} dark><Text> Dark </Text></Button>
        {/* </Content> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginRight: 5,

  },
  text: {
    color: '#fff',
    marginTop: 50,
    marginLeft: 10,
  },
  topImage: {
    width: '100%',
    height: 100,
    margin: 10,
    opacity: 0.7,
  },
  button: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Sidebar;
