import { StackNavigator } from 'react-navigation';
import Dev from '../components/Dev';
import AppEntry from '../components/AppEntry';
import Home from '../components/Home';
import Login from '../components/Login';


const LoginStack = StackNavigator(
  {
    Dev: { screen: Dev },
    AppEntry: { screen: AppEntry },
    Login: { screen: Login },
    Home: { screen: Home },
  },
  {
    headerMode: 'none',
    // navigationOptions: {
      // headerStyle: { backgroundColor: '#E73536' },
      // title: 'You are not logged in',
      // headerTintColor: 'white'
    // }
  }
);


export default LoginStack;
