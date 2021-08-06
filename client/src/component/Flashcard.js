import React from 'react'

export default function Flashcard(props) {

    const label = props.label;
    const emphasis = props.emphasis;

    const GetLabel = () =>{

        var firstPart;
        var emphasisedPart;
        var endPart;
        var boldParts;
        if (emphasis !== ""){
            boldParts = label.search(emphasis)
            firstPart=`${label.substr(0, boldParts)}`
            emphasisedPart=`${label.substr(boldParts, emphasis.length)}`
            endPart=`${label.substr(boldParts+emphasis.length)}`
            console.log(firstPart)
            console.log(emphasisedPart)
            console.log(endPart)
        }

        return(
            <>{firstPart}<b>{emphasisedPart}</b>{endPart}</>
        )
    }
    return (
        <div>
            <div className="flashcard">
                <img className="flashcard-image" src={props.src} />
                <div className="flashcard-text"><GetLabel /></div>
            </div>
        </div>
    )
}
