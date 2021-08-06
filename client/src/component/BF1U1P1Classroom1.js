import React, { useEffect, useState } from 'react'
import uifx from 'uifx'

import Classroom from '../component/Classroom'
import arrow from '../img/curved-arrow-toleft.png'

import whatisthisMP3 from '../media/what is this.mp3'
import itisacrayonMP3 from '../media/it is a crayon.mp3'
import itisashelfMP3 from '../media/it is a shelf.mp3'

import CustomButton from '../component/CustomButton'
import AudioClip from '../component/AudioClip'

import classroomMP3 from '../media/classroom-ambience.mp3'



export default function BF1U1P1Classroom1(props) {

    const [zoomOut, setZoomOut] = useState(false);
    const [subStage, setSubStage] = useState(-1);
    const thisStage = props.thisStage;

    
    const classroom = new uifx(classroomMP3);

    useEffect(()=>{
        classroom.play();
        setTimeout(()=>{
            setSubStage(0);
        }, 3000)
    }, [props])
    
    const nextStage = () =>{
        if (subStage === 0){
            setSubStage(1);
            setZoomOut(true);
            setTimeout(()=>{
                setSubStage(2);
            }, 2000)
        } else if(subStage === 2) {
            setSubStage(2);
            var targetStage= +thisStage + 1;
            props.userNavigated(targetStage, 0);
        }
        
    }
    return (
        <div>
            <Classroom zoomOut={zoomOut} />
                {subStage === 0 &&
                    <div style={{position:'absolute', top:'460px', left:'670px'}}>
                        <div style={{transform:'scaleY(-1) rotate(-30deg)', filter:'drop-shadow(2px 2px 3px black)'}}>
                            <img src={arrow} />
                        </div>
                        <div className="label" style={{left:'180px', top:'-100px', width:'200px'}}>What is this?</div>
                        <div style={{position:'relative', top:'-170px', left:'350px'}}><AudioClip src={whatisthisMP3} type="playButton-sm" /></div>
                        <div style={{position:'relative', top:'-150px', left:'-250px'}}><AudioClip src={itisacrayonMP3} type="playButton" /></div>
                    </div>
                }
                {subStage === 2 &&
                    <div style={{position:'absolute', top:'160px', left:'870px'}}>
                        <div style={{transform:'rotate(-30deg)', filter:'drop-shadow(2px 2px 3px black)'}}>
                            <img src={arrow} />
                        </div>
                        <div className="label" style={{left:'80px', top:'0px', width:'200px'}}>What is this?</div>
                        <div style={{position:'relative', top:'-50px', left:'250px'}}><AudioClip src={whatisthisMP3} type="playButton-sm" /></div>
                        <div style={{position:'relative', top:'-200px', left:'-350px'}}><AudioClip src={itisashelfMP3} type="playButton" /></div>
                    </div>
                }
            <CustomButton buttonText="next" onClick={nextStage} left='1000' top='630'/>
        </div>
    )
}
