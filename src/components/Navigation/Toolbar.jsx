import React from 'react';

import Navigation from './Navigation';
import DrawerToggle from '../SideDrawer/DrawerToggle';

const Toolbar = (props) => {
 return (
  <header className='Toolbar'>
   <DrawerToggle clicked={props.drawerToggleClicked} />
   {/* <Logo /> */}
   <nav className='DesktopOnly'>
    <Navigation />
   </nav>
  </header>
 );
};

export default Toolbar;
