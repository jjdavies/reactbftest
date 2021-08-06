import React from 'react'

import stars from '../img/stars.png'
import crayonclip from '../img/crayon-clip_1.svg'

export default function ClipTest() {
    return (
        <div>
            {/* <svg style={{border:'2px solid black'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.7 34.44"> */}
            <svg style={{border:'2px solid black'}} xmlns="http://www.w3.org/2000/svg">
            {/* <svg style={{border:'2px solid black'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"> */}
                <defs>
                    <clipPath id="clippy">
                        <path fill="#ffffff" d="M62.09,103.36l20.15-7.52L194.7,53.46l16.36-6.16s5.38-2.2,5.77-12.53c0-.22,0-.42,0-.65s0-.76,0-1.15c0-.83-.08-1.72-.14-2.61A56.36,56.36,0,0,0,215.05,21C213,13,210,8,207,4.92c-.45-.42-.89-.88-1.34-1.25-.11-.1-.23-.22-.34-.31-.63-.51-1.25-.91-1.87-1.33a12.13,12.13,0,0,0-6.87-2L177.18,6.82,62.84,46.92,42.29,54.13l-.45.42h0l-.76.74C35.13,61,8,87,5.27,89.59c-3.12,2.89-6,7.35-5.11,11S7.39,104,7.39,104h53.1l.17-.07.58-.22Z"/>
                    </clipPath>
                    {/* <polygon points="130,0 0,160 0,485 270,645 560,485 460,160"></polygon> */}
                </defs>
                <image xlinkHref={stars} width="100%"  clipPath="url(#clippy)"/> 

            </svg>
            {/* <img id="clippy" src={crayonclip} /> */}
        </div>
    )
}
