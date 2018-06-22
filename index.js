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

  render() {
    return <Provider store={configureStore(asyncLocalStorage)}>
          <App />
        </Provider>
  }
}

AppRegistry.registerComponent('notesReactNative', () => ReduxApp);
