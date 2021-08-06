import React, { useState } from 'react'

import BF1logo from '../img/bf1-logo.png'

import chairpiece1 from '../img/puzzle/chair/1.png'
import chairpiece2 from '../img/puzzle/chair/2.png'
import chairpiece3 from '../img/puzzle/chair/3.png'
import chairpiece4 from '../img/puzzle/chair/4.png'
import chairpiece5 from '../img/puzzle/chair/5.png'
import chairpiece6 from '../img/puzzle/chair/6.png'

import PuzzleTest from '../component/PuzzleTest'
import Puzzle6Piece from '../component/Puzzle6Piecev3'
import CustomButton from '../component/CustomButton'

import BusyAnt from '../component/BusyAnt'

import uifx from 'uifx'

import drumrollMP3 from '../media/drumroll.mp3'
import itsachairBAMP3 from '../media/itsachairBA.mp3'
import itsatableBAMP3 from '../media/itsatableBA.mp3'
import itsashelfBAMP3 from '../media/itsashelfBA.mp3'


export default function BF1U1P1Puzzle1(props) {
    
    const thisStage = props.thisStage;

    const [subStage, setSubStage] = useState(0);
    const [busyAntEnter, setBusyAntEnter] = useState(false);
    const [solvePuzzle, setSolvePuzzle] = useState(false);

    const drumroll = new uifx(drumrollMP3, {volume:0.2});
    const itsachair = new uifx(itsachairBAMP3, {volume:0.5});
    const itsatable = new uifx(itsatableBAMP3, {volume:0.5});
    
    const pieces = [
        {
            src:chairpiece1,
            offsetX:0,
            offsetY:0,
            justify:'end'
        },
        {
            src:chairpiece2,
            offsetX:'-70',
            offsetY:0,
            justify:'start'
        },
        {
            src:chairpiece3,
            offsetX:0,
            offsetY:'-70',
            justify:'end'
        },
        {
            src:chairpiece4,
            offsetX:'-2',
            offsetY:'-154',
            justify:'start'
        },
        {
            src:chairpiece5,
            offsetX:'81',
            offsetY:'-155',
            justify:'end'
        },
        {
            src:chairpiece6,
            offsetX:'-2',
            offsetY:'-238',
            justify:'start'
        }]

        const nextStage = () =>{
            if (subStage > 0){
                var targetStage= +thisStage + 1;
                console.log('tagret', targetStage)
                props.userNavigated(targetStage, 0);
            } else{
                setSolvePuzzle(true);
                setSubStage(1);
                drumroll.play();
                setTimeout(()=>{
                    setBusyAntEnter(true);
                    setTimeout(()=>{
                        itsachair.play();
                    }, 1000)
                }, 4000)
            }
            
        }
        
    return (
        <div>
            <div className="split-content">
                <div className="left-tips-pane">
                    <img style={{maxWidth:'300px', margin:'auto'}} src={BF1logo} />
                    <div className="tips">
                        <div className="tip">
                            Guess the puzzle picture before it is completed.
                        </div>
                        <div className="tip">
                            What is it?
                        </div>
                    </div>
                </div>
                <div className="right-content-pane">
                    <Puzzle6Piece pieces={pieces} rows="3" cols="2" top="3" reveal={solvePuzzle} />
                    {/* <PuzzleTest /> */}
                </div>
                <CustomButton buttonText={subStage === 0 ? "show" : "next"} onClick={nextStage} left='1000' top='630'/>
            </div>
            {busyAntEnter === true &&
                <BusyAnt stage="enterTalkPoint" />
            }
        </div>
    )
}
