import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View
  } from 'react-native';

class AuthorizeTemplate extends Component {

    constructor(props) {
		super(props);
		this.state = {emailIsEmpty: true,
					  passwordIsEmpty: true};
	  
    }

  render() {

    return (
        <View style={styles.container}>
			<TextInput
              //  style={styles.input} 
                onChangeText={(text) => this.setState({emailIsEmpty: !text.trim().length})} 
                placeholder='Электронная почта'
                value={''}
            />
			<TextInput
              //  style={styles.input} 
                onChangeText={(text) => this.setState({passwordIsEmpty: !text.trim().length})}
                placeholder='Пароль' 
                value={''}
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