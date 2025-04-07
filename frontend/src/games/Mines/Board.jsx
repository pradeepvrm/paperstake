import { useState, useContext } from 'react'
import AuthContext from "../../context/AuthContext"

export default function Square({
    setBet,
    isMine, 
    gameOver, 
    setGameOver, 
    setScore,
    tilesClicked,
    setTilesClicked,
    safeTiles,
    setSafeTiles
    }) {
    const [clicked, setClicked] = useState(false)

    function mineCheck() {
        if (!clicked) {
            setClicked(true)
            if (isMine) {
                setGameOver(true)
                setScore(0)
            }
            else {
                setTilesClicked(tilesClicked - 1)
                setSafeTiles(safeTiles - 1)
                setScore(score => score * tilesClicked / safeTiles)
                setBet((bet => bet * tilesClicked / safeTiles))
            }
        }
    }
    
    return (
        <div className={
              `square-item w-25 h-25 rounded-lg 
              ${(clicked || gameOver) ? (isMine ? 'mine-square' : 'safe-square'): ''}`
            }
            onClick={mineCheck}>
            
        </div>
    )
}