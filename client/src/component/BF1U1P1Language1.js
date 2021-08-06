import React, { useState, useEffect } from 'react'
import BF1logo from '../img/bf1-logo.png'
import bf1sbp1 from '../img/BF1SBP1.jpg'
import chair from '../img/chair.png'
import table from '../img/table.png'

import itisatable from '../media/it is a table.mp3'
import itisachair from '../media/it is a chair.mp3'

import TeacherAndPuppet from '../component/TeacherAndPuppet'
import SpeechBubble from '../component/SpeechBubble'


import CustomButton from './CustomButton'
import AudioClip from '../component/AudioClip'

export default function BF1U1P1Language1(props) {

    const thisStage = props.thisStage;

    const [blanks, setBlanks] = useState([true, true]);
    const [teacherExit, setTeacherExit] = useState(false);

    const [chairClass, setChairClass] = useState("chair");
    const [tableClass, setTableClass] = useState("table table-large");
    const [audioSrc, setAudioSrc] = useState(itisatable);
    const [chairCurrent, setChairCurrent] = useState(false);
    const [promptTeacher, setPromptTeacher] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setPromptTeacher(true)
        }, 1000)
    }, [])

    const nextStage = () =>{
        var targetStage= +thisStage + 1;
        props.userNavigated(targetStage, 1000);
        setPromptTeacher(false)
        setTeacherExit(true);
    }

    const blankClicked = (i) =>{
        if (i === 0){
            setBlanks([false, blanks[1]]);
        } else if (i === 1){
            setBlanks([blanks[0], false]);
        }
    }

    const swapImage = () =>{
        setChairCurrent(!chairCurrent);
        if (chairClass === "chair"){
            setChairClass("chair chair-large")
            setTableClass("table")
            setPromptTeacher('chair')
            setAudioSrc(itisachair)
        } else if (chairClass === "chair chair-large"){
            setChairClass("chair")
            setTableClass("table table-large")
            setPromptTeacher('table')
            setAudioSrc(itisatable)
        }
        console.log('click')
    }

    return (
        <div>
            
            <div className="split-content">
                <div className="left-tips-pane">
                    <img style={{maxWidth:'300px', margin:'auto'}} src={BF1logo} />
                    <div className="tips">
                        <div className="tip">
                            Click the image to change it.
                        </div>
                        
                    </div>
                    
                </div>
                <div className="right-content-pane">
                    <img className={tableClass} src={table} onClick={swapImage} />
                    <img className={chairClass} src={chair} onClick={swapImage} />
                    <div style={{position:'absolute', top:'500px', left:'175px'}}><AudioClip type="playButton-sm" src={audioSrc} /></div>
                    {promptTeacher &&
                        <SpeechBubble content="What is this?" top="50px" left="450px" />
                    }
                </div>
                
                <TeacherAndPuppet leave={teacherExit} point="true" promptTeacher={promptTeacher} />
                <CustomButton buttonText="next" onClick={nextStage} left='1000' top='630'/>
            </div>
        </div>
    )
}
