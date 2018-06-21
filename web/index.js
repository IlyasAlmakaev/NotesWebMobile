import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from '../framework/store/configureStore';

const store = configureStore();

class WebApp extends React.Component {
    constructor(prop) {
      super(prop);
      this.state = {
        userID: null
      }
    }
  
    async componentDidMount() {
        console.log("idf " + localStorage.getItem('userID'));
        this.setState({userID: localStorage.getItem('userID')});
        // localStorage.getItem('userID')
        // .then((userID) => {this.setState({userID})})
        // console.log("usss" + this.state.userID);
    }
  
    render() {
      return this.state.userID
        ? <Provider store={configureStore(localStorage.getItem('userID'))}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
          </Provider> 
        : nill  
    }
  }

ReactDOM.render((
    <WebApp/>   
), document.getElementById('root'));
registerServiceWorker();
