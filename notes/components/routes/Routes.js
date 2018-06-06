import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Authorization from '../Authorization';
import Registration from '../Registration';
import Notes from '../../containers/notes/Notes';
import EditNote from '../../containers/notes/EditNote';
import AddNote from '../../containers/notes/AddNote';
import SideRoutes from '../side/SideRoutes';
import Drawer from 'react-native-drawer-menu';
import SideMenu from '../side/SideMenu';
// import {
//     createStackNavigator,
//   } from 'react-navigation';



const Routes = () => (
    // createStackNavigator({
    //     Authorization: { screen: Authorization },
    //     Registration: { screen: Registration },
    //     Notes: { screen: Notes },
    //     EditNote: { screen: EditNote },
    //     AddNote: { screen: AddNote },
    //   },
    //   {
    //     initialRouteName: 'Authorization',
    //   })
   <Router>
      <Scene key = "root">
         <Scene key = "authorization" component = {Authorization} title = "Authorization"  />
         <Scene key = "registration" component = {Registration} title = "Registration" />
         <Drawer
                hideNavBar
                key="drawerMenu"
                contentComponent={SideMenu}
                drawerWidth={250}
                drawerPosition="right"
            >
         <Scene key = "notes" component={Notes} title = "Notes" onRight={()=>{}} rightTitle={'Add Note'} />
         <Scene key = "editNote" component = {EditNote} title = "Edit Note" onRight={()=>{}} rightTitle={'Edit Note'} onLeft={()=>{}} leftTitle={'Close'}/>
         <Scene key = "addNote" component = {AddNote} title = "Add Note" onRight={()=>{}} rightTitle={'Add Note'} onLeft={()=>{}} leftTitle={'Close'}/>
         </Drawer>
      </Scene>
   </Router>
)
export default Routes