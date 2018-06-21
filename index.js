import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './framework/store/configureStore';
import { AsyncStorage, ActivityIndicator } from 'react-native';

class ReduxApp extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      userID: null
    }
  }

  async componentDidMount() {
    this.setState({ userID: await AsyncStorage.getItem('userID') })
  }

  render() {
    return this.state.userID 
      ? <Provider store={configureStore(this.state.userID)}>
          <App />
        </Provider>
      : <ActivityIndicator/>
  }
}


AppRegistry.registerComponent('notesReactNative', () => ReduxApp);
