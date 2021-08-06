import React from 'react'

export default function SpeechBubble(props) {
    return (
        <div>
            <div className="speech-bubble" style={{top:`${props.top}`, left:`${props.left}`}}>
                {props.content}
            </div>
        </div>
    )
}
