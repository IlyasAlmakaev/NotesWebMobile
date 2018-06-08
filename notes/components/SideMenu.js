import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class Authorization extends Component {

    onLogout = () => {
        this.props.navigation.navigate('Authorization')
      }

  render() {

    return (
		<View>
            <Text>{""}</Text>
            <Text>{""}</Text>
            <Text>{"Login"}</Text>
            <Button
              onPress={this.onLogout}
              title="Logout"
            />
          </View>
    );
  }
}