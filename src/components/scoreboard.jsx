import { useState, useEffect } from "react";
// import { game } from "./card-grid";

export default function ScoreBoard ({scoreCard}) {
    //where the scoreboard goes
    // const [score, setScore] = useState({currentScore: 0, highScore: 0})

    return (
        <> 
        {/* <div className="score"><h1>Score: {scoreCard.current}</h1></div>  */}
        <div className="horizontal-container">
            <div class="final-score-wrapper gradient-2">
                <p class="final-score white-text">{scoreCard.current}</p>
                <p class="light-grey-text">of 12</p>
            </div>
            <div class="high-score-wrapper gradient-2">
                <p class="final-score gold-text">{scoreCard.high}</p>
                <p class="light-grey-text">High Score</p>
                
            </div>
        </div>
{/*         

        <div className="score"><h1>High score: {scoreCard.high}</h1></div> */}
        </>
    )
}