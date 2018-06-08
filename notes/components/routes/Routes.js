import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Authorization from '../Authorization';
import Registration from '../Registration';
import Notes from '../../containers/notes/Notes';
import EditNote from '../../containers/notes/EditNote';
import AddNote from '../../containers/notes/AddNote';
import {
    createDrawerNavigator,
    createStackNavigator
  } from 'react-navigation';

  const NotesRoutes = 
  createStackNavigator({
      Notes: { 
          screen: Notes,
          navigationOptions:  {
              title: 'Notes',
              headerLeft: null,
          } },
      EditNote: { screen: EditNote },
      AddNote: { screen: AddNote },
    })  

const Drawer = 
  createDrawerNavigator({
    NotesRoutes: { screen: NotesRoutes }
    }, {
      navigationOptions: {
          gesturesEnabled: false
        }
    })

const Routes = 
    createStackNavigator({
        Authorization: { 
            screen: Authorization },
        Registration: { 
            screen: Registration },
        Drawer: { screen: Drawer }
      }, {
        headerMode:'none',
        navigationOptions: {
            gesturesEnabled: false
          }
      })

//    <Router>
//       <Scene key = "root">
//          <Scene key = "authorization" component = {Authorization} title = "Authorization" initial={true} />
//          <Scene key = "registration" component = {Registration} title = "Registration" />
//          <Scene key = "notes" component = {Notes} title = "Notes" onRight={()=>{}} rightTitle={'Add Note'} />
//          <Scene key = "editNote" component = {EditNote} title = "Edit Note" onRight={()=>{}} rightTitle={'Edit Note'} onLeft={()=>{}} leftTitle={'Close'}/>
//          <Scene key = "addNote" component = {AddNote} title = "Add Note" onRight={()=>{}} rightTitle={'Add Note'} onLeft={()=>{}} leftTitle={'Close'}/>
//       </Scene>
//    </Router>

export default Routes