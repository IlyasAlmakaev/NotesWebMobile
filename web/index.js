import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from '../framework/store/configureStore';

const asyncLocalStorage = {
    getItem: (key) => Promise.resolve(localStorage.getItem(key)),
    setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value))
}

class WebApp extends React.Component {
    constructor(prop) {
      super(prop);
      this.state = {
        userID: null
      }
    }
  
    componentDidMount() {
        asyncLocalStorage.getItem('userID').then(
            (userID) => {this.setState({userID})}
        )
    }
  
    render() {
      return this.state.userID
        ? <Provider store={configureStore(asyncLocalStorage)}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
          </Provider>
        : <view/>  
    }
  }

ReactDOM.render((
    <WebApp/>   
), document.getElementById('root'));
registerServiceWorker();
