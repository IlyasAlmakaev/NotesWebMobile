import React, { Component } from 'react';
import { Button, View, Text, AsyncStorage } from 'react-native';

export default class SideMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {email: ''};
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      const userEmail = await AsyncStorage.getItem('userEmail');
      this.setState({email: userEmail})
      console.log("emmm " + this.state.email);
    }
  }

  onLogout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.closeDrawer();
    this.props.navigation.navigate('Authorization');
  }

  render() {

    return (
		  <View>
        <Text>{""}</Text>
        <Text>{""}</Text>
        <Text>{"email: " + this.state.email}</Text>
        <Button
          onPress={this.onLogout}
          title="Logout"
        />
      </View>
    );
  }
}
