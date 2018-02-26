import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ChatList from './components/ChatList';
import UserProfile from './components/UserProfile';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="main">
          <Scene
            key="chatList"
            component={ChatList}
            title="Contact List"
            initial
          />
          <Scene key="userProfile" component={UserProfile} title="User Profile" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
