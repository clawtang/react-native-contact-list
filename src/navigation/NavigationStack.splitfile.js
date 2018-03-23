import { StackNavigator } from 'react-navigation';
import LoginStack from './LoginStack';
import DrawerNavigation from './DrawerNavigation';


const NavigationStack = StackNavigator(
  {
    LoginStack: { screen: LoginStack },
    DrawerStack: { screen: DrawerNavigation }
  },
  {
    // Default config for all screens
    // headerMode: 'none',
    // title: 'Main',
    // initialRouteName: 'loginStack'
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#555'
      },
      headerTintColor: '#eaeaea',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

export default NavigationStack;
