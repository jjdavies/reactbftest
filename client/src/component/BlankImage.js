import React from 'react'

import stars from '../img/stars.png'
import rainbow from '../img/rainbow.png'

export default function BlankImage(props) {
    const clipPathOffsetX = 0;
    const urlKey = `url(#${props.idKey})`
    const style={
        position:'absolute',
        height:props.height,
        width:props.width,
        left:props.left,
        top:props.top,
        cursor:'pointer',
        opacity:props.opacity
    }

    const imageWidth = +props.width+170;
    const imageHeight = +props.height+150

    // useEffect(()=>{
    //     if (imageWidth < (props.width))
    // }, [])

    
    return (
        <div onClick={props.onClick}>
            <svg style={{...style}} viewBox={props.viewBox}>
                <clipPath className="clipPathAnim" id={props.idKey}>
                    <path d={props.svgPath} />
                </clipPath>
                <image className="clippedImageAnim" xlinkHref={rainbow} style={{position:'absolute'}} width={props.width ? imageWidth : null} height={props.height ? imageHeight : null} clipPath={urlKey} />             </svg>
        </div>
    )
}
