import React from 'react';

const OneControll = (props) => {
 return (
  <div className='BuildControl'>
   <div className='Label'>{props.label}</div>
   <button disabled={props.disabled} onClick={props.remove} className='Less'>
    {' '}
    Less
   </button>
   <button onClick={props.added} className='More'>
    More
   </button>
  </div>
 );
};

export default OneControll;
