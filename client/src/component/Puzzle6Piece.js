import React, { useEffect, useState } from 'react'

export default function Puzzle6Piece(props) {

    const pieces = props.pieces
    var [piecesRan, setPiecesRan] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [resolve, setResolve] = useState(false)

    useEffect(()=>{
        setPiecesRan(shuffle(pieces));
        console.log(piecesRan)
        setLoaded(true);

        setTimeout(()=>{
            setResolve(true)
        }, 2000)
    }, [props])

    const shuffle = (arr) =>{
        var arr = [...arr];
        var len = arr.length;
        var ranInd, tempVal
        while (len > 0){
            ranInd = Math.floor(Math.random()*len);
            len -= 1;

            tempVal = arr[len];
            arr[len] = arr[ranInd];
            arr[ranInd] = tempVal;
        }

        return arr;
    }

    return (
        <>
            {loaded &&
                // <div style={{display:'grid', gridTemplateColumns:props.cols === "2" ? 'auto auto' : 'auto auto auto'}}>
                <div className="puzzleGrid" style={{display:'grid', gridTemplateColumns:props.cols === "2" ? 'auto auto' : 'auto fit-content(100px) auto', top:`${props.top}px`}}>
                    <>
                        {resolve
                        ?<>
                        {pieces.map((piece, index)=>(
                            <img className="puzzlePiece" src={piece.src} key={index} style={{justifySelf:`${piece.justify}`, transform:`translate(${piece.offsetX},${piece.offsetY})`}} />
                        ))}
                        </>
                        :<>
                        {piecesRan.map((piece, index)=>(
                            <img className="puzzlePiece" src={piece.src} key={index} style={{justifySelf:((index % 3) !== 1) ? 'end': '', transform:`translate(${piece.offsetX},${piece.offsetY})`}} />
                        ))}
                        </>
                    }
                    </>
                    
                </div>
            }
        </>
        
    )
}
