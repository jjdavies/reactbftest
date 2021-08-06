import React from 'react'
import BF1_hello_song from '../media/NBF1-SB-U1-Video-1.mp4'
import BF1Logo from '../img/bf1-logo.png'
import CustomButton from '../component/CustomButton'


export default function Video(props) {
    const nextStage = () =>{
        props.userNavigated(3, 0);
        // setAntExit(true)
        // setIntroClass("intro flyRight");
    }
    return (
        <div>
            <div className="split-content">
                <div className="left-tips-pane">
                    <img style={{maxWidth:'300px', margin:'auto'}} src={BF1Logo} />
                    <div className="tips">
                        <div className="tip">
                            Watch the Hello Song video.
                        </div>
                    </div>
                    
                </div>
                <div className="right-content-pane" >
                    <video className="large-video-player" controls="controls" src={BF1_hello_song} />
                    <div style={{position:'relative'}}>
                    </div>
                </div>
                    <CustomButton buttonText="next" onClick={nextStage} left='1000' top='630'/>
            </div>
            
        </div>
    )
}
