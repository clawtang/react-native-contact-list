import { DrawerNavigator } from 'react-navigation';
import ChatList from '../components/ChatList';
import UserCreate from '../components/UserCreate';


const DrawerStack = DrawerNavigator({
  ChatList: { screen: ChatList },
  UserCreate: { screen: UserCreate },
}, {
  drawerPosition: 'right',
  // items: ['ChatList', 'UserCreate'],
});

export default DrawerStack;
