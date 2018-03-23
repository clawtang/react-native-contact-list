import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Dev from '../components/Dev';
import AppEntry from '../components/AppEntry';
import Home from '../components/Home';
import Login from '../components/Login';
import UserProfile from '../components/UserProfile';
import UserEdit from '../components/UserEdit';
import ChatList from '../components/ChatList';
import UserCreate from '../components/UserCreate';


const NavigationStack = StackNavigator({
  LoginStack: {
    screen: StackNavigator({
      Dev: { screen: Dev },
      AppEntry: { screen: AppEntry },
      Login: { screen: Login },
      Home: { screen: Home },
    }, {
      headerMode: 'none',
      initialRouteName: 'Dev',
    })
  },
  // MainStack: {
  //   screen: StackNavigator({
  //   }, {
  //     initialRouteName: 'UserProfile'
  //   })
  // },
  DrawerStack: {
    screen: DrawerNavigator({
      ChatList: { screen: ChatList },
      UserCreate: { screen: UserCreate },
      UserProfile: { screen: UserProfile },
      UserEdit: { screen: UserEdit },
    }, {
      drawerPosition: 'right',
      navigationOptions: ({ navigation }) => ({
        headerRight: (
          <Icon
            style={{ marginRight: 10 }}
            onPress={() => navigation.navigate('DrawerToggle')}
            name="menu"
            size={30}
          />
        )
      })
    })
  }
}, {
  initialRouteName: 'LoginStack',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#555'
    },
    headerTintColor: '#eaeaea',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
});

export default NavigationStack;
