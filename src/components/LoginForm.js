import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Spinner, Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this)) // LOG IN SUCCESS
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication failed',
      loading: false
    });
  }

  onLoginSuccess() {
    this.setState({
      error: '',
      loading: false,
      email: '',
      password: ''
    });
  }

  renderButton() {
      if (this.state.loading) {
        return <Spinner />;
      }

      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log in
        </Button>
      );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            isSecure
            placeholder="Type your password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
