import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Authorization from '../Authorization';


const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "/" component = {Authorization} title = "Authorization" initial = {true} />
        
      </Scene>
   </Router>
)
export default Routes