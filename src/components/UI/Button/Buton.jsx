import React from 'react';

export const Button = (props) => {
 let s1 = 'Button ';

 return (
  <button className={s1.concat(props.btnType)} onClick={props.clicked}>
   {props.children}
  </button>
 );
};

export default Button;
