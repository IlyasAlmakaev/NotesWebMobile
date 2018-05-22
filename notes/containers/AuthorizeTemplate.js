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
			  email: "a@a.a",
			  password: "1"
        };
      console.debug("reff" + this.email);
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
  
        if (this.props.nextForm === "/notes") {
          console.log("itt11 " + props.items.id + "err" + props.error);
          props.setUserIDFromForm(props.items.id);
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });