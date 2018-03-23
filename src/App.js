import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import firebase from 'firebase';
import AppNavigation from './navigation';
import { persistor, store } from './store';
import { Spinner } from './components/common';

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
    return (
      <Provider store={store}>
        <PersistGate loading={<Spinner />} persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    );
  }
}
