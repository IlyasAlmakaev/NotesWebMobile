import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    Button,
    View,
    AsyncStorage
  } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authorizeRequest, setUserID, setUserEmail } from "../../framework/requests/Requests";
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
      setUserID: (id) => dispatch(setUserID(id)),
      setUserEmail: (email) => dispatch(setUserEmail(email))
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

      this.props.authorizeRequest(this.props.apiUrl, user)
    }

    // componentWillReceiveProps(props) {	
    //   if (props.error) {
    //     alert(props.error)
    //   } else if (props.items) {
    //     console.log("ressss " + JSON.stringify(props));
    //     if (this.props.firstNameButton === 'Авторизироваться') {
    //       this.props.navigation.navigate('Notes')
    //       props.setUserID(props.items.id);
    //       props.setUserEmail(this.state.email);
    //     } else {
    //       this.props.navigation.navigate('Authorization')
    //     }
    //     this.setState({email: '', password: ''})
    //   }
    // }

    async componentDidUpdate(prevProps, prevState) {
      console.log("prrr " + JSON.stringify(this.props));
      if (this.props !== prevProps) {
        if (this.props.error) {
          alert(this.props.error)
        } else if (this.props.items) {
          console.log("ressss " + JSON.stringify(this.props));
          if (this.props.firstNameButton === 'Авторизироваться' && this.props.items.userId) {
            console.log("ressss1 " + JSON.stringify(this.props));
            this.props.navigation.navigate('Notes')
            await AsyncStorage.setItem('userID', this.props.items.id);
            await AsyncStorage.setItem('userEmail', this.state.email);
        //    this.props.setUserID(this.props.items.id);
            this.props.setUserEmail(this.state.email);
          } else {
            this.props.navigation.navigate('Authorization')
          }
          this.setState({email: '', password: ''})
        }
      }
    }
    
    onBtnGoClickHandler(e) {
		  e.preventDefault();
        if (this.props.firstNameButton === 'Авторизироваться') {
            this.props.navigation.navigate('Registration')
        } else {
          this.props.navigation.navigate('Authorization')
        }
	}

  render() {

    let emailIsEmpty = this.state.emailIsEmpty,
      passwordIsEmpty = this.state.passwordIsEmpty;

    return (
      <View style={styles.container}>
        <TextInput
          autoFocus={true}
          style={styles.textField}
          onChangeText={(text) => this.setState({emailIsEmpty: !text.trim().length, email: text})} 
          placeholder='Электронная почта'
          ref='email'
          value={this.state.email}
        />
        <TextInput
          style={styles.textField}
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
