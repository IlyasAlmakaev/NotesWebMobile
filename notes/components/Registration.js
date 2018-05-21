import React, { Component } from 'react';
import AuthorizeTemplate from '../containers/AuthorizeTemplate';
import { API_REGISTRATION_URL } from '../model/constants/User';

export default class Authorization extends Component {

  render() {

    return (
		<AuthorizeTemplate 
		firstNameButton={'Зарегистрироваться'}
		secondNameButton={'На авторизацию'} />
    );
  }
}