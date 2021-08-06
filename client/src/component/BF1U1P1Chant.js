import React, { useState } from 'react'
import CustomButton from '../component/CustomButton'
import Lyrics from '../component/Lyrics'

import BF1logo from '../img/bf1-logo.png'

export default function BF1U1P1Chant(props) {

    const [stop, setStop] = useState(false)

    const BF1U1P1ChantLyrics = [
        {
            line:"What is this?",
            syllables:[1,1,1],
            repeat:2
        },
        {
            line:"It's a table",
            syllables:[1,1,2],
            repeat:1
        },
        {
            line:"It is a table",
            syllables:[1,1,1,2],
            repeat:1
        },
        {
            line:"What is this?",
            syllables:[1,1,1],
            repeat:2
        },
        {
            line:"It's a chair",
            syllables:[1,1,1],
            repeat:1
        },
        {
            line:"It is a chair",
            syllables:[1,1,1,2],
            repeat:1
        },
        {
            line:"Is this a table?",
            syllables:[1,1,1,2],
            repeat:2
        },
        {
            line:"No, no, no.",
            syllables:[1,1,1],
            repeat:2
        },
        {
            line:"It's a puppet.",
            syllables:[1,1,2],
            repeat:1
        },
        {
            line:"It is a puppet.",
            syllables:[1,1,1,2],
            repeat:1
        },
        {
            line:"What is this?",
            syllables:[1,1,1],
            repeat:2
        },
        {
            line:"It's a shelf",
            syllables:[1,1,2],
            repeat:1
        },
        {
            line:"It is a shelf",
            syllables:[1,1,1,2],
            repeat:1
        },
        {
            line:"What is this?",
            syllables:[1,1,1],
            repeat:2
        },
        {
            line:"It's a crayon",
            syllables:[1,1,2],
            repeat:1
        },
        {
            line:"It is a crayon",
            syllables:[1,1,1,2],
            repeat:1
        },
        {
            line:"Is this a crayon?",
            syllables:[1,1,1,2],
            repeat:2
        },
        {
            line:"No, no, no.",
            syllables:[1,1,1],
            repeat:2
        },
        {
            line:"It's paper.",
            syllables:[1,2],
            repeat:1
        },
        {
            line:"It is paper.",
            syllables:[1,1,2],
            repeat:1
        },
    ]
    const thisStage = props.thisStage;
    const nextStage = () =>{
        setStop(true);
        var targetStage= +thisStage + 1;
        props.userNavigated(targetStage, 0);
    }
    return (
        <div>
            <div className="split-content">
                <div className="left-tips-pane">
                    <img style={{maxWidth:'300px', margin:'auto'}} src={BF1logo} />
                    <div className="tips">
                        <div className="tip">
                            Play the Target Song: "My Class"
                            <br />
                           
                        </div>
                        <div className="tip">
                            
                            Follow the ball and sing along.
                            <br />
                            
                        </div>
                        
                        
                    </div>
                    
                </div>
                <div className="right-content-pane">
                    <div style={{position:'relative', top:'0px', margin:'auto'}}><Lyrics lyrics={BF1U1P1ChantLyrics} stop={stop} /></div>
                </div>
            </div>
            <CustomButton buttonText="next" onClick={nextStage} left='1000' top='630'/>
        </div>
    )
}
