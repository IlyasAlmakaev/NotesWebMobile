import React, { Component } from 'react';
import AuthorizeTemplate from '../containers/AuthorizeTemplate';
import { API_REGISTRATION_URL } from '../../framework/constants/User';

export default class Authorization extends Component {

  render() {

    return (
      <AuthorizeTemplate apiUrl={API_REGISTRATION_URL}
      firstNameButton={'Зарегистрироваться'}
      secondNameButton={'На авторизацию'}
      navigation={this.props.navigation} />
    );
  }
}