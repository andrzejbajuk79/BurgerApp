import React from 'react';
import NavigationItem from './NavigationItem';

const Navigation = () => {
 return (
  <ul className='NavigationItems'>
   <NavigationItem link='/'>Burger Builder</NavigationItem>
   <NavigationItem link='/'>Checkout</NavigationItem>
  </ul>
 );
};

export default Navigation;
