import React, { useState } from 'react'
import uifx from 'uifx'

import BF1logo from '../img/bf1-logo.png'

import tablepiece1 from '../img/puzzle/table/1.png'
import tablepiece2 from '../img/puzzle/table/2.png'
import tablepiece3 from '../img/puzzle/table/3.png'
import tablepiece4 from '../img/puzzle/table/4.png'
import tablepiece5 from '../img/puzzle/table/5.png'
import tablepiece6 from '../img/puzzle/table/6.png'

import Puzzle6Piece from '../component/Puzzle6Piecev3'
import CustomButton from '../component/CustomButton'
import BusyAnt from '../component/BusyAnt'
import drumrollMP3 from '../media/drumroll.mp3'
import itsachairBAMP3 from '../media/itsachairBA.mp3'
import itsatableBAMP3 from '../media/itsatableBA.mp3'
import itsashelfBAMP3 from '../media/itsashelfBA.mp3'

export default function BF1U1P1Puzzle3(props) {

    const [subStage, setSubStage] = useState(0);
    const [busyAntEnter, setBusyAntEnter] = useState(false);
    const [solvePuzzle, setSolvePuzzle] = useState(false);

    const drumroll = new uifx(drumrollMP3, {volume:0.2});
    const itsatable = new uifx(itsatableBAMP3, {volume:0.5});

    const thisStage = props.thisStage;
    const pieces = [
        {
            src:tablepiece1,
            offsetX:'77',
            offsetY:0,
            justify:'end'
        },
        {
            src:tablepiece2,
            offsetX:0,
            offsetY:0,
            justify:'center'
        },
        {
            src:tablepiece3,
            offsetX:'-77',
            offsetY:0,
            justify:'start'
        },
        {
            src:tablepiece4,
            offsetX:'158',
            offsetY:'-82',
            justify:'end'
        },
        {
            src:tablepiece5,
            offsetX:'76',
            offsetY:'-82',
            justify:'center'
        },
        {
            src:tablepiece6,
            offsetX:'-8',
            offsetY:'-150',
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
                        itsatable.play();
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
                    <Puzzle6Piece pieces={pieces} rows="2" cols="3" top="60" reveal={solvePuzzle} />
                </div>
                <CustomButton buttonText={subStage === 0 ? "show" : "next"} onClick={nextStage} left='1000' top='630'/>
            </div>
            {busyAntEnter === true &&
                <BusyAnt stage="enterTalkPoint" />
            }
        </div>
    )
}
