import React from 'react';
import { StyleSheet, View } from 'react-native';
import ChatList from './components/ChatList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ChatList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
