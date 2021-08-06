import React, { useState } from 'react'
import BF1Logo from '../img/bf1-logo.png'
import CustomButton from '../component/CustomButton'
import objbullet1 from '../img/obj-bullet-1.png'
import objbullet2 from '../img/obj-bullet-2.png'
import objbullet3 from '../img/obj-bullet-3.png'

export default function LessonObjectives(props) {

    const thisStage = props.thisStage;

    const nextStage = () =>{
        var targetStage = +thisStage + 1;
        props.userNavigated(targetStage, 0);
    }
    return (
        <div>
            <div className="unit-period-heading">Lesson Objectives</div>
            <div className="unit-name-heading">I will:</div>
            <div className="lesson-objective">
                <img className="objective-bullet" src={objbullet1} />
                <div className="lesson-objective-text">
                    {props.objectives[0]}
                </div>
            </div>
            <div className="lesson-objective">
                <img className="objective-bullet" src={objbullet2} />
                <div className="lesson-objective-text">
                    {props.objectives[1]}
                </div>
            </div>
            <div className="lesson-objective">
                <img className="objective-bullet" src={objbullet3} />
                <div className="lesson-objective-text">
                    {props.objectives[2]}
                </div>
            </div>
            <CustomButton buttonText="next" onClick={nextStage} left='1000' top='630'/>
        </div>
    )
}
