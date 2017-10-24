import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
    return (
      <div className="ListWrapper">
                {props.data.map(elem => {
                    return ( 
                    <Gif gif={elem} key={elem.id}/>
                        )
                })}
    </div>
    )
}
export default GifList;