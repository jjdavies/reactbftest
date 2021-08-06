import React, { useState, useEffect, useRef, memo } from 'react'
import uifx from 'uifx'

import BF1logo from '../img/bf1-logo.png'
import bf1sbp2clear from '../img/pg2.png'
import arrow from '../img/arrow.png'
import puppet from '../img/puppet.png'
import chair from '../img/chair.png'
import table from '../img/table.png'
import { itemTypes } from '../utils/items'
import { DragPreviewImage, useDrag, useDrop } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { CustomDragLayer } from './CustomDragLayer'

import stretchMP3 from '../media/stretch.mp3'



import CustomButton from './CustomButton'
import { findDOMNode } from 'react-dom'

export default function BF1U1P1Match1(props) {

    const thisStage = props.thisStage;

    const stretch = new uifx(stretchMP3)

    const [blanks, setBlanks] = useState([true, true, true]);
    const [teacherExit, setTeacherExit] = useState(false);

    const [lineDetailsA, setLineDetailsA] = useState({startX:0, startY:0, endX:0, endY:0})

    

    useEffect(()=>{
        
    }, [])

    const nextStage = () =>{
        var targetStage= +thisStage + 1;
        props.userNavigated(targetStage, 0);
        setTeacherExit(true);
    }

    const blankClicked = (i) =>{
        if (i === 0){
            setBlanks([false, blanks[1], blanks[2]]);
        } else if (i === 1){
            setBlanks([blanks[0], false, blanks[2]]);
        } else if (i === 2){
            setBlanks([blanks[0], blanks[1], false]);
        }
    }

    const canvasRefA = useRef(null);
    const canvasRefB = useRef(null);
    const canvasRefC = useRef(null);

    const LineCanvas = (props) =>{
        const reference = props.reference;
        return(
            <canvas ref={reference} width="1280" height="720" style={{position:'absolute', left:0, top:0, pointerEvents:'none', zIndex:5}} />
        )
    }

    const ItemDrag = memo(function ItemDrag(props){
        
        const { id, left, top, canvasRef } = props;
        const leftX = +left + 65
        const topY = +top +65
        const globX = +leftX + 360
        const globY = +topY
        const transform = `translate3d(${left}px, ${top}px, 0)`; 
        const [{ isDragging }, drag, preview] = useDrag(() =>({
            type: itemTypes.MATCHRING,
            item: { id, leftX, topY, globX, globY, canvasRef },
            collect: (monitor) =>({
                isDragging: monitor.isDragging(),
                lineDetailsA
            })
        }), [id, leftX, topY]);

        useEffect(() => {
            preview(getEmptyImage(), { captureDraggingState: true });
        }, []);

        
        return(
            <div ref={drag} role="ItemDrag" style={{position:'absolute', zIndex:100, cursor:'pointer', transform}} >
                {/* <img src={props.puppet} /> */}
                {props.children}
            </div>
        )
    });

    const Item = (props) =>{
        let src = props.src
        let string = props.string
        // let thisItemClass = itemClass
        // if (stages.filter((stg)=>stg.stage===currentStage)[0].answerString === string){
        //     thisItemClass = answerItemClass
        // }
        // const dragRef = useRef(null);

        const [{ isDragging, didDrop }, dragRef, preview] = useDrag({
            type:itemTypes.MATCHRING,
            item:{
                id: props.string
            },
            collect: monitor => ({
                isDragging:!!monitor.isDragging(),
                didDrop:!!monitor.didDrop()
            })
        })

        return isDragging ? (
            <>  
                
                <div ref={dragRef} className="ringDiv" style={{border:'solid yellow 10px'}}>
                    <img className="matchRing" src={src} />
                </div>
            </>
        ) : (
            <>
            <DragPreviewImage connect={preview} src={arrow} />
                <div ref={dragRef} className="ringDiv">
                    {<img className="matchRing" src={src} />}
                </div>
            </>
        )
    }

    const Slot = (props) =>{
        let src;
        // const answerSrc = stages.filter((stg)=>stg.stage===currentStage)[0].answer
        // if (props.slot === target){
        //     src=null
        // } else{
        //     src=props.slot
        // }
        
        const [{ isOver }, dropRef] = useDrop({
            accept:itemTypes.MATCHRING,
            collect: monitor =>({
                isOver: !!monitor.isOver()
            }),
            // drop: (item, monitor) => console.log(item.id, stages.filter((stg)=>stg.stage===currentStage)[0].answer)
            hover: (item, monitor, component) => {
                // const box = findDOMNode('uniqRef1')
                // const coor = box.getBoundingClientRect();

                // const match1 = document.getElementById('match1')

                // console.log(match1.getBoundingClientRect())

                const dragIndex = monitor.getItem().index;
                const hoverIndex = props.index;
                const rawComponent = component.getDecoratedComponentInstance();
                console.log(rawComponent.getBoundingClientRect());
            },
            drop: (item, monitor) => {
                // console.log(item.left)
                // if ((item.id === stages.filter((stg)=>stg.stage===currentStage)[0].answerString)&&(props.slot === target)){
                //     correct.play()
                //     setStageComplete(true)
                //     setAnswerItemClass("answerItemDiv hide")
                //     setTimeout(()=>{
                //         setArrowClass("arrowDiv slideIn")
                //     }, 500)
                // } else{
                //     tap.play()
                // }
            }
        })
        return (
            <div className="slot" ref={dropRef} style={{backgroundColor:isOver && 'rgba(0,0,0,0.5)'}}>
                slot
                    {/* <img src={src} /> */}
                    {/* {stageComplete &&
                    <>
                        {props.slot===target &&
                        <>
                            <span className={stageComplete ? "plusOne rise" : "plusOne"}>+1</span>
                            <img className="finishedEgg" src={answerSrc} />
                        </>
                        }
                    </>
                    } */}
            </div>
        )
    }

    const [collected, drop] = useDrop(()=>({
        accept:itemTypes.MATCHRING,
        
        hover(item, monitor){
            const canvasRef = item.canvasRef
            const delta = monitor.getDifferenceFromInitialOffset();
            const pointer = monitor.getClientOffset();
            // console.log('pointerdiff: ', item.leftX, item.globX, pointer.x, delta.x)
            // console.log('pointerdiff: ', pointer.x - item.globX - delta.x)
            const offsetX =  pointer.x - item.globX - delta.x;
            const offsetY =  pointer.y - item.globY - delta.y;
            // const items = monitor.getItem()
            
            var lineDetails={
                startX:item.leftX,
                startY:item.topY,
                endX:item.leftX + delta.x + offsetX,
                // endX:delta.x,
                endY:item.topY + delta.y + offsetY
                // endY:delta.y
            }
            // handleLineDetails(lineDetails);

            var canvasObj = canvasRef.current;
            var ctx = canvasObj.getContext('2d');
            ctx.clearRect(0, 0, 1280, 720)
            ctx.beginPath();
            ctx.moveTo(lineDetails.startX,lineDetails.startY);
            ctx.lineTo(lineDetails.endX,lineDetails.endY);
            var gradient = ctx.createLinearGradient(0,0,lineDetails.endX, lineDetails.endY);
            gradient.addColorStop("0", '#FF0000');
            gradient.addColorStop("1", '#3311AA');
            ctx.strokeStyle = gradient
            ctx.lineCap = "round"
            ctx.lineWidth = 10
            ctx.stroke();
        },
        drop(item, monitor){
            stretch.play();
        }

    }), )

    const handleLineDetails = (lineDetails) =>{
        var startXDiff = Math.abs(lineDetailsA.startX - lineDetails.startX)
        var startYDiff = Math.abs(lineDetailsA.startY - lineDetails.startY)
        var endXDiff = Math.abs(lineDetailsA.endX - lineDetails.endX)
        var endYDiff = Math.abs(lineDetailsA.endY - lineDetails.endY)
        if ((startXDiff > 5)||(startYDiff > 5)||(endXDiff > 5)||(endYDiff > 5)){

            setLineDetailsA(lineDetails)
        }
    }

    return (
        <div>
            
            <div className="split-content">
                <div className="left-tips-pane">
                    <img style={{maxWidth:'300px', margin:'auto'}} src={BF1logo} />
                    <div className="tips">
                        <div className="tip">
                            Match by dragging a line before using the Student's Book page 2.
                        </div>
                        <div className="tip">
                            Check that the answer is correct and redraw if needed.
                        </div>
                    </div>
                    
                </div>
                    <CustomDragLayer />
                <div className="right-content-pane" ref={drop} >
                    
                    {/* <div className="match-bank"> */}
                            {/* <div className="ringDiv">
                                <img className="matchRing" src={puppet} />
                            </div> */}
                            {/* <Item id="match1" string="puppet" src={puppet} /> */}
                            <LineCanvas reference={canvasRefA} />
                            <LineCanvas reference={canvasRefB} />
                            <LineCanvas reference={canvasRefC} />
                            <ItemDrag id="drag1" canvasRef = {canvasRefA} left="0" top="200">
                                <div className="ringDiv">
                                    <img className="matchRing" src={puppet} />
                                </div>
                            </ItemDrag>
                            <ItemDrag id="drag2" canvasRef = {canvasRefB} left="0" top="350">
                                <div className="ringDiv">
                                    <img className="matchRing" src={table} />
                                </div>
                            </ItemDrag>
                            <ItemDrag id="drag3" canvasRef = {canvasRefC} left="0" top="500">
                                <div className="ringDiv">
                                    <img className="matchRing" src={chair} />
                                </div>
                            </ItemDrag>
                            {/* <Slot /> */}
                            {/* <div className="ringDiv">
                                <img className="matchRing" src={table} />
                            </div> */}
                    {/* </div> */}
                    <img src={bf1sbp2clear} style={{position:'absolute', left:'250px', top:'50px'}} />
                </div>
                <CustomButton buttonText="next" onClick={nextStage} left='1000' top='630'/>
            </div>
        </div>
    )
}