import React, { memo } from 'react'
import arrow from '../img/arrow.png'

const styles = {
    // display: "block",
    // textAlign:'left',
    transform: "rotate(-7deg)",
    // WebkitTransform: "rotate(-7deg)",
  };


export const ItemDragPreview = memo(function ItemDragPreview(props){
    
    return (
        <div style={{...styles, transform:`rotate(${props.rotation}deg)`}}>
            <img src={arrow} />
        </div>
    );
});