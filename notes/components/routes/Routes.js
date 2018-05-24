import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Authorization from '../Authorization';
import Registration from '../Registration';
import Notes from '../../containers/notes/Notes';


const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "authorization" component = {Authorization} title = "Authorization" initial hideNavBar/>
         <Scene key = "registration" component = {Registration} title = "Registration" hideNavBar/>
         <Scene key = "notes" component = {Notes} title = "Notes" hideNavBar/>
      </Scene>
   </Router>
)
export default Routes