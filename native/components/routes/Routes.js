import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Authorization from '../Authorization';
import Registration from '../Registration';
import SideMenu from '../SideMenu';
import Notes from '../../containers/notes/Notes';
import EditNote from '../../containers/notes/EditNote';
import AddNote from '../../containers/notes/AddNote';
import {
    createDrawerNavigator,
    createStackNavigator
  } from 'react-navigation';
import AuthLoadingScreen from '../../containers/AuthLoadingScreen';

const NotesRoutes = 
  createStackNavigator({
      Notes: { 
          screen: Notes,
          navigationOptions:  {
              title: 'Notes',
              headerLeft: null,
          } },
      EditNote: { 
          screen: EditNote 
        },
      AddNote: { 
          screen: AddNote 
        },
    }, {
        initialRouteName: 'Notes'
    })  

const Drawer = 
  createDrawerNavigator({
    NotesRoutes: { screen: NotesRoutes }
    }, {
      contentComponent: SideMenu,
      drawerCloseRoute: 'DrawerClose',
      navigationOptions: {
          gesturesEnabled: false
        }
    })

const Routes = 
    createStackNavigator({
        AuthLoadingScreen: {
            screen: AuthLoadingScreen
        },
        Authorization: { 
            screen: Authorization 
        },
        Registration: { 
            screen: Registration 
        },
        Drawer: { 
            screen: Drawer 
        }
      }, {
        headerMode:'none',
        initialRouteName: 'AuthLoadingScreen',
        navigationOptions: {
            gesturesEnabled: false
          }
      })

export default Routes