import React ,{useContext} from "react";
import { quizcontext } from "../Helpers/Contexts"
import "../App.css";

export function EndScreen(){
    const {score,setScore}= useContext(quizcontext)
    return(
        <div className="End">
            <h1>The final result </h1>
            <h1>{score}/3 </h1>
        </div>
    )
}
