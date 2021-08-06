import React from 'react'
import NextButton from '../component/NextButton'
import CustomButton from '../component/CustomButton'

export default function ButtonTest() {
    return (
        <div>
            <div style={{position:'absolute', left:'200px', top:'300px'}}><NextButton /></div>
            <div style={{position:'absolute', left:'700px', top:'300px'}}><CustomButton /></div>
        </div>
    )
}
