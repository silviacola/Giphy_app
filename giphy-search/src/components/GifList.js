import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
    // componentWillReceiveProps(nextProps) {
    //     console.log('GifList will receive props');
    // }

    // componentWillMount() {
    //     console.log('GifList will mount');
    // }

    // componentDidMount() {
    //     console.log('GiftList did mount')
    // }
    return (
      <div>
        {props.data.map(elem => {
            return ( 
               <Gif gif={elem} key={elem.id}/>
                )
        })}
    </div>
    )
}
export default GifList;