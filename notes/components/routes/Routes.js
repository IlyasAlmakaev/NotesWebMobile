import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Authorization from '../Authorization';
import Registration from '../Registration';


const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "authorization" component = {Authorization} title = "Authorization" initial = {true} />
         <Scene key = "registration" component = {Registration} title = "Registration" />
      </Scene>
   </Router>
)
export default Routes