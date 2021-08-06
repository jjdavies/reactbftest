import React from 'react'
import Flashcard from '../component/Flashcard'
import table from '../img/table.png'
import chair from '../img/chair.png'
import BF1logo from '../img/bf1-logo.png'
import CustomButton from '../component/CustomButton'

export default function BF1U1P1FCGame2(props) {

    const thisStage = props.thisStage;

    
    const nextStage = () =>{
        var targetStage= +thisStage + 1;
        console.log('tagret', targetStage)
        props.userNavigated(targetStage, 1000);
    }
    return (
        <div>
            <div className="split-content">
                <div className="left-tips-pane">
                    <img style={{maxWidth:'300px', margin:'auto'}} src={BF1logo} />
                    <div className="tips">
                        <div className="tip">
                            Use the flashcards.
                            <br />
                           
                        </div>
                        <div className="tip">
                            
                            What is it?
                            <br />
                            
                        </div>
                        <div className="tip">
                            It is a table.
                            <br />
                            It is a chair.
                            <br />
                        </div>
                        <div className="tip">
                            Take a break!
                        </div>
                        
                    </div>
                    
                </div>
                <div className="right-content-pane">
                    <div style={{position:'absolute', left:'50px', top:'50px', transform:'rotate(-4deg)'}}>
                        <Flashcard label="It is a table." emphasis="table" src={table} />
                    </div>
                    <div style={{position:'absolute', left:'350px', top:'50px', transform:'rotate(4deg)'}}>
                        <Flashcard label="It is a chair." emphasis="chair" src={chair} />
                    </div>
                </div>
                
                <CustomButton buttonText="next" onClick={nextStage} left='1000' top='630'/>
            </div>
        </div>
    )
}
