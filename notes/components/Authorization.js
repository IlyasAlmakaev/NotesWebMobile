import React, { Component } from 'react';
import AuthorizeTemplate from '../containers/AuthorizeTemplate';
import { API_LOGIN_URL } from '../constants/User';
import { View, Text } from 'react-native';

export default class Authorization extends Component {

  render() {

    return (
		<AuthorizeTemplate apiUrl={API_LOGIN_URL}
		firstNameButton={'Авторизироваться'}
    secondNameButton={'На регистрацию'}
    navigation={this.props.navigation} />
    );
  }
}