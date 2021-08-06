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
import slideupMP3 from '../media/slideup.mp3'
import slidedownMP3 from '../media/slidedown.mp3'

import TeacherAndPuppet from '../component/TeacherAndPuppet'
import AudioClip from '../component/AudioClip'
import BlankImage from '../component/BlankImage'




import CustomButton from './CustomButton'

export default function BF1U1P1Vocab(props) {

    const thisStage = props.thisStage;

    const [blanks, setBlanks] = useState([true, true]);
    const [teacherExit, setTeacherExit] = useState(0);

    const blink = new uifx(blinkMP3);
    const slideup = new uifx(slideupMP3);
    const slidedown = new uifx(slidedownMP3);

    const busyAntPath = "M122.09,25.73a6.72,6.72,0,0,0-2.81.48,43.8,43.8,0,0,1-5.83,1.43c-1.9.26-7.41-.85-10.27-.58s-11.6,6.77-11.6,6.77l0,0A41.93,41.93,0,0,0,86.3,30c1.87-.33,3-1,2.88-2.31C88.54,21.57,70.91,18,70.91,18L69,17.71a8.77,8.77,0,0,1,3.29-1.08,6.85,6.85,0,0,1,3.09.6S74.2,15.06,74.2,15.1a11,11,0,0,0-4.57,1.21A5,5,0,0,0,68.4,17.6c-.14-.2-.14-.35,0-1a15,15,0,0,1,.72-2.1c.34-.92.59-.81,1.06-1.58a3.91,3.91,0,0,1-1.44-.16,3.37,3.37,0,0,1-1.32-.66,18.76,18.76,0,0,0-.24,3.18A3.57,3.57,0,0,0,67.5,17a2.22,2.22,0,0,0,.58.6c-1.7-.21-4-.47-6.41-.6h.76a9.65,9.65,0,0,1-.32-2.38c-.11-2,.79-2.28,1.64-2.91s4.82-2.33,9.32-4.61S80.27,3,80.64,2,80,.52,78.9.1s-2.49.64-2.49.64a41,41,0,0,1-6.78,5.19c-.9.58-6.51,3.12-8,4.44a3.64,3.64,0,0,0-1.22,3.18l.37,3.4c-3.33-.14-6.7,0-8.84.78h0l-.13.06-.37.16-.2.09-.35.21a.78.78,0,0,0-.15.1,3,3,0,0,0-.33.27.6.6,0,0,0-.08.08,2.12,2.12,0,0,0-.33.41c-1.16,1.85.6,3.51,3.05,4.83a18,18,0,0,0-2.9,1h0c-1.67.71-3.1,1.63-3.1,2.38,0,.48.52,1,1.43,1.57a18.47,18.47,0,0,0-4.19,4.71c-9,15-2.75,27.5,8.3,34.86a14,14,0,0,0-1.31,2,17,17,0,0,0-2.06,8,26,26,0,0,0-4.65-3.72A129.39,129.39,0,0,0,40,54.8L36.79,71.53a25.46,25.46,0,0,0-5.63-.63,33.7,33.7,0,0,0-7,.79A57.86,57.86,0,0,1,19.43,52.9a49.73,49.73,0,0,0-2.75,16.84c0,1.17.19,2.65.41,4.33A45.11,45.11,0,0,0,2.46,84.88c-2.54,2.86-3,3.9-1.91,4.88a4,4,0,0,0,1.57,1,16,16,0,0,0,3.6.4,12.46,12.46,0,0,1,3.41.75c1.84.44,8.54,3.39,12.47,4.58.64,2.46,1.27,4.75,1.87,6.69h0a17,17,0,0,0-6.63,1.77,7.11,7.11,0,0,0-3.54,3.74L26.44,108s-1.8-4.86-3.64-11.22c.26.06.5.11.71.14,3.1.44,8.46,2,15.81,0,1.65-.45,3.33-.91,4.92-1.47A36.82,36.82,0,0,1,41,107.76l13.16.28a7,7,0,0,0-3.53-3.73,23,23,0,0,0-6.93-2.16,33.09,33.09,0,0,0,1.41-7C48.26,94,51,92.32,52.24,89.6A7.87,7.87,0,0,0,55.1,91a12.51,12.51,0,0,0,6,.52s1,2.32,3,2.58a2.64,2.64,0,0,0,3.08-1.72c.44-1.42-.1-2.39-1.49-3.32,0,0,1.89.71,2.07-.14s-1.83-1.47-3.18-1.26a5.42,5.42,0,0,0-3.79,2.8,15.06,15.06,0,0,1-4-.44c-1.51-.46-2.55-.67-3.07-.9a2.76,2.76,0,0,1-1-.74A9.62,9.62,0,0,0,53,86.29a8.14,8.14,0,0,0,.75.5s7.14,4,15.09-5.4a17.83,17.83,0,0,0,2.7-4.16C76,78.67,81.73,80.05,84.51,80c3.55-.05,7.1-2.57,7.39-2.8s-.16-1.06-.26-1.3.16-.69,0-1.09-1.25-1-1.25-1c.67-.93,3.5-1.7,2-2.44a2.54,2.54,0,0,0-1.93.33A19.19,19.19,0,0,0,97,65.18c8.51-14.08,2.19-24.34-4.29-30.35.11-.06,7.2-4.07,7.62-4.33a2.61,2.61,0,0,1,1.64-.27c12.13,1.17,14.88.85,17,.69s4.92-1,5.24-2.54S122.72,25.89,122.09,25.73Z"
    const busyAntViewBox = "0 0 124.19 108.68";
    
    const puppetPath = "M74.93,61a17.38,17.38,0,0,0,.15-5.28C74.13,47.89,70.69,45,69,44A23.39,23.39,0,0,0,58.05,27.32l-.76-7.19s-.47-4.59-1.66-6.53-3.45-3.28-4.22-4.21a45.38,45.38,0,0,1-5.47-7.86S44.78-.09,43.5,0,41,.19,41,1.39s2.31,4.1,6.34,8.07A82.45,82.45,0,0,1,54,16.36a4.13,4.13,0,0,1,1.15,2.41c0,.88,1.3,6.78,1.5,7.72a31.62,31.62,0,0,0-6.52-2.75c.56-.33.87-.54.87-.54h0c2.12-.91,3.3-2,2.76-3.3C51.42,14.33,33.86,16,33.86,16L32,16.23a8.25,8.25,0,0,1,2.77-1.94A6.81,6.81,0,0,1,37.82,14s-1.69-1.7-1.68-1.67a10.63,10.63,0,0,0-4,2.43,4.79,4.79,0,0,0-.79,1.56c-.19-.15-.23-.29-.27-.9a16.74,16.74,0,0,1,.08-2.17c.06-1,.33-.93.55-1.78a3.81,3.81,0,0,1-1.39.25,3.11,3.11,0,0,1-1.43-.25,17.48,17.48,0,0,0,.68,3.05A3.33,3.33,0,0,0,30.38,16a2.3,2.3,0,0,0,.72.4c-2,.32-4.69.84-7.39,1.55-.06-1.11-.59-8.88-4-9.26-2.26-.59-6.23-.72-7.72-1.19S7.55,6.15,7,5.84A26,26,0,0,0,2.11,4.48C1.58,4.52,0,5.52,0,6.79S4.47,9.11,6.1,9.51s3.69,1.12,13.54,1.8c.56,0,1,.65,1.29.92S22,17.5,22.12,18.36a20.79,20.79,0,0,0-6.18,2.71h0l-.11.09-.3.25-.16.15-.27.29L15,22a2.64,2.64,0,0,0-.23.35.41.41,0,0,0-.05.09,2.45,2.45,0,0,0-.2.48C13.93,25,16.05,26,18.72,26.59a17.73,17.73,0,0,0-2.45,1.72h0c-1.36,1.14-2.45,2.41-2.24,3.11a1.13,1.13,0,0,0,.44.53h0l0,0A17.66,17.66,0,0,0,9.28,44.55c0,16.85,18.3,23.91,18.3,23.91a63.73,63.73,0,0,0,15.81,2.25c0,.1.06.2.08.3a7.31,7.31,0,0,0-3.16,3.57,29.55,29.55,0,0,0-1.7,21.48,5.13,5.13,0,0,0-2,5.37c.88,3.2,5.23,2.45,6-.54,0,0,0,1.49,1.13,1.67s1.45-5.52-4.1-7.11A30.52,30.52,0,0,1,39.88,84s1.73-7.35,4.58-10.32a4.05,4.05,0,0,0,1.74,2,21.64,21.64,0,0,0,5.33,1.44A100.79,100.79,0,0,1,54.3,98.59c.14,12.09,6.12,12.36,6.12,12.36s15.22,1.63,31.79-9.78A21,21,0,0,0,97,96.82a4.79,4.79,0,0,0,.43-.63S95.83,80.91,74.93,61Z"
    const puppetViewBox = "0 0 97.44 111.03";

    const nextStage = () =>{
        var targetStage= +thisStage + 1;
        props.userNavigated(targetStage, 1000);
        if (teacherExit === 1){
            setTeacherExit(2);
            slidedown.play();
        }
    }

    const blankClicked = (i) =>{
        if (i === 0){
            setBlanks([false, blanks[1]]);
            blink.play();
            
        } else if (i === 1){
            setBlanks([blanks[0], false]);
            blink.play();
            slideup.play()
            setTeacherExit(1)
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
                            Click the silhouette to reveal.
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
                    {/* <img style={{position:'absolute', left:'110px', top:'50px', height:'180px', cursor:'pointer', opacity:blanks[0] ? 1 : 0, zIndex:3}} src={busyantblank} onClick={() => blankClicked(0)} /> */}
                    {/* <img style={{position:'absolute', left:'110px', top:'50px', height:'180px', cursor:'pointer', opacity:blanks[0] ? 1 : 0, zIndex:3}} src={busyantblank} onClick={() => blankClicked(0)} /> */}
                    <BlankImage left="110" top="50" height="180" svgPath={busyAntPath} viewBox={busyAntViewBox} idKey="1" opacity={blanks[0] ? 1 : 0} onClick={() => blankClicked(0)} />
                    <div style={{position:'absolute', left:'165px', top:'240px', height:'180px', fontSize:'30px', opacity:blanks[0] ? 0 : 1}}>Busy Ant</div>
                    <img style={{position:'absolute', left:'570px', top:'50px', height:'180px'}} src={puppet} />
                    {blanks[1]
                    // ?<img style={{position:'absolute', left:'570px', top:'50px', height:'180px', cursor:'pointer', zIndex:3}} src={puppetblank} onClick={() => blankClicked(1)} />
                    ?<>
                        <BlankImage left="570" top="50" height="180" svgPath={puppetPath} viewBox={puppetViewBox} idKey="2" onClick={() => blankClicked(1)} />
                    </>
                    :<>
                        <div style={{position:'absolute', left:'600px', top:'240px', height:'180px', fontSize:'30px'}}>Puppet</div>
                        <div style={{position:'absolute', left:'600px', top:'300px', height:'180px', fontSize:'30px'}}><AudioClip type="button" src={puppetMP3} /></div>
                    </>
                    }
                    
                    
                </div>
                <CustomButton buttonText="next" onClick={nextStage} left='1000' top='630'/>
            </div>
                {blanks[0] === false && blanks[1] === false &&
                    <>
                        <div style={{position:'absolute', top:'500px', left:'250px'}}><AudioClip type="button" src={puppetMP3} /></div>
                        {/* {slideup.play()} */}
                        <TeacherAndPuppet leave={teacherExit} promptTeacher="" />
                    </>      
                }
        </div>
    )
}
