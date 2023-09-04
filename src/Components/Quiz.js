import React,{useState,useContext} from "react";
import {Questions} from "../Helpers/Questionbank"
import { quizcontext } from "../Helpers/Contexts"
import "../App.css";

export function Quiz(){
  const {score,setScore,GameState,setGameState}= useContext(quizcontext)
  const [currentqu,setCurrentqu]=useState(0);
  const [choosenop,setChoosenop]=useState("");

  const nextquestion = ()=>{
    if (Questions[currentqu].answer === choosenop){
        setScore(score + 1)
    }
    setCurrentqu(currentqu + 1 )
  }
  const finishquiz = ()=>{
    if (Questions[currentqu].answer === choosenop){
        setScore(score + 1)
    }
    setGameState("EndScreen");
  };

    return(
        <div className="Quiz">
             <h1 >{Questions[currentqu].prompt}</h1>
             <div className="options">
                <button onClick={()=>{setChoosenop("optionA")}}>{Questions[currentqu].optionA}</button>
                <button onClick={()=>{setChoosenop("optionB")}}>{Questions[currentqu].optionB}</button>
                <button onClick={()=>{setChoosenop("optionC")}}>{Questions[currentqu].optionC}</button>
                <button onClick={()=>{setChoosenop("optionD")}}>{Questions[currentqu].optionD}</button>
             </div>
             {currentqu === Questions.length - 1 ?(
                <button onClick={finishquiz}> Finish Quiz</button>
             ):(
                <button onClick={nextquestion}>Next question</button>
             ) }

        </div>
    )
}
