import React, { useState, useEffect } from 'react'
import BF1Logo from '../img/bf1-logo.png'
import BusyAnt from '../component/BusyAnt'
import CustomButton from '../component/CustomButton'
import uifx from 'uifx';


export default function Warmup(props) {

    const [introClass, setIntroClass] = useState ("intro");
    const [antExit, setAntExit] = useState(false)


    const nextStage = () =>{
        var targetStage=2;
        props.userNavigated(targetStage, 1200);
        setAntExit(true)
        setIntroClass("intro flyRight");
    }

    useEffect(()=>{

    }, [])

    return (
        <div>
            <img className="bf1logo-corner" src={BF1Logo} />
            <div className={introClass} style={{left:'600px'}}>
                <div className="unit-period-heading">Warmup</div>
                <div className="unit-name-heading">Pass the ball!</div>
                <div className="warmup-activity-desc">What's your name? <br /> Pass the ball and take turns to say: <br />"My name is..."</div>
            </div>
            <CustomButton buttonText="next" onClick={nextStage} left='1000' top='630'/>
            <BusyAnt leave={antExit} stage="warmup" ballCatch="true" />
        </div>
    )
}
