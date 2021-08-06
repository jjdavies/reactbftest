import React, { useEffect, useState } from 'react'
import uifx from 'uifx'

export default function AudioClip(props) {

    const src = props.src;
    const type = props.type;
    // const [buttonClass, setButtonClass] = useState('playButton')

    useEffect(()=>{
        // if (type === "button-sm"){
        //     setButtonClass("playButton-sm")
        // }
    }, [])

    const clip = new uifx(src);

    const playClip = () =>{
        clip.play();
    }

    return (
        <div>
            <div className={type} onClick={playClip}></div>
        </div>
    )
}
