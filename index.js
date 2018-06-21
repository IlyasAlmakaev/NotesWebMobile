import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './framework/store/configureStore';
import { AsyncStorage, ActivityIndicator } from 'react-native';

const asyncLocalStorage = {
  getItem: (key) => Promise.resolve(AsyncStorage.getItem(key)),
  setItem: (key, value) => Promise.resolve(AsyncStorage.setItem(key, value))
}

class ReduxApp extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      userID: null
    }
  }

  // componentDidMount() {
  //   AsyncStorage.getItem('userID').then( (userID)=> { 
  //     this.setState({userID})
  //   })
  // }
  componentDidMount() {
    AsyncStorage.getItem('userID').then( (userID)=> { 
      this.setState({userID})
    })
  }

  // async componentDidMount() {
  // //  this.setState({ userID: await AsyncStorage.getItem('userID') })
  // }

  render() {
    return this.state.userID 
      ? <Provider store={configureStore(asyncLocalStorage)}>
          <App />
        </Provider>
      : <ActivityIndicator/>
  }
}


AppRegistry.registerComponent('notesReactNative', () => ReduxApp);
