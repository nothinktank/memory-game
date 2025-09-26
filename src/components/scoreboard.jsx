import { useState, useEffect } from "react";
// import { game } from "./card-grid";
import ReactDOM from 'react-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'



// library.add(fas, fad, fadt);

export default function ScoreBoard ({scoreCard}) {
    //where the scoreboard goes
    // const [score, setScore] = useState({currentScore: 0, highScore: 0})

    return (
        <> 
        {/* <div className="score"><h1>Score: {scoreCard.current}</h1></div>  */}
        <div className="horizontal-container">
            {/* <div class="final-score-wrapper gradient-2">
                <p class="final-score white-text">{scoreCard.current}</p>
                <p class="light-grey-text">of 12</p>
            </div>
            <div class="high-score-wrapper gradient-2">
                <p class="final-score gold-text">{scoreCard.high}</p>
                <p class="light-grey-text">High Score</p>
                
            </div> */}
            
            <div className="pill">
                <p class="final-score white-text">{scoreCard.current} / 12 Hits</p>
                <div className="flexible-bar-case"></div>
                <ProgressBar 
                    score={scoreCard.current}
                />
                
                <span className="fa-layers fa-lg">
                    <FontAwesomeIcon className="crown fa-2x" icon={faCrown} />
                    <span className="fa-layers-text">{scoreCard.high}</span>
                </span>
                
                
            </div>
        </div>

        </>
    )
}

function ProgressBar({score}) {
    let dynamicWidth = score / 12 * 60; 

    return (
        <>
            <div className="flexible-bar" style={{width: `${dynamicWidth}%`}}>  
            </div>
        </>
    )
}

// function ProgressBar({one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve}) {
//     let i = 0
//     return (
//         <div id="myProgress">
//             <div className="bar-container">
//                 <div className={`bar1 ${one}`}></div>
//                 <div className={`bar2 ${two}`}></div>
//                 <div className={`bar3 ${three}`}></div>
//                 <div className={`bar4 ${four}`}></div>
//                 <div className={`bar5 ${five}`}></div>
//                 <div className={`bar6 ${six}`}></div>
//                 <div className={`bar7 ${seven}`}></div>
//                 <div className={`bar8 ${eight}`}></div>
//                 <div className={`bar9 ${nine}`}></div>
//                 <div className={`bar10 ${ten}`}></div>
//                 <div className={`bar11 ${eleven}`}></div>
//                 <div className={`bar12 ${twelve}`}></div>
//             </div>
//         </div>

//     )
// }

{/* <div className="pill">
                <ProgressBar 
                one={(scoreCard.current > 0) ? true : false}
                two={(scoreCard.current > 1) ? true : false}
                three={(scoreCard.current > 2) ? true : false}
                four={(scoreCard.current > 3) ? true : false}
                five={(scoreCard.current > 4) ? true : false}
                six={(scoreCard.current > 5) ? true : false}
                seven={(scoreCard.current > 6) ? true : false}
                eight={(scoreCard.current > 7) ? true : false}
                nine={(scoreCard.current > 8) ? true : false}
                ten={(scoreCard.current > 9) ? true : false}
                eleven={(scoreCard.current > 10) ? true : false}
                twelve={(scoreCard.current > 11) ? true : false}
                />
            </div>
        </div> */}