import { StackNavigator } from 'react-navigation';
// import the components that make up the screens here
import Home from '../components/Home';
import Login from '../components/Login';
import ChatList from '../components/ChatList';
import UserProfile from '../components/UserProfile';

const navigator = StackNavigator(
  // put all the different screens here
  {
    Home: {
      screen: Home,
    },
    Login: {
      screen: Login,
    },
    ChatList: {
      screen: ChatList,
    },
    UserProfile: {
      screen: UserProfile,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        // backgroundColor: '#f4511e'
      },
      // headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

export default navigator;
