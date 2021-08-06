import React, { useState } from 'react'
import uifx from 'uifx'

import BF1logo from '../img/bf1-logo.png'
import bf1sbp1 from '../img/BF1SBP1.jpg'
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

export default function BF1U1P1Vocab(props) {

    const thisStage = props.thisStage;

    const [blanks, setBlanks] = useState([true, true]);
    const [teacherExit, setTeacherExit] = useState(false);

    const blink = new uifx(blinkMP3);

    const nextStage = () =>{
        var targetStage= +thisStage + 1;
        props.userNavigated(targetStage, 1000);
        setTeacherExit(true);
    }

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
                            Find Busy Ant in your book.
                        </div>
                        <div className="tip">
                            Click the 
                        </div>
                        
                    </div>
                    
                </div>
                <div className="right-content-pane">
                    <div style={{display:'flex'}}>
                        <div>
                            <img style={{position:'relative', width:'400px', padding:'20px'}} src={whiteboard} />
                        </div>
                        <div>
                            <img style={{position:'relative', width:'400px', padding:'20px'}} src={whiteboard} />
                        </div>
                    </div>
                    <img style={{position:'absolute', left:'110px', top:'50px', height:'180px'}} src={busyant} />
                    <img style={{position:'absolute', left:'110px', top:'50px', height:'180px', cursor:'pointer', opacity:blanks[0] ? 1 : 0, zIndex:3}} src={busyantblank} onClick={() => blankClicked(0)} />
                    <div style={{position:'absolute', left:'165px', top:'240px', height:'180px', fontSize:'30px', opacity:blanks[0] ? 0 : 1}}>Busy Ant</div>
                    {blanks[1]
                    ?<img style={{position:'absolute', left:'570px', top:'50px', height:'180px', cursor:'pointer', zIndex:3}} src={puppetblank} onClick={() => blankClicked(1)} />
                    :<>
                        <div style={{position:'absolute', left:'600px', top:'240px', height:'180px', fontSize:'30px'}}>Puppet</div>
                        <div style={{position:'absolute', left:'600px', top:'300px', height:'180px', fontSize:'30px'}}><AudioClip type="button" src={puppetMP3} /></div>
                    </>
                    }
                    <img style={{position:'absolute', left:'570px', top:'50px', height:'180px'}} src={puppet} />
                    
                    
                </div>
                <CustomButton buttonText="next" onClick={nextStage} left='1000' top='630'/>
            </div>
                {blanks[0] === false && blanks[1] === false &&
                    <>
                        <div style={{position:'absolute', top:'500px', left:'250px'}}><AudioClip type="button" src={puppetMP3} /></div>
                        <TeacherAndPuppet leave={teacherExit} promptTeacher="" />
                    </>      
                }
        </div>
    )
}
