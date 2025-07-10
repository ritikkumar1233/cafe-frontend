import React from 'react'
import { useState } from 'react'

export default function Cricket() {
    let [score, setScore] = useState(0);
    let [wicket, setWicket] = useState(0);
    let [message, setMessage] = useState("Game Started")
    let incScore = ()=>{
        if(wicket <= 9){
            setScore(score+1);
            setMessage("Well Done");
        }
    }
    let incWicket = ()=>{
        if(wicket < 10){
            setWicket(wicket+1);
            setMessage("Better luck next time");
        }
        if(wicket == 9){
            setMessage("Game Over");
        }
    }
  return (
    <div>
        <h1>Score = {score}</h1>
        <button onClick={incScore}>Run</button>
        <br/><br/>
        <h1>Wicket = {wicket}</h1>
        <button onClick={incWicket}>Out</button>
        <p>{message}</p>
    </div>
  )
}
