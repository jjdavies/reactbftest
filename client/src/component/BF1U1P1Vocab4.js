import React, { useState } from 'react'
import uifx from 'uifx'
import BF1logo from '../img/bf1-logo.png'
import bf1sbp1 from '../img/BF1SBP1.jpg'
import bf1sbp2 from '../img/BF1SBP2.jpg'
import crayon2 from '../img/crayon2.png'
import paper from '../img/paper.png'
import shelf from '../img/shelf.png'
import crayon2blank from '../img/crayon2-blank.png'
import shelfblank from '../img/shelf-blank.png'
import paperblank from '../img/paper-blank.png'
import busyant from '../img/busy-ant.png'
import busyantblank from '../img/busy-ant-blank.png'
import whiteboard from '../img/whiteboard.png'

import crayonMP3 from '../media/crayon.mp3'
import paperMP3 from '../media/paper.mp3'
import shelfMP3 from '../media/shelf.mp3'
import blinkMP3 from '../media/blink.mp3'

import TeacherAndPuppet from '../component/TeacherAndPuppet'
import AudioClip from '../component/AudioClip'
import BlankImage from '../component/BlankImage'


import CustomButton from './CustomButton'

export default function BF1U1P1Vocab4(props) {

    const crayonPath = "M62.09,103.36l20.15-7.52L194.7,53.46l16.36-6.16s5.38-2.2,5.77-12.53c0-.22,0-.42,0-.65s0-.76,0-1.15c0-.83-.08-1.72-.14-2.61A56.36,56.36,0,0,0,215.05,21C213,13,210,8,207,4.92c-.45-.42-.89-.88-1.34-1.25-.11-.1-.23-.22-.34-.31-.63-.51-1.25-.91-1.87-1.33a12.13,12.13,0,0,0-6.87-2L177.18,6.82,62.84,46.92,42.29,54.13l-.45.42h0l-.76.74C35.13,61,8,87,5.27,89.59c-3.12,2.89-6,7.35-5.11,11S7.39,104,7.39,104h53.1l.17-.07.58-.22Z";
    const crayonViewBox = "0 0 216.84 104.04";

    const paperPath = "M288.48,93.12C268.76,91,155.23,2,155.23,2.5,63.54,11.56,3.84,29.69,3.84,29.69c3.1,5.76,6.11,11.24,9,16.49-5.88,1-9,1.5-9,1.5,57,106.07,91.08,114.66,92.53,115.73s47.43-5,166.66-48.17a53.27,53.27,0,0,0-4.38-4.76c3.7-1.31,7.45-2.65,11.28-4a69.65,69.65,0,0,0-5.11-5.56C279.85,95.87,288.48,92.94,288.48,93.12Z";
    const paperViewBox = "0 0 290.98 166.02";

    const shelfPath = "M12.48,157.8a6.2,6.2,0,0,1-6.21-6.21V6.22A6.21,6.21,0,0,1,12.48,0H252.39a6.21,6.21,0,0,1,6.21,6.22V151.56a6.19,6.19,0,0,1-1.37,3.9l1.37,0a54.56,54.56,0,0,1,8.88,5.48c3.68,3-1.88,2.86-1.88,2.86l-118.27-.09s-142.42.09-144.71,0-4.66-.44.31-3.4,7.67-2.13,7.67-2.13Z";
    const shelfViewBox = "0 0 268.74 163.78"

    const thisStage = props.thisStage;

    const [blanks, setBlanks] = useState([true, true, true]);
    const [teacherExit, setTeacherExit] = useState(false);

    const nextStage = () =>{
        var targetStage= +thisStage + 1;
        props.userNavigated(targetStage, 1000);
        setTeacherExit(true);
    }
    const blink = new uifx(blinkMP3);

    const blankClicked = (i) =>{
        if (i === 0){
            setBlanks([false, blanks[1], blanks[2]]);
            blink.play()
        } else if (i === 1){
            setBlanks([blanks[0], false, blanks[2]]);
            blink.play()
        } else if (i === 2){
            setBlanks([blanks[0], blanks[1], false]);
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
                            Click the silhouette to reveal the image.
                        </div>
                        <div className="tip">
                        Find these things in the classroom.

                        </div>
                        
                    </div>
                    
                </div>
                <div className="right-content-pane">
                    <img style={{position:'absolute', left:'20px', top:'220px', width:'200px'}} src={crayon2} />
                    <BlankImage left="20" top="218" width="200" svgPath={crayonPath} viewBox={crayonViewBox} idKey="1" opacity={blanks[0] ? 1 : 0} onClick={() => blankClicked(0)} />
                    {/* <img style={{position:'absolute', left:'20px', top:'220px', width:'200px', cursor:'pointer', opacity:blanks[0] ? 1 : 0}} src={crayon2blank} onClick={() => blankClicked(0)} /> */}
                    <div style={{position:'absolute', left:'50px', top:'320px', height:'180px', fontSize:'40px', opacity:blanks[0] ? 0 : 1}}>
                        <div style={{position:'relative', top:'60px', left:'30px'}}>
                            <AudioClip src={crayonMP3} type="playButton-sm" />
                        </div>
                        Crayon
                    </div>
                    <img style={{position:'absolute', left:'350px', top:'130px', height:'120px'}} src={paper} />
                    <BlankImage left="350" top="130" width="211" svgPath={paperPath} viewBox={paperViewBox} idKey="2" opacity={blanks[1] ? 1 : 0} onClick={() => blankClicked(1)} />
                    {/* <img style={{position:'absolute', left:'350px', top:'130px', height:'120px', cursor:'pointer', opacity:blanks[1] ? 1 : 0}} src={paperblank} onClick={() => blankClicked(1)} /> */}
                    <div style={{position:'absolute', left:'620px', top:'150px', height:'180px', fontSize:'40px', opacity:blanks[1] ? 0 : 1}}>
                        <div style={{position:'relative', top:'60px', left:'30px'}}>
                            <AudioClip src={paperMP3} type="playButton-sm" />
                        </div>
                        Paper
                    </div>
                    <img style={{position:'absolute', left:'420px', top:'320px', width:'270px'}} src={shelf} />
                    <BlankImage left="420" top="320" width="270" svgPath={shelfPath} viewBox={shelfViewBox} idKey="3" opacity={blanks[2] ? 1 : 0} onClick={() => blankClicked(2)} />
                    {/* <img style={{position:'absolute', left:'420px', top:'320px', width:'270px', cursor:'pointer', opacity:blanks[2] ? 1 : 0}} src={shelfblank} onClick={() => blankClicked(2)} /> */}
                    <div style={{position:'absolute', left:'320px', top:'400px', height:'180px', fontSize:'40px', opacity:blanks[2] ? 0 : 1}}>
                        <div style={{position:'relative', top:'60px', left:'30px'}}>
                            <AudioClip src={shelfMP3} type="playButton-sm" />
                        </div>
                        Shelf
                    </div>
                </div>
                <CustomButton buttonText="next" onClick={nextStage} left='1000' top='630'/>
            </div>
        </div>
    )
}