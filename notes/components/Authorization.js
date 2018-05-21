import React, { Component } from 'react';
import AuthorizeTemplate from '../containers/AuthorizeTemplate';
import { API_LOGIN_URL } from '../model/constants/User';

export default class Authorization extends Component {

  render() {

    return (
		<AuthorizeTemplate 
		firstNameButton={'Авторизироваться'}
		secondNameButton={'На регистрацию'} />
    );
  }
}