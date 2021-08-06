import React, { useState, useCallback, memo } from 'react'
import BusyAnt from '../component/BusyAnt'
import BF1Logo from '../img/bf1-logo.png'
import CustomButton from '../component/CustomButton'

export default function Intro(props) {

    const [introClass, setIntroClass] = useState ("intro");
    const [antExit, setAntExit] = useState(false);

    const nextStage = () =>{
        props.userNavigated(1, 1200);
        setAntExit(true)
        setIntroClass("intro flyRight");
    }

    // const nextStageMem = useCallback(nextStage)

    const BusyAntComp = useCallback(BusyAnt)
    
    return (
        <div>
            <BusyAnt leave={antExit} stage="intro" />
            <img className="bf1logo" src={BF1Logo} />
            <div className={introClass}>
                <div className="unit-period-heading">Unit 1 - Period 1</div>
                <div className="unit-name-heading">My Class</div>
                <div className="focus-heading">Unit Opener <br />+ Vocabulary</div>   
                {/* <button style={{position:"absolute", right:"100px"}} onClick={nextStage}>Next --`{'>'}`</button> */}
            </div>
                <CustomButton buttonText="next" onClick={nextStage} left='1000' top='630'/>

        </div>
    )
}
