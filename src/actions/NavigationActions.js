// import { NavigationActions } from 'react-navigation';
import {
  GO_LOGIN,
} from './types';
//
// const login = (message) => NavigationActions.reset({
//   index: 0,
//   actions: [NavigationActions.navigate({
//     routeName: 'Login',
//     params: {
//       message
//     }
//   })],
// });

export const navigateToLogin = (message) => {
  return {
    type: GO_LOGIN,
    payload: message,
  };
  // return (dispatch) => {
  //   try {
  //     dispatch(login(message));
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // };
};
//
// const home = NavigationActions.reset({
//   index: 0,
//   actions: [NavigationActions.navigate({
//     routeName: 'Home',
//   })],
// });
//
// export const runApp = () => {
//   return (dispatch) => {
//     try {
//       dispatch(home);
//     } catch (err) {
//       throw new Error(err);
//     }
//   };
// };
//
// const chatList = NavigationActions.reset({
//   index: 0,
//   actions: [NavigationActions.navigate({
//     routeName: 'ChatList',
//   })],
// });
//
// export const navigateToChatList = () => {
//   return (dispatch) => {
//     try {
//       dispatch(chatList);
//     } catch (err) {
//       throw new Error(err);
//     }
//   };
// };
