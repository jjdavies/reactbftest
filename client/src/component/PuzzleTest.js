import React, { useEffect, useState, useCallback } from 'react'


const Piece = React.memo((props) =>{
    console.log('randomise')
    
    const [startX, setStartX] = useState(200 + Math.random() * 200);
    // const startX = 200 + Math.random() * 200;
    const [endX, setEndX] = useState(0);

    useEffect(()=>{
        if (props.resolve){
            setStartX(0);
        }
    }, [props])

    const basicStyle={
        position:'absolute',
        width:'100px',
        height:'50px',
        background:'red',
        transition:'all 1s ease-out',
        left:startX
    }

    
    const childClick = () =>{
        props.changePrompt();
    }
    

    return(
        <div style={{...basicStyle}} onClick={childClick}>{startX}</div>
    )
})

export default function PuzzleTest() {
    console.log('initialtest')
    const [prompt, setPrompt] = useState(false)

    const changePromptCallback = useCallback(()=>{
        setPrompt(true);
    }, [])
    
    useEffect(()=>{
        setTimeout(()=>{
            changePromptCallback();
        }, 2000)
    }, [])
    


    return (
        <div>
            <Piece resolve={prompt} changePrompt={changePromptCallback} />
        </div>
    )
}
