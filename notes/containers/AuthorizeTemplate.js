import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    Button,
    View
  } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { authorizeRequest } from "../requests/Requests";
import { styles } from "../Styles";

  const mapStateToProps = (state) => {
    return {
      items: state.user.data,
      error: state.user.error
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      authorizeRequest: (url, user) => dispatch(authorizeRequest(url, user)),
      setUserIDFromForm: (id) => dispatch(setUserID(id))
    };
  };  

class AuthorizeTemplate extends Component {

    constructor(props) {
		  super(props);
		  this.state = {emailIsEmpty: true,
                    passwordIsEmpty: true,
                    email: '',
                    password: ''};
      this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
		  this.onBtnGoClickHandler = this.onBtnGoClickHandler.bind(this);
    }

    static propTypes = {
      authorizeRequest: PropTypes.func.isRequired,
      setUserID: PropTypes.func,
      items: PropTypes.object.isRequired,
      error: PropTypes.string.isRequired
     }

    onBtnClickHandler(e) {
		  e.preventDefault();

		  let user = {
			  email: this.state.email,
			  password: this.state.password
        };
      console.debug("reff" + this.state.email);
      this.props.authorizeRequest(this.props.apiUrl, user)
	//	this.props.fetchData(this.props.apiUrl, user)
    }

    componentWillReceiveProps(props) {	
      console.log("itt " + props.items.id + "err" + props.error);
      if (props.error) {
        alert(props.error)
      } else if (props.items) {
        alert(props.items.id)
     //   this.props.history.push(this.props.nextForm);
  
        if (this.props.firstNameButton === 'Авторизироваться') {
          console.log("itt11 " + props.items.id + "err" + props.error);
          Actions.notes();
      //    props.setUserIDFromForm(props.items.id);
        } else {
          Actions.authorization();
        }
      }
    }
    
    onBtnGoClickHandler(e) {
		  e.preventDefault();
        if (this.props.firstNameButton === 'Авторизироваться') {
            Actions.registration();
        } else {
            Actions.authorization();
        }
	//	this.props.history.push(this.props.navigateAddress);
	}

  render() {

    let emailIsEmpty = this.state.emailIsEmpty,
      passwordIsEmpty = this.state.passwordIsEmpty;

    return (
      <View style={styles.container}>
        <TextInput
          autoFocus={true}
          onChangeText={(text) => this.setState({emailIsEmpty: !text.trim().length, email: text})} 
          placeholder='Электронная почта'
          ref='email'
          value={this.state.email}
        />
        <TextInput
          onChangeText={(text) => this.setState({passwordIsEmpty: !text.trim().length, password: text})}
          placeholder='Пароль'
          ref='password' 
          value={this.state.password}
        />
        <Button
          onPress={this.onBtnClickHandler}
          title={this.props.firstNameButton}
          color="#007DDC"
          disabled={emailIsEmpty || passwordIsEmpty}
        />
        <Button
          onPress={this.onBtnGoClickHandler}
          title={this.props.secondNameButton}
          color="#007DDC"
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizeTemplate);
