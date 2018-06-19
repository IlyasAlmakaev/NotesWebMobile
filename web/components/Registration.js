import React, { Component } from 'react';
import AuthorizeTemplate from '../containers/AuthorizeTemplate';
import { API_REGISTRATION_URL } from '../../framework/constants/User';

export default class Registration extends Component {

  render() {

    return (
	  <AuthorizeTemplate navigateAddress={'/'} 
						   apiUrl={API_REGISTRATION_URL}
						   firstNameButton={'Зарегистрироваться'}
							 secondNameButton={'На авторизацию'} 
							 nextForm={'/'}
						   history={this.props.history} />
    );
  }
}