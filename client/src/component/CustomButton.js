import React from 'react'

export default function CustomButton(props) {

    
    const propStyle={
        left:`${props.left}px`,
        top:`${props.top}px`
    }
    const handleClick = () =>{
        props.onClick();
    }
    return (
        <>
        <div className="button" onClick={handleClick} style={{...propStyle}}>
            <div className="button-bg"></div>
            <div className="button-text">{props.buttonText}</div>
        </div>
        </>
    )
}
