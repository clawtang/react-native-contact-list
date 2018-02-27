import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
// import { RootStack } from './navigation/RootStack';
import AppNavigation, { navigationMiddleware } from './navigation';
// import navigationMiddleware from './navigation';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCyZJG4xS-3lKLFf-52iGOHPDBppMt10IQ',
      authDomain: 'projtenchat.firebaseapp.com',
      databaseURL: 'https://projtenchat.firebaseio.com',
      projectId: 'projtenchat',
      storageBucket: '',
      messagingSenderId: '21106484557'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, navigationMiddleware));

    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
