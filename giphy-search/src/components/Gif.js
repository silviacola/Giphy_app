import React from 'react';

const Gif = (props) => {
    return (
      <div className='gif'>
        <img src={props.gif.images.original.url} alt="Gif" />
    </div>
    )       
 }

export default Gif;