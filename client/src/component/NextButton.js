import React, { useState } from 'react'
import next from '../img/next.png'
import nextPressed from '../img/next_pressed.png'

export default function NextButton(props) {

    const [over, setOver] = useState(false)
    const mouseOver= () =>{
        setOver(true);
        console.log('over')
    }
    const mouseOut= () =>{
        setOver(false);
        console.log('out')
    }
    const clicked = () =>{
        props.onClick();
    }
    return (
        <div className="next-button">
            <img className="next-button-base" src={next} />
            <img 
            className="next-button-pressed" 
            src={nextPressed} 
            onMouseOver={mouseOver} 
            onMouseOut={mouseOut} 
            onClick={clicked}
            style={{opacity:over ? 1 : 0, transform:`scale(${over ? 1.1 : 1})`}}
            ></img>
        </div>
    )
}
