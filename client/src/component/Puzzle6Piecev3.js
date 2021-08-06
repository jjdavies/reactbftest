import React, { useState, useEffect } from 'react'


const Piece = (props) =>{


    const [pieceClass, setPieceClass] = useState('pieceSpread')

    const [randoms, setRandoms] = useState({
        ranX:-200 + (Math.random()*400),
        ranY:-50 + (Math.random()*100),
        scale:.5 + (Math.random()*.6),
        rotZ:-45 + (Math.random()*90),
        
    })
    

    const basicStyle ={
        // boxShadow:'0px 0px 30px rgba(235,239,34, 0.8)',
        justifySelf:props.justifySelf,
        transition:'all 5s ease-out',
        transform:`translate(${randoms.ranX}px, ${randoms.ranY}px) scale(${randoms.scale}) rotate(${randoms.rotZ}deg)`
    }

    useEffect(()=>{
        if(props.resolve){
            setRandoms({
                ranX:props.offsetX,
                ranY:props.offsetY,
                scale:1,
                rotZ:0,
            })
            
        }
    }, [props])
    

    return(
        <img src={props.src} style={{...basicStyle}} />
        // <>{basicStyle.transform}<br></br></>
    )
}

export default function Puzzle6Piecev3(props) {

    const pieces = props.pieces

    const [prompt, setPrompt] = useState(false);

    useEffect(()=>{
        if (props.reveal){
            setPrompt(true);
        }
            
    }, [props])

    return (
        <div className="puzzleGrid" style={{display:'grid', gridTemplateColumns:props.cols === "2" ? 'auto auto' : 'auto fit-content(100px) auto', top:`${props.top}px`}}>
            {pieces.map((piece, index)=>(
                <Piece src={piece.src} justifySelf={piece.justify} offsetX={piece.offsetX} offsetY={piece.offsetY} resolve={prompt} key={index} />
            ))}
        </div>
    )
}
