import { StackNavigator } from 'react-navigation';
// import the components that make up the screens here
import Dev from '../components/Dev';
import AppEntry from '../components/AppEntry';
import Home from '../components/Home';
import Login from '../components/Login';
import ChatList from '../components/ChatList';
import UserProfile from '../components/UserProfile';
import UserCreate from '../components/UserCreate';
import UserEdit from '../components/UserEdit';


const navigator = StackNavigator(
  // put all the different screens here
  {
    Dev: { screen: Dev },
    AppEntry: { screen: AppEntry },
    Home: { screen: Home },
    Login: { screen: Login },
    ChatList: { screen: ChatList },
    UserProfile: { screen: UserProfile },
    UserCreate: { screen: UserCreate },
    UserEdit: { screen: UserEdit },
  },
  {
    // initialRouteName: 'Home',
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

export default navigator;
