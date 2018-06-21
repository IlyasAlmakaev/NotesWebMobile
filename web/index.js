import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from '../framework/store/configureStore';

const store = configureStore();

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
        // console.log("idf " + localStorage.getItem('userID'));
        // localStorage.getItem('userID').
        // this.setState({userID: localStorage.getItem('userID')});
        // localStorage.getItem('userID')
        // .then((userID) => {this.setState({userID})})
        // console.log("usss" + this.state.userID);
    }
  
    render() {
        asyncLocalStorage.getItem('userID').then(
            (userID) => {
                if(userID) {
                    return <Provider store={configureStore(asyncLocalStorage)}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                  </Provider>  
                } else return nil
            }
        )
    }
  }

ReactDOM.render((
    <WebApp/>   
), document.getElementById('root'));
registerServiceWorker();
