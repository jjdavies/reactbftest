import React, { useEffect, useState, memo } from 'react'
import { motion } from 'framer-motion'

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
        }, 3000)
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

    const Piece = React.memo((props) =>{

        const blockRef = Math.floor(Math.random()*10)

        const blockRef2 = React.useRef(Math.random()*10)

        const src = props.src;
        const offsetX = props.offsetX;
        const offsetY = props.offsetY;
        const justify = props.justify;
        

        const scale = React.useRef(.5 + (Math.random() * 1.2))
        const ranX = React.useRef(-100 + (Math.random()*200))
        const ranY = React.useRef(200 + (Math.random()*40))
        const rotZ = React.useRef(-45 + (Math.random() * 90))

        const imageStyle = {
            transform:`translate(${ranX.current}px,${-ranY.current}px) rotateZ(${rotZ.current}deg) scale(${scale.current})`,
            justifySelf:`${justify}`,
            transition:'all 5s ease-out 5s'
        }


        useEffect(()=>{
            console.log('resolve', resolve);
            if (resolve){
                // setImageStyle({
                //     transform:`translate(${offsetX},${offsetY})`,
                //     justifySelf:`${justify}`,
                //     transition:'all 5s ease-out'
                // })
            } else{
                console.log('randoming')
                // ranX = -100 + (Math.random()*200);
                // ranY = -20 + (Math.random()*40);
                // rotZ = -45 + (Math.random() * 90);
                // scale = .5 + (Math.random() * 1.2);
                // console.log(ranX, ranY, rotZ, scale)
            }
        }, [resolve])

        
        

        // const [imageStyle, setImageStyle] = useState({
        //     transform:`translate(${ranX.current}px,${-ranY.current}px) rotateZ(${rotZ.current}deg) scale(${scale.current})`,
        //     justifySelf:`${justify}`,
        //     transition:'all 5s ease-out 5s'
        // })

        // if(!resolve){
            // style={
            //     transform: `translate(${-200 + (Math.random() * 400)}px,${-200 + (Math.random() * 400)}px)`,
            //     justifySelf:`${justify}`,
            //     transition:'all 5s ease-out 5s'
            // }
        // } else {
            
        // }

        const oldLeft = '-20%'
        const newLeft = resolve ? 0 : -20;
        let ran= -200 + (Math.random()*400)
        let rotation = 0;
        

        return(
            <div>
            {/* // <motion.div  animate={{x:[ran , 0]}} initial={true} transition={{duration:3}}> */}
            {/* //     <div><img style={{...style}} className="puzzlePiece" src={src} /></div> */}
            {/* // </motion.div> */}
            {/* // <div style={{transform:`rotate(${rotation})`}}> */}
            {blockRef2.current}
            <img style={{...imageStyle}} className="puzzlePiece" src={src} />
             </div>
            // </div>
        )
    })

    return (
        <>
            {loaded &&
                // <div style={{display:'grid', gridTemplateColumns:props.cols === "2" ? 'auto auto' : 'auto auto auto'}}>
                <div className="puzzleGrid" style={{display:'grid', gridTemplateColumns:props.cols === "2" ? 'auto auto' : 'auto fit-content(100px) auto', top:`${props.top}px`}}>
                    {pieces.map((piece, index)=>(
                        <Piece src={piece.src} offsetX={piece.offsetX} offsetY={piece.offsetY} justify={piece.justify} key={index} />
                    ))}
                </div>
            }
        </>
        
    )
}
