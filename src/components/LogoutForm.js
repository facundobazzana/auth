import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, CardSection } from './common';

class LogoutForm extends Component {

  render() {
    return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
          </Button>
        </CardSection>
    );
  }
}

export default LogoutForm;
