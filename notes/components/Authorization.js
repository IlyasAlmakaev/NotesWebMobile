import React, { Component } from 'react';
import AuthorizeTemplate from '../containers/AuthorizeTemplate';
import { API_LOGIN_URL } from '../model/constants/User';

export default class Authorization extends Component {

  render() {

    return (
		<AuthorizeTemplate /*navigateAddress={'/registration'} 
		apiUrl={API_LOGIN_URL}
		firstNameButton={'Авторизироваться'}
		secondNameButton={'На регистрацию'}
		nextForm={'/notes'} 
		history={this.props.history}*/ />
    );
  }
}