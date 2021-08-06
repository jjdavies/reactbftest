import React, { useState } from 'react'
import uifx from 'uifx'
import BF1logo from '../img/bf1-logo.png'
import bf1sbp1 from '../img/BF1SBP1.jpg'
import bf1sbp2 from '../img/BF1SBP2.jpg'
import chair from '../img/chair.png'
import table from '../img/table.png'
import chairblank from '../img/chair-blank.png'
import tableblank from '../img/table-blank.png'
import busyant from '../img/busy-ant.png'
import busyantblank from '../img/busy-ant-blank.png'
import whiteboard from '../img/whiteboard.png'
import stars from '../img/stars.png'

import tableMP3 from '../media/table.mp3'
import chairMP3 from '../media/chair.mp3'
import blinkMP3 from '../media/blink.mp3'
import classroomMP3 from '../media/classroom-ambience.mp3'

import TeacherAndPuppet from '../component/TeacherAndPuppet'
import AudioClip from '../component/AudioClip'
import BlankImage from '../component/BlankImage'



import CustomButton from './CustomButton'

export default function BF1U1P1Vocab3(props) {

    const thisStage = props.thisStage;

    const tablePath = "M321.75,46.23c-.35-4.35-.9-13.22-4.86-16.94h0c-14-21.91-81.36-34-160.84-27.55C71.93,8.6,4.61,33.83.55,59.18c-1,4.68-.43,9.76-.15,13.26.63,7.65,6.65,14.41,17.18,20V195.65h0c-2.34.2-1.28,5.24-1.28,5.24S19.06,202,27,202.79A23.61,23.61,0,0,0,39.51,201c.15-5.2-1.87-5-2-5V100.07c14.76,4.17,33.47,7,55.29,8.33v7l-.27,0s-1.06,4.44,9.83,4,8.51-4.63,8.51-4.63l-.08,0v-5.67c16.69.31,34.85-.22,54.19-1.7a581.25,581.25,0,0,0,61-7.75v96.09c-.12,0-2.38-.17-2.22,5.2a28.57,28.57,0,0,0,14,1.87c8.85-.83,11.95-2,11.95-2s1.19-5.19-1.44-5.4h0V94.85C264,91,277.63,86.51,288.71,81.54V114c-.48.06-1.72.55-1.61,3.86a24.55,24.55,0,0,0,11.29,1.39c7.12-.62,9.61-1.47,9.61-1.47s.87-3.54-.92-4V78.91H307l.05-7.71C317.65,63.52,322.91,55.06,321.75,46.23Z"
    const tableViewBox= "0 0 321.91 202.94"
    const chairPath = "M158,120.5h-2.21V0H141.65l-5.71,3.92V5.43H63.6l-.06.07V0H49.41L43.69,3.92V120.5H41.34L0,164.05l.43,5.36,11,0v99H29.84l6.86-10.16V191.81a.77.77,0,0,1,.78-.75H41v36.22H57.42l6.12-9.07V191.06h50.69v77.29h18.42l6.86-10.16V227.28h6.16l6.12-9.07V150.8l4-12.12v-7.33l2.14-6.26v-4.23Z"
    const chairViewBox= "0 0 158 268.35"

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
                            Click the sillhouette to reveal the image.
                        </div>
                        <div className="tip">
                        Find a chair in the classroom.
Find a table.

                        </div>
                        
                    </div>
                    
                </div>
                <div className="right-content-pane">
                    <img style={{position:'absolute', left:'50px', top:'220px', width:'350px'}} src={table} />
                    <BlankImage left="50" top="220" width="350" svgPath={tablePath} viewBox={tableViewBox} idKey="1" opacity={blanks[0] ? 1 : 0} onClick={() => blankClicked(0)} />
                    {/* <img className="blankMask" style={{position:'absolute', left:'50px', top:'220px', width:'350px', cursor:'pointer', opacity:blanks[0] ? 1 : 0}} src={tableblank} onClick={() => blankClicked(0)} /> */}
                    <div style={{position:'absolute', left:'165px', top:'450px', height:'180px', fontSize:'40px', opacity:blanks[0] ? 0 : 1}}>Table</div>
                    <div style={{position:'absolute', top:'500px', left:'175px', opacity:blanks[0] ? 0 : 1}}><AudioClip type="playButton-sm" src={tableMP3} /></div>
                    <img style={{position:'absolute', left:'500px', top:'130px', height:'300px'}} src={chair} />
                    <BlankImage left="500" top="130" height="300" svgPath={chairPath} viewBox={chairViewBox} idKey="2" opacity={blanks[1] ? 1 : 0} onClick={() => blankClicked(1)} />
                    {/* <img style={{position:'absolute', left:'500px', top:'130px', height:'300px', cursor:'pointer', opacity:blanks[1] ? 1 : 0}} src={chairblank} onClick={() => blankClicked(1)} /> */}
                    <div style={{position:'absolute', left:'550px', top:'450px', height:'180px', fontSize:'40px', opacity:blanks[1] ? 0 : 1}}>Chair</div>
                    <div style={{position:'absolute', top:'500px', left:'565px', opacity:blanks[1] ? 0 : 1}}><AudioClip type="playButton-sm" src={chairMP3} /></div>
                </div>
                <CustomButton buttonText="next" onClick={nextStage} left='1000' top='630'/>
            </div>
        </div>
    )
}