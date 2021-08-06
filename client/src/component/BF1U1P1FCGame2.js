import React from 'react'
import Flashcard from '../component/Flashcard'
import table from '../img/table.png'
import chair from '../img/chair.png'
import shelf from '../img/shelf.png'
import crayon from '../img/crayon.png'
import BF1logo from '../img/bf1-logo.png'
import CustomButton from '../component/CustomButton'

export default function BF1U1P1FCGame1(props) {

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
                        Play the beanbag – flashcards game.

                            <br />
                           
                        </div>
                        <div className="tip">
                            
                        What is this? It is a …

                            <br />
                            
                        </div>
                        
                        
                    </div>
                    
                </div>
                <div className="right-content-pane">
                    <div style={{position:'absolute', left:'50px', top:'50px', transform:'rotate(-4deg) scale(0.9)'}}>
                        <Flashcard label="It is a table." emphasis="table" src={table} />
                    </div>
                    <div style={{position:'absolute', left:'380px', top:'50px', transform:'rotate(4deg) scale(0.9)'}}>
                        <Flashcard label="It is a chair." emphasis="chair" src={chair} />
                    </div>
                    <div style={{position:'absolute', left:'380px', top:'350px', transform:'rotate(-4deg) scale(0.9)'}}>
                        <Flashcard label="It is a shelf." emphasis="shelf" src={shelf} />
                    </div>
                    <div style={{position:'absolute', left:'50px', top:'350px', transform:'rotate(4deg) scale(0.9)'}}>
                        <Flashcard label="It is a crayon." emphasis="crayon" src={crayon} />
                    </div>
                </div>
                
                <CustomButton buttonText="next" onClick={nextStage} left='1000' top='630'/>
            </div>
        </div>
    )
}
