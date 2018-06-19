import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Registration from './components/Registration.js'
import Authorization from './components/Authorization.js'
import Notes from './containers/notes/Notes.js'
import EditNote from './containers/EditNote.js'
import AddNote from './containers/AddNote.js'
import './App.css';

class App extends Component {

  render() {
    return (
    <Switch>  
	    <Route exact path='/' component={Authorization}/>
      <Route path="/notes" component={Notes}/>
      <Route path="/registration" component={Registration}/>
      <Route path="/addNote" component={AddNote}/>
      <Route path="/editNote" component={EditNote}/>
    </Switch>  
    );
  }
}

export default App;
