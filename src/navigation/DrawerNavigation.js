import React from 'react';
import { StackNavigator } from 'react-navigation';
// import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DrawerStack from './DrawerStack';
import UserStack from './UserStack';


const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack },
  UserStack: { screen: UserStack },
}, {
  initialRouteName: 'DrawerStack',
  headerMode: 'none',
  navigationOptions: ({ navigation }) => ({
    // headerStyle: { backgroundColor: 'green' },
    // title: 'Logged In to your app!',
    headerRight: (
      <Icon
        onPress={() => navigation.navigate('DrawerToggle')}
        name="menu"
        size={30}
      />
    )
  })
});

export default DrawerNavigation;
