import React from 'react';
import {Link} from 'react-router-dom';

const NavigationItem = (props) => {
 return (
  <li className='NavigationItem'>
   <Link className={props.active ? 'active' : ''} href={props.link}>
    {props.children}
   </Link>
  </li>
 );
};

export default NavigationItem;
