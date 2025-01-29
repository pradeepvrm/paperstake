import React, { useState, useContext } from "react"
import AuthContext from "../context/AuthContext"

const UpdatePoints = () => {
  const [points, setPoints] = useState(0)
  const { updatePoints } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    updatePoints(points)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={points}
        onChange={(e) => setPoints(e.target.value)}
      />
      <button type="submit">Update Points</button>
    </form>
  )
}

export default UpdatePoints