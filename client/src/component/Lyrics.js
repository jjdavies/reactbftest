import React, { useState, useEffect, memo } from 'react'
import { Transition } from 'react-transition-group'
import UIfx from 'uifx'
import useSound from 'use-sound'
import chant from '../media/NBF1-SB-U1-A7.mp3'
import { motion } from 'framer-motion'

import table from '../img/table.png'
import chair from '../img/chair.png'
import puppet from '../img/puppet.png'
import shelf from '../img/shelf.png'
import paper from '../img/paper.png'
import crayon from '../img/crayon.png'

const Lyrics = React.memo((props) =>{

    const [currentLine, setCurrentLine] = useState(0);
    const [currentWord, setCurrentWord] = useState(-1);
    const [spacings, setSpacings] = useState([])
    const [ball, setBall] = useState(false);
    const [isPlaying, setIsPlaying]= useState(false);
    

    const punctChars = ['.', ',', '!', '?']
    const lyrics = props.lyrics

    const song = new UIfx(chant)

    const [play, { stop }] = useSound(chant)

    

    // var spacings=[];
    // console.log('outside')
    useEffect(()=>{
        setSpacings(lyrics.map((lyric)=>{
                //line
                let words = lyric.line.split(' ');
                let syllables = lyric.syllables;
                let charCount = 0;
                let wordSizes = words.map((word, index) =>{
                    
                    //word
                    
                    charCount = charCount + word.length;
                    if (punctChars.indexOf(word.substr(-1, 1)) !== -1){
                        // console.log(word.substr(-1, 1));
                        // charCount -= 1;
                    }
                    if (syllables[index] === 2){
                        console.log('2: ', word)
                    }
                    console.log(word.length)
                    return word.length
                    });
                    //line
                    let spaceAcc = 0;
                    let wordSpaces = wordSizes.map((wordSpc, index)=>{
                        let newRange = ((wordSpc / charCount)*100);
                        let fullRange = spaceAcc + newRange;
                        let centerRange = spaceAcc + (newRange/2);
                        spaceAcc = fullRange
                        return Math.floor(centerRange)
                    })
                    // console.log(wordSpaces)
                    return wordSpaces;
                }))
    }, [])

    useEffect(()=>{
        if (props.stop){
            console.log('stop')
            setIsPlaying(false)
            stop();
        }
    }, [props])

    


    const lyricsStyle={
        
        fontSize:'60px',
        fontFamily:'KG Red Hands'
    }

    const Word = React.memo((props) =>{

        const wordStyle={
            ...lyricsStyle,
            color:props.index === currentWord ? 'red' : 'black'
        }

        return(
            <span style={wordStyle}>{props.word}&nbsp;</span>
        )
    })

    const Ball = React.memo((props) =>{

        useEffect((props)=>{
            
        }, [props])

        // const [ballClass, setBallClass] = useState("ball")
        // const [ballIn, setBallIn] = useState(true);
        // const [currentLine, setCurrentLine] = useState(props.currentLine);
        // const [currentWord, setCurrentWord] = useState(props.currentWord);

        // const currentLine = props.currentLine;
        // const currentWord = props.currentWord;

        const baseStyle={background:'green', transition:'left 500ms ease-in-out'}
        const oldLeft = currentWord-1 < 0 ? '-20%' : `${spacings[currentLine][currentWord-1]}%`;
        const left = currentWord === -1 ? '-20%' : `${spacings[currentLine][currentWord]}%`;
        const opacityFrom = currentWord === -1 ? 0 : 1;
        const opacityTo = currentWord === -1 ? 0 : 1;
        // console.log(oldLeft, left)
        const transform = props.currentWord === -1 ? 'scale(0)' : 'scale(1)';

        // const newPositionStyle = {
        //     entering:{left:oldLeft, top:'111px'},
        //     entered:{left:oldLeft, top:'111px'},
        //     exiting:{left},
        //     exited:{left},
        // };

        // const variants = {
        //     vl0wn1{
                
        //     }
        // }

        return(
            // <>
            // {console.log('new render')}
            // <Transition in={ballIn} timeout={500}>
            //     {state => (
            //         <div className={ballClass} style={{...baseStyle, ...newPositionStyle[state]}}></div>
            //     )}
            // </Transition>
            // </>


            <motion.div animate={{ opacity:[opacityFrom, opacityTo], x:[oldLeft, currentWord === -1 ? '-20%' : `${spacings[currentLine][currentWord]}%`], y:[null, -40, 0] }} initial={true} transition={{duration:.25, times:[0, .5, 1]}}>
                <div className="ball"></div>
            </motion.div>
        )
    })

    const click = () =>{
        // setCurrentWord(currentWord+1)
        // setBall(true)
    }

    const RedBox = () =>{

        
        const [ballAnimStages, setBallAnimStages] = useState([])
        const startTime = new Date();
        

        const redClick = () =>{
            if (!isPlaying){
                // song.play()
                play();
                setIsPlaying(true)
                console.log(startTime.getTime())
            } 
            
            let endTime = new Date();
            let elapsed = (endTime.getTime() - startTime.getTime()) + (ballAnimStages[ballAnimStages.length-1] || 0)
            setBallAnimStages([...ballAnimStages, elapsed])
            console.log(ballAnimStages)
            
        }

        return (
            <div style={{position:'absolute', width:'200px', height:'200px', background:'red'}} onClick={redClick}></div>
        )
    }
    const PlaySong = () =>{

        
        // const [ballAnimStages, setBallAnimStages] = useState([])
        // const [currentAction, setCurrentAction] = useState(0)
        // const [cummTime, setCummTime] = useState(0)
        const startTime = new Date();
        const timeStages = [7951, 8460, 8986, 10023, 10600, 11101, 11638, 12815, 13106, 13317, 13576, 13959, 14614, 14793, 15125, 15328, 15637, 16948, 17447, 17960, 18433, 19521, 19978, 20428, 20906, 22031, 22357, 22588, 23308, 23883, 24050, 24406, 24609, 26156, 26671, 27203, 27522, 27735, 27966, 28741, 29210, 29579, 29797, 30080, 30395, 30855, 31336, 31783, 32708, 33230, 33821, 34336, 35446, 35787, 35980, 36271, 36783, 37338, 37510, 37827, 38026, 38337, 39603, 40131, 44146, 44687, 45111, 46207, 46675, 47250, 47773, 48873, 49196, 49396, 50417, 50808, 50959, 51274, 51451, 52902, 53529, 54072, 54494, 55554, 56055, 56527, 57041, 58172, 58486, 58693, 58950, 59560, 60072, 60247, 60562, 60749, 61084, 62191, 62918, 63339, 63822, 64046, 64305, 65046, 65561, 65904, 66108, 66373, 66648, 67129, 67592, 68099, 69162, 69708, 70145, 70622, 71747, 72236, 72463, 73052, 73539, 73718, 74279, 74579];

        const timesAndActions = [
            {timeout:timeStages[0], setLineValue:0, setWordValue:0},
            {timeout:timeStages[1], setLineValue:0, setWordValue:1},
            {timeout:timeStages[2], setLineValue:0, setWordValue:2},
            {timeout:timeStages[3], setLineValue:0, setWordValue:0},
            {timeout:timeStages[4], setLineValue:0, setWordValue:1},
            {timeout:timeStages[5], setLineValue:0, setWordValue:2},
            {timeout:timeStages[6], setLineValue:1, setWordValue:-1},
            {timeout:timeStages[7], setLineValue:1, setWordValue:0},
            {timeout:timeStages[8], setLineValue:1, setWordValue:1},
            {timeout:timeStages[9], setLineValue:1, setWordValue:2},
            // {timeout:timeStages[10], setLineValue:1, setWordValue:3},
            // {timeout:timeStages[10], setLineValue:1, setWordValue:4},
            {timeout:timeStages[11], setLineValue:2, setWordValue:0},
            {timeout:timeStages[12], setLineValue:2, setWordValue:1},
            {timeout:timeStages[13], setLineValue:2, setWordValue:2},
            {timeout:timeStages[14], setLineValue:2, setWordValue:3},
            // {timeout:timeStages[15], setLineValue:2, setWordValue:4},
            // {timeout:timeStages[16], setLineValue:2, setWordValue:5},
            {timeout:timeStages[17], setLineValue:3, setWordValue:0},
            {timeout:timeStages[18], setLineValue:3, setWordValue:1},
            {timeout:timeStages[19], setLineValue:3, setWordValue:2},
            {timeout:timeStages[21], setLineValue:3, setWordValue:0},
            {timeout:timeStages[22], setLineValue:3, setWordValue:1},
            {timeout:timeStages[23], setLineValue:3, setWordValue:2},
            {timeout:timeStages[24], setLineValue:4, setWordValue:-1},
            {timeout:timeStages[25], setLineValue:4, setWordValue:0},
            {timeout:timeStages[26], setLineValue:4, setWordValue:1},
            {timeout:timeStages[27], setLineValue:4, setWordValue:2},
            {timeout:timeStages[28], setLineValue:5, setWordValue:-1},
            {timeout:timeStages[29], setLineValue:5, setWordValue:0},
            {timeout:timeStages[30], setLineValue:5, setWordValue:1},
            {timeout:timeStages[31], setLineValue:5, setWordValue:2},
            {timeout:timeStages[32], setLineValue:5, setWordValue:3},
            {timeout:timeStages[33], setLineValue:6, setWordValue:-1},
            {timeout:timeStages[34], setLineValue:6, setWordValue:0},
            {timeout:timeStages[35], setLineValue:6, setWordValue:1},
            {timeout:timeStages[36], setLineValue:6, setWordValue:2},
            {timeout:timeStages[37], setLineValue:6, setWordValue:3},
            // {timeout:timeStages[38], setLineValue:6, setWordValue:4},
            {timeout:timeStages[39], setLineValue:6, setWordValue:0},
            {timeout:timeStages[40], setLineValue:6, setWordValue:1},
            {timeout:timeStages[41], setLineValue:6, setWordValue:2},
            {timeout:timeStages[42], setLineValue:6, setWordValue:3},
            // {timeout:timeStages[43], setLineValue:6, setWordValue:4},
            {timeout:timeStages[44], setLineValue:7, setWordValue:-1},
            {timeout:timeStages[45], setLineValue:7, setWordValue:0},
            {timeout:timeStages[46], setLineValue:7, setWordValue:1},
            {timeout:timeStages[47], setLineValue:7, setWordValue:2},
            {timeout:timeStages[48], setLineValue:7, setWordValue:0},
            {timeout:timeStages[49], setLineValue:7, setWordValue:1},
            {timeout:timeStages[50], setLineValue:7, setWordValue:2},
            {timeout:timeStages[51], setLineValue:8, setWordValue:-1},
            {timeout:timeStages[52], setLineValue:8, setWordValue:0},
            {timeout:timeStages[53], setLineValue:8, setWordValue:1},
            {timeout:timeStages[54], setLineValue:8, setWordValue:2},
            // {timeout:timeStages[55], setLineValue:8, setWordValue:3},
            {timeout:timeStages[56], setLineValue:9, setWordValue:-1},
            {timeout:timeStages[57], setLineValue:9, setWordValue:0},
            {timeout:timeStages[58], setLineValue:9, setWordValue:1},
            {timeout:timeStages[59], setLineValue:9, setWordValue:2},
            {timeout:timeStages[60], setLineValue:9, setWordValue:3},
            // {timeout:timeStages[61], setLineValue:9, setWordValue:4},
            {timeout:timeStages[63], setLineValue:10, setWordValue:-1},
            {timeout:timeStages[64], setLineValue:10, setWordValue:0},
            {timeout:timeStages[65], setLineValue:10, setWordValue:1},
            {timeout:timeStages[66], setLineValue:10, setWordValue:2},
            {timeout:timeStages[67], setLineValue:10, setWordValue:0},
            {timeout:timeStages[68], setLineValue:10, setWordValue:1},
            {timeout:timeStages[69], setLineValue:10, setWordValue:2},
            {timeout:timeStages[70], setLineValue:11, setWordValue:-1},
            {timeout:timeStages[71], setLineValue:11, setWordValue:0},
            {timeout:timeStages[72], setLineValue:11, setWordValue:1},
            {timeout:timeStages[73], setLineValue:11, setWordValue:2},
            {timeout:timeStages[74], setLineValue:12, setWordValue:-1},
            {timeout:timeStages[75], setLineValue:12, setWordValue:0},
            {timeout:timeStages[76], setLineValue:12, setWordValue:1},
            {timeout:timeStages[77], setLineValue:12, setWordValue:2},
            {timeout:timeStages[78], setLineValue:12, setWordValue:3},
            {timeout:timeStages[79], setLineValue:13, setWordValue:-1},
            {timeout:timeStages[80], setLineValue:13, setWordValue:0},
            {timeout:timeStages[81], setLineValue:13, setWordValue:1},
            {timeout:timeStages[82], setLineValue:13, setWordValue:2},
            {timeout:timeStages[83], setLineValue:13, setWordValue:0},
            {timeout:timeStages[84], setLineValue:13, setWordValue:1},
            {timeout:timeStages[85], setLineValue:13, setWordValue:2},
            {timeout:timeStages[86], setLineValue:14, setWordValue:-1},
            {timeout:timeStages[87], setLineValue:14, setWordValue:0},
            {timeout:timeStages[88], setLineValue:14, setWordValue:1},
            {timeout:timeStages[89], setLineValue:14, setWordValue:2},
            // {timeout:timeStages[90], setLineValue:14, setWordValue:3},
            {timeout:timeStages[91], setLineValue:15, setWordValue:-1},
            {timeout:timeStages[92], setLineValue:15, setWordValue:0},
            {timeout:timeStages[93], setLineValue:15, setWordValue:1},
            {timeout:timeStages[94], setLineValue:15, setWordValue:2},
            {timeout:timeStages[95], setLineValue:15, setWordValue:3},
            // {timeout:timeStages[96], setLineValue:15, setWordValue:4},
            {timeout:timeStages[97], setLineValue:16, setWordValue:-1},
            {timeout:timeStages[98], setLineValue:16, setWordValue:0},
            {timeout:timeStages[99], setLineValue:16, setWordValue:1},
            {timeout:timeStages[100], setLineValue:16, setWordValue:2},
            {timeout:timeStages[101], setLineValue:16, setWordValue:3},
            // {timeout:timeStages[102], setLineValue:16, setWordValue:4},
            {timeout:timeStages[103], setLineValue:16, setWordValue:0},
            {timeout:timeStages[104], setLineValue:16, setWordValue:1},
            {timeout:timeStages[105], setLineValue:16, setWordValue:2},
            {timeout:timeStages[106], setLineValue:16, setWordValue:3},
            // {timeout:timeStages[107], setLineValue:16, setWordValue:4},
            {timeout:timeStages[108], setLineValue:17, setWordValue:-1},
            {timeout:timeStages[109], setLineValue:17, setWordValue:0},
            {timeout:timeStages[110], setLineValue:17, setWordValue:1},
            {timeout:timeStages[111], setLineValue:17, setWordValue:2},
            {timeout:timeStages[112], setLineValue:17, setWordValue:0},
            {timeout:timeStages[113], setLineValue:17, setWordValue:1},
            {timeout:timeStages[114], setLineValue:17, setWordValue:2},
            {timeout:timeStages[115], setLineValue:18, setWordValue:-1},
            {timeout:timeStages[116], setLineValue:18, setWordValue:0},
            {timeout:timeStages[117], setLineValue:18, setWordValue:1},
            // {timeout:timeStages[118], setLineValue:18, setWordValue:2},
            {timeout:timeStages[119], setLineValue:19, setWordValue:-1},
            {timeout:timeStages[120], setLineValue:19, setWordValue:0},
            {timeout:timeStages[121], setLineValue:19, setWordValue:1},
            {timeout:timeStages[122], setLineValue:19, setWordValue:2},
            // {timeout:timeStages[123], setLineValue:19, setWordValue:3},
            
        ]


        const blueClick = () =>{
            if (!isPlaying){
                play();
                setIsPlaying(true);
                // console.log(startTime.getTime());
                // setBallClass("ball line1-1of3")
                
                // timesAndActions.map((timeout)=>{
                //     console.log(timeout.setLineValue, timeout.setWordValue)
                //     const time = timeout.timeout;
                //     console.log(time)
                //     const line = timeout.setLineValue;
                //     const word = timeout.setWordValue;
                //     setTimeout(()=>{
                //         if (currentLine !== line){
                //             setCurrentLine(line)
                //         }
                //         if (currentWord !== word){
                //             setCurrentWord(word)
                //         }
                //     }, 50)
                // })
                let cummTime = 0
                let currentAction = 0
                setInterval(()=>{
                    if (timesAndActions.length > (currentAction)){
                        const action = timesAndActions[currentAction]
                        if (action.timeout < cummTime){
                            setCurrentLine(action.setLineValue)
                            setCurrentWord(action.setWordValue)
                            // setCurrentAction(currentAction + 1)
                            currentAction +=1
                        }
                        // setCummTime(cummTime + 50);
                        cummTime += 50;
                    }
                    
                },50)
                // setTimeout(()=>{
                //     // setBallClass("ball line1-2of3")
                //     setCurrentWord(2)
                //     console.log('to3')
                // }, 8660)
                // setTimeout(()=>{
                //     // setBallClass("ball line1-2of3")
                //     setCurrentWord(1)
                //     console.log('to2')
                // }, 8160)
                // setTimeout(()=>{
                //     // setBallClass("ball line1-2of3")
                //     setCurrentWord(0)
                //     console.log('to1')
                // }, 7910)
            } 
            //[7910, 548, 501, 673, 580, 517]
            let endTime = new Date();
            let elapsed = endTime.getTime() - startTime.getTime();
            // setBallAnimStages([...ballAnimStages, elapsed]);
            // console.log(ballAnimStages);
            
        }

        return (
            <div className="playButton-sm" style={{left:'-150px'}} onClick={blueClick}></div>
        )
    }

    const Image = () =>{

        const containerStyle ={
            position:'relative',
            top:'150px',
            height:'200px',
            textAlign:'center',
        }

        

        const imageStyle ={
            margin:'auto',
            height:'200px',
        }

        return(
            <div style={{...containerStyle}}>
                {currentLine < 3
                    ?<img style={{...imageStyle}} src={table} />
                    :<>
                        {currentLine < 6
                            ?<img style={{...imageStyle}} src={chair} />
                            :<>
                                {currentLine < 10
                                ?<img style={{...imageStyle}} src={puppet} />
                                :<>
                                    {currentLine < 13
                                    ?<img style={{...imageStyle}} src={shelf} />
                                    :<>
                                        {currentLine < 16
                                        ?<img style={{...imageStyle}} src={crayon} />
                                        :<img style={{...imageStyle}} src={paper} />
                                        }
                                    </>
                                    }
                                </>                         
                                }
                            </>
                        }
                    </>
                }
                
            </div>
        )
    }

    return (
        <div onClick={click}>
            
                <Image />
                <div className="lineContainer">
                    {spacings.length > 0 &&
                        // {console.log(spacings)}
                        <Ball />
                    }
                        
                    <PlaySong />
                    {lyrics[currentLine].line.split(' ').map((word, index)=>(
                        <Word word={word} index ={index} key={index} />
                    ))}
                </div>
            {/* <RedBox /> */}
        </div>
    )
})

export default Lyrics
