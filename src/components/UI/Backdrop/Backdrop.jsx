import React from 'react';

const Backdrop = (props) => {
 return props.show ? (
  <div className='Backdrop' onClick={props.close}></div>
 ) : null;
};

export default Backdrop;
