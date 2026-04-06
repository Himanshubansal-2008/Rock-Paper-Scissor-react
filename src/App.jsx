import { useState } from "react"
import './index.css'

function App() {
  const [streak, setStreak] = useState(0)
  const [rounds, setRounds] = useState(0)
  const [maxstr, setMaxstr] = useState(0)
  const [userScore, setUserScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [display, setDisplay] = useState("Make your move!!")

  function handleClick(move) {
    let computerMove = Math.random()
    if(computerMove < 0.33){
      computerMove = "Rock"
    }else if(computerMove < 0.66){
      computerMove = "Paper"
    }else{
      computerMove = "Scissors"
    }
    if (move === computerMove){
      setDisplay("Draw")
    }else if(move === "Rock" && computerMove === "Scissors"){
      setStreak(streak+1)
      setDisplay("You Win 🏆")
      setUserScore(userScore + 1)
    }else if(move === "Paper" && computerMove === "Rock"){
      setStreak(streak+1)
      setDisplay("You Win 🏆")
      setUserScore(userScore + 1)
    }else if(move === "Scissors" && computerMove === "Paper"){
      setStreak(streak+1)
      setDisplay("You Win 🏆")
      setUserScore(userScore + 1)
    }else{
      if (streak > maxstr){
        setMaxstr(streak)
      }
      setStreak(0)
      setDisplay("You Lose 💔")
      setComputerScore(computerScore + 1)
    }
    setRounds(rounds + 1)
  }

  function reset() {
    setStreak(0)
    setRounds(0)
    setMaxstr(0)
    setUserScore(0)
    setComputerScore(0)
    setDisplay("Make your move!!")
  }


  return (
    <div className="main-container">
      <div className="header">
        <h1>Rock Paper Scissors</h1>
        <p>Can you beat the machine?</p>
      </div>
      <div className="streak-container">
        <div>
          <h3>Rounds</h3>
          <p>{rounds}</p>
        </div>
        <div>
          <h3>Streak</h3>
          <p>{streak}</p>
        </div>
        <div>
          <h3>Max Streak</h3>
          <p>{maxstr}</p>
        </div>
      </div>
      <div className="score-card">
        <div>
          <h3>You</h3>
          <p>{userScore}</p>
        </div>
        <h1>:</h1>
        <div>
          <h3>Computer</h3>
          <p>{computerScore}</p>
        </div>
      </div>
      <div className="choices">
        <button onClick={() => handleClick("Rock")}>🪨</button>
        <button onClick={() => handleClick("Paper")}>📄</button>
        <button onClick={() => handleClick("Scissors")}>✂️</button>
      </div>
      <h3>{display}</h3>
      <button onClick={reset}>Play Again</button>
      <div>
        <h3>Previous Moves</h3>
      </div>

    </div>

  )
}

export default App;