import React, { useContext, useEffect, useState } from "react"
import UpdatePoints from "../components/UpdatePoints"
import AuthContext from "../context/AuthContext"

const Game = () => {
  const { user, getPoints, updatePoints } = useContext(AuthContext)
  const [points, setPoints] = useState(user ? user.points : 0)
  const [bet, setBet] = useState(0)
  const [message, setMessage] = useState("")

  useEffect(() => {
    const fetchPoints = async () => {
      const data = await getPoints()
      setPoints(data.points)
    }
    fetchPoints()
  }, [getPoints])

  const handleBet = (e) => {
    e.preventDefault()
    if (bet <= 0 || bet > points) {
      setMessage("Invalid bet amount")
      return
    }

    const diceRoll = Math.floor(Math.random() * 6) + 1
    if (diceRoll > 3) {
      const newPoints = points + bet
      updatePoints(bet)
      setPoints(newPoints)
      setMessage(`You won! Dice roll: ${diceRoll}. Your points have been doubled.`)
    } else {
      const newPoints = points - bet
      updatePoints(-bet)
      setPoints(newPoints)
      setMessage(`You lost! Dice roll: ${diceRoll}. Your bet points have been deducted.`)
    }
  }

  return (
    <div>
      <h1 className="dark:bg-gray-500">Game</h1>
      {user && <p>Current Points: {points}</p>}
      <form onSubmit={handleBet}>
        <input
          type="number"
          value={bet}
          onChange={(e) => setBet(parseInt(e.target.value) || 0)}
          placeholder="Enter your bet"
        />
        <button type="submit">Place Bet</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Game