import './App.css';
import react,{useState,useContext} from "react";
import {MainMenu} from "./Components/MainMenu"
import {Quiz} from "./Components/Quiz"
import {EndScreen} from "./Components/EndScreen"
import { quizcontext } from './Helpers/Contexts';

function App() {
  const [gameState,setGameState] = useState("menu");
  const [score,setScore]=useState(0)
  return (
    <div className="App">
      <h1>Quiz Game</h1>
      <quizcontext.Provider value={{gameState,setGameState,score,setScore}}>
      {gameState === "menu" && <MainMenu/>}
      {gameState === "Quiz" && <Quiz/>}
      {gameState === "EndScreen" && <EndScreen/>}
      </quizcontext.Provider>


    </div>
  );
}

export default App;
