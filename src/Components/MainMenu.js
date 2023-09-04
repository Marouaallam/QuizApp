import React, { useContext } from "react";
import { quizcontext } from "../Helpers/Contexts";
import "../App.css";

export function MainMenu(){
    const {gameState,setGameState} = useContext(quizcontext)
    return(
        <div className="menu"> 
            <button onClick={()=>{setGameState("Quiz")}}>Start quiz</button>
        </div>
    )
}
