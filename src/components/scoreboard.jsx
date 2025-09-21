import { useState, useEffect } from "react";
// import { game } from "./card-grid";

export default function ScoreBoard ({scoreCard}) {
    //where the scoreboard goes
    const [score, setScore] = useState({currentScore: 0, highScore: 0})

    return (
        <> 
        <div className="score">Score: {scoreCard.current}</div> 
        <div className="score">High score: {scoreCard.high}</div>
        </>
    )
}