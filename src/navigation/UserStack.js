import { StackNavigator } from 'react-navigation';
import UserProfile from '../components/UserProfile';
import UserEdit from '../components/UserEdit';


const UserStack = StackNavigator(
  {
    UserEdit: { screen: UserEdit },
    UserProfile: { screen: UserProfile },

  },
  {
    headerMode: 'none'
  }
);

export default UserStack;
