import { useState } from "react"

export default function Square({
    setBet,
    isMine, 
    gameOver, 
    setGameOver, 
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
                setBet(0)
            }
            else {
                setTilesClicked(tilesClicked - 1)
                setSafeTiles(safeTiles - 1)
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