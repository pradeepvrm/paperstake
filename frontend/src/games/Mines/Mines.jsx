import { useState, useContext } from 'react'
import './Mines.css'
import Square from './Board.jsx'
import AuthContext from '../../context/AuthContext.jsx'

let mines = 3

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomNums(mines) {
  let randomNums = []
  while (randomNums.length < mines) {
    let randomNum = getRandomNum(1, 26)
    if (!randomNums.includes(randomNum)) {
      randomNums.push(randomNum)
    }
  }
  return randomNums
}

export default function Mines() {
  
  const { updatePoints } = useContext(AuthContext)
  const [GameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(100)
  const [tilesClicked, setTilesClicked] = useState(25)
  const [safeTiles, setSafeTiles] = useState(25 - mines)
  const [randomNums, setRandomNums] = useState(() => generateRandomNums(mines))
  const [bet, setBet] = useState(0)

  function resetGame() {
    setGameOver(false)
    setScore(100)
    setTilesClicked(25)
    setSafeTiles(25-mines)
    setRandomNums(generateRandomNums(mines))
    setBet(0)
  }

  const handleBet = (e) => {
    e.preventDefault()
    updatePoints(-bet)
  }

  function withDraw() {
    updatePoints(bet)
    setGameOver(true)
    resetGame()
  }

  let items = [];
  for (let index=1; index < 26; index++) {
    if (randomNums.includes(index)) {
      items.push(<Square 
        bet={bet}
        setBet={setBet}
        setScore={setScore} 
        gameOver={GameOver} 
        setGameOver={setGameOver} 
        key={`square-${index}-${GameOver}`}
        isMine={true}
        tilesClicked={tilesClicked}
        setTilesClicked={setTilesClicked}
        safeTiles={safeTiles}
        setSafeTiles={setSafeTiles}
        />)
    }
    else {
      items.push(<Square 
        bet={bet}
        setBet={setBet}
        setScore={setScore} 
        gameOver={GameOver} 
        setGameOver={setGameOver} 
        key={`square-${index}-${GameOver}`}
        tilesClicked={tilesClicked}
        setTilesClicked={setTilesClicked}
        safeTiles={safeTiles}
        setSafeTiles={setSafeTiles}
        />)
    }
  }

  return (
    <div className='flex gap-10 bg-black h-screen'>
      <div className='my-auto mx-30 text-center font-bold text-2xl'>
        <section className='text-6xl text-yellow-400 my-10'>
        <p>Total Score</p>
        <p>{score.toFixed(2)}</p>
        </section>
        <form className='bg-gray-500'
        onSubmit={handleBet}>
          <input
            type="number"
            value={bet}
            onChange={(e) => setBet(parseInt(e.target.value))}
          />
        <button type="submit">Bet</button>
        </form>
        <button className='bg-purple-600' onClick={withDraw}>Cash Out</button>
        {GameOver? <button className='bg-purple-600 px-4 py-2 rounded-sm hover:bg-purple-900' onClick={resetGame}>Play again</button>:null}
      </div>
      <div className='grid grid-cols-5 gap-2 m-auto'>
        {items}
      </div>
    </div>
  )
}
