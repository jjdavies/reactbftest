import React, { useState } from 'react'
import uifx from 'uifx'
import BF1logo from '../img/bf1-logo.png'
import bf1sbp1 from '../img/BF1SBP1.jpg'
import bf1sbp2 from '../img/BF1SBP2.jpg'
import crayon from '../img/crayon.png'
import puppet from '../img/puppet.png'
import puppetblank from '../img/puppet-blank.png'
import busyant from '../img/busy-ant.png'
import busyantblank from '../img/busy-ant-blank.png'
import whiteboard from '../img/whiteboard.png'

import puppetMP3 from '../media/puppet.mp3'
import blinkMP3 from '../media/blink.mp3'

import TeacherAndPuppet from '../component/TeacherAndPuppet'
import AudioClip from '../component/AudioClip'


import CustomButton from './CustomButton'

export default function BF1U1P1Vocab2(props) {

    const thisStage = props.thisStage;

    const [blanks, setBlanks] = useState([true, true]);
    const [teacherExit, setTeacherExit] = useState(false);

    const nextStage = () =>{
        var targetStage= +thisStage + 1;
        props.userNavigated(targetStage, 0);
        setTeacherExit(true);
    }
    const blink = new uifx(blinkMP3);

    const blankClicked = (i) =>{
        if (i === 0){
            setBlanks([false, blanks[1]]);
            blink.play()
        } else if (i === 1){
            setBlanks([blanks[0], false]);
            blink.play()
        }
    }

    return (
        <div>
            
            <div className="split-content">
                <div className="left-tips-pane">
                    <img style={{maxWidth:'300px', margin:'auto'}} src={BF1logo} />
                    <div className="tips">
                        <div className="tip">
                            It is a puppet.<br />
                            Hello Puppet!
                        </div>
                        <div className="tip">
                            Open your books.<br />
                            Point and say.
                        </div>
                        
                    </div>
                    
                </div>
                <div className="right-content-pane">
                    <img style={{position:'absolute', left:'100px', top:'200px'}} src={puppet} />
                    <div style={{position:'absolute', top:'450px', left:'160px'}}><AudioClip type="playButton" src={puppetMP3} /></div>
                    <img style={{position:'absolute', left:'400px', top:'200px', filter:'drop-shadow(0px 0px  10px black)'}} src={bf1sbp2} />
                </div>
                <CustomButton buttonText="next" onClick={nextStage} left='1000' top='630'/>
            </div>
        </div>
    )
}