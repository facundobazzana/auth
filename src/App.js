import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import LogoutForm from './components/LogoutForm';
import LogWait from './components/LogWait';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDbW6qn66qJ4fqE6oNg9rw9XG2FKXnv5ds',
      authDomain: 'auth-7eb09.firebaseapp.com',
      databaseURL: 'https://auth-7eb09.firebaseio.com',
      storageBucket: 'auth-7eb09.appspot.com',
      messagingSenderId: '689560632073'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
      switch (this.state.loggedIn) {
        case true:
          return <LogoutForm />;
        case false:
          return <LoginForm />;
        default:
          return <LogWait />;
      }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        { this.renderContent() }
      </View>
    );
  }
}

export default App;
