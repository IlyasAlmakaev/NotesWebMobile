import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Authorization from '../Authorization';
import Registration from '../Registration';
import Notes from '../../containers/notes/Notes';
import EditNote from '../../containers/notes/EditNote';
import AddNote from '../../containers/notes/AddNote';
import {
    createStackNavigator,
    createDrawerNavigator
  } from 'react-navigation';
import Login from '../Login';

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
      }, {
        contentComponent: (props) => <Notes {...props} />,
        initialRouteName: 'Notes',
        headerMode: "none",
        mode: "modal",
      })

const Drawer = createDrawerNavigator({
    Login: { screen: Login }
  }, {
    contentComponent: (props) => <NotesRoutes {...props} />,
    drawerWidth: 250,
    drawerPosition: 'left',
    initialRouteName: 'Login'
  })

const Routes = 
    createStackNavigator({
        Authorization: { 
            screen: Authorization,
            navigationOptions: {
                header: null
              } },
        Registration: { 
            screen: Registration,
            navigationOptions: {
                header: null
              } },
        Drawer: { 
            screen: (props) => <Drawer {...props} />,
            navigationOptions: {
                header: null
              } },
      }, {
        initialRouteName: 'Authorization',
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