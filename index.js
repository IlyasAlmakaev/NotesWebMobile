import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './notes/store/configureStore';


const store = configureStore();

const ReduxApp = () => (
    <Provider store={store}>
      <App />
    </Provider>
  )

AppRegistry.registerComponent('notesReactNative', () => ReduxApp);
