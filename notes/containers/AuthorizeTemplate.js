import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    Button,
    View
  } from 'react-native';
  import { Actions } from 'react-native-router-flux';

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

    onBtnClickHandler(e) {
		e.preventDefault();

		let user = {
			email: this.email,
			password: this.password
		};
    console.log("reff" + user);
	//	this.props.fetchData(this.props.apiUrl, user)
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


export default AuthorizeTemplate

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