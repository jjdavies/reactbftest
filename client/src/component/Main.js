import React, { useState } from 'react'
import Intro from '../component/Intro'
import Warmup from '../component/Warmup'
import Video from '../component/Video'
import LessonObjectives from '../component/LessonObjectives'

import BF1U1P1UnitOpener from '../component/BF1U1P1UnitOpener'
import BF1U1P1Vocab1 from '../component/BF1U1P1Vocab1v2'
import BF1U1P1Vocab2 from '../component/BF1U1P1Vocab2'
import BF1U1P1Vocab3 from '../component/BF1U1P1Vocab3'
import BF1U1P1Vocab4 from '../component/BF1U1P1Vocab4'
import BF1U1P1Language1 from '../component/BF1U1P1Language1'
import BF1U1P1FCGame1 from '../component/BF1U1P1FCGame1'
import BF1U1P1Classroom1 from '../component/BF1U1P1Classroom1'
import BF1U1P1Match1 from '../component/BF1U1P1Match1'
import BF1U1P1Match2 from '../component/BF1U1P1Match2'
import BF1U1P1FCGame2 from '../component/BF1U1P1FCGame2'
import BF1U1P1Puzzle1 from '../component/BF1U1P1Puzzle1'
import BF1U1P1Puzzle2 from '../component/BF1U1P1Puzzle2'
import BF1U1P1Puzzle3 from '../component/BF1U1P1Puzzle3'
import LessonConclusion from '../component/LessonConclusion'
import BF1U1P1Chant from '../component/BF1U1P1Chant'

// import ClipTest from '../component/ClipTest'

export default function Main() {
    const [stage, setStage] = useState(0);

    const userNavigated = (targetStage, removalDelay) =>{
        if (targetStage > 19) targetStage = 0;
        setTimeout(()=>{
            setStage(targetStage)

        }, removalDelay)
    }
    
    return (
        <div className="main">
            {stage === 0 &&
                <Intro userNavigated={userNavigated} />
            }
            {stage === 1 &&
                <Warmup userNavigated={userNavigated} />
            }
            {stage === 2 &&
                <Video userNavigated={userNavigated} />
            }
            {stage === 3 &&
                <LessonObjectives 
                thisStage="3"
                objectives={["learn about the new unit: My Class","find things in the classroom.","ask and answer: What is this?"]}
                userNavigated={userNavigated} />
            }
            {stage === 4 &&
                <BF1U1P1UnitOpener 
                thisStage="4"
                userNavigated={userNavigated} />
            }
            {stage === 5 &&
                <BF1U1P1Vocab1 
                thisStage="5"
                userNavigated={userNavigated} />
            }
            {stage === 6 &&
                <BF1U1P1Vocab2 
                thisStage="6"
                userNavigated={userNavigated} />
            }
            {stage === 7 &&
                <BF1U1P1Vocab3 
                thisStage="7"
                userNavigated={userNavigated} />
            }
            {stage === 8 &&
                <BF1U1P1Language1 
                thisStage="8"
                userNavigated={userNavigated} />
            }
            {stage === 9 &&
                <BF1U1P1FCGame1 
                thisStage="9"
                userNavigated={userNavigated} />
            }
            {stage === 10 &&
                <BF1U1P1Vocab4
                thisStage="10"
                userNavigated={userNavigated} />
            }
            {stage === 11 &&
                <BF1U1P1Classroom1
                thisStage="11"
                userNavigated={userNavigated} />
            }
            {stage === 12 &&
                <BF1U1P1Match1
                thisStage="12"
                userNavigated={userNavigated} />
            }
            {stage === 13 &&
                <BF1U1P1Match2
                thisStage="13"
                userNavigated={userNavigated} />
            }
            {stage === 14 &&
                <BF1U1P1FCGame2
                thisStage="14"
                userNavigated={userNavigated} />
            }
            {stage === 15 &&
                <BF1U1P1Puzzle1
                thisStage="15"
                userNavigated={userNavigated} />
            }
            {stage === 16 &&
                <BF1U1P1Puzzle2
                thisStage="16"
                userNavigated={userNavigated} />
            }
            {stage === 17 &&
                <BF1U1P1Puzzle3
                thisStage="17"
                userNavigated={userNavigated} />
            }
            {stage === 18 &&
                <BF1U1P1Chant
                thisStage="18"
                userNavigated={userNavigated} />
            }
            {stage === 19 &&
                <LessonConclusion 
                thisStage="19"
                objectives={["learned about the new unit: My Class","found things in the classroom.","asked and answered: What is this?"]}
                userNavigated={userNavigated} />
            }
            {/* {stage === 20 &&
                <ClipTest />
                
            } */}
            
        </div>
    )
}