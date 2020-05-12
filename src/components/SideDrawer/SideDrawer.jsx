import React from 'react';
import Logo from '../assets/logo.png';

import Navigation from '../Navigation/Navigation';
import Backdrop from '../UI/Backdrop/Backdrop';
import Aux from '../../HOC/aux';
import Modal from '../UI/Modal/Modal';

export const SideDrawer = (props) => {
 let attachedClasses;
 if (props.open) {
  attachedClasses = 'SideDrawer Open';
 } else {
  attachedClasses = 'SideDrawer Close';
 }

 return (
  <Aux>
   <Backdrop show={props.open} close={props.closed} />
   <div className={attachedClasses}>
    <nav>
     <Navigation />
    </nav>
   </div>
  </Aux>
 );
};

export default SideDrawer;
