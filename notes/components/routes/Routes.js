import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Authorization from '../Authorization';
import Registration from '../Registration';
import Notes from '../../containers/notes/Notes';
import EditNote from '../../containers/notes/EditNote';



const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "authorization" component = {Authorization} title = "Authorization" initial={true} />
         <Scene key = "registration" component = {Registration} title = "Registration" />
         <Scene key = "notes" component = {Notes} title = "Notes" onRight={()=>{}} rightTitle={'Add Note'} />
         <Scene key = "editNote" component = {EditNote} title = "Edit Note" onRight={()=>{}} rightTitle={'Add Note'} onLeft={()=>{}} leftTitle={'Close'}/>
      </Scene>
   </Router>
)
export default Routes