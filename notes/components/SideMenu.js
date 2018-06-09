import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
    email: state.user.email,
	};
};

class SideMenu extends Component {

    onLogout = () => {
        this.props.navigation.navigate('Authorization')
      }

  render() {

    return (
		<View>
            <Text>{""}</Text>
            <Text>{""}</Text>
            <Text>{"email: " + this.props.email}</Text>
            <Button
              onPress={this.onLogout}
              title="Logout"
            />
          </View>
    );
  }
}

export default connect(mapStateToProps)(SideMenu);