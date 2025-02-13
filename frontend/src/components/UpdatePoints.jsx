import React, { useState, useContext, useEffect } from "react"
import AuthContext from "../context/AuthContext"

const UpdatePoints = () => {
  const [points, setPoints] = useState(0)
  const { updatePoints, getPoints } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    updatePoints(points)
  }

 useEffect(() => {
    const fetchPoints = async () => {
      const data = await getPoints()
      setPoints(data.points)
    }
    fetchPoints()
  }, [getPoints])

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        onChange={(e) => setPoints(e.target.value)}
      />
      <button type="submit">Update Points</button>
    </form>
  )
}

export default UpdatePoints