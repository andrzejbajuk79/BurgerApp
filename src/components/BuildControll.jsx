import React from 'react';
import OneControll from './OneControll';

export const BuildControll = (props) => {
 const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
 ];

 return (
  <div className='buildControls'>
   <p>
    Cena twojego burgera :<strong>{props.price.toFixed(2)} EUR</strong>
   </p>{' '}
   {controls.map((item) => (
    <OneControll
     added={() => props.add(item.type)}
     remove={() => props.remove(item.type)}
     key={item.label}
     label={item.type}
     disabled={props.disabled[item.type]}
    />
   ))}
   <button
    onClick={props.ordered}
    disabled={props.purchasable}
    className='OrderButton'
   >
    Check your order
   </button>
  </div>
 );
};

export default BuildControll;
