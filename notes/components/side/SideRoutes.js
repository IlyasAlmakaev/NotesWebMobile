import {DrawerNavigator} from 'react-navigation';
import Notes from '../../containers/notes/Notes';
//import {SideMenu} from './SideMenu';


export default DrawerNavigator({
  Notes: {
    screen: Notes
  }
}, {
 // contentComponent: SideMenu,
  drawerWidth: 300
});
