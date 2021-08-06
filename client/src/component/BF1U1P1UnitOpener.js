import React, { useState } from 'react'
import BF1logo from '../img/bf1-logo.png'
import bf1sbp1 from '../img/BF1SBP1.jpg'
import crayon from '../img/crayon.png'


import CustomButton from './CustomButton'

export default function BF1U1P1UnitOpener(props) {

    const thisStage = props.thisStage

    const nextStage = () =>{
        var targetStage= +thisStage + 1
        props.userNavigated(targetStage, 0);
    }
    return (
        <div>
            
            <div className="split-content">
                <div className="left-tips-pane">
                    <img style={{maxWidth:'300px', margin:'auto'}} src={BF1logo} />
                    <div className="tips">
                        <div className="tip">
                            Unit 1 is <span style={{color:'purple'}}>My Class.</span><br />
                            Find a crayon.
                            <img style={{width:'200px'}} src={crayon} />
                        </div>
                        <div className="tip">
                            What else can you see?
                        </div>
                    </div>
                    
                </div>
                <div className="right-content-pane">
                    <img style={{left:'0', maxWidth:'900px', padding:'10px', filter:'drop-shadow(0px 0px 10px rgba(0,0,0,.4)'}} src={bf1sbp1} />
                </div>
                <CustomButton buttonText="next" onClick={nextStage} left='1000' top='630'/>
            </div>
        </div>
    )
}
