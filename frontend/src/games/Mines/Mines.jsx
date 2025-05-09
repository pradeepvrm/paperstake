import { useState, useContext } from 'react'
import './Mines.css'
import Square from './Board.jsx'
import MineHandler from './MineHandler.jsx'
import AuthContext from '../../context/AuthContext.jsx'

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
  
  const [mines, setMines] = useState(3)
  const { updatePoints } = useContext(AuthContext)
  const [GameOver, setGameOver] = useState(false)
  const [tilesClicked, setTilesClicked] = useState(25)
  const [safeTiles, setSafeTiles] = useState(25 - mines)
  const [randomNums, setRandomNums] = useState(() => generateRandomNums(mines))
  const [bet, setBet] = useState(0)

  function resetGame() {
    setGameOver(false)
    setTilesClicked(25)
    setSafeTiles(25-mines)
    setRandomNums(generateRandomNums(mines))
  }

  const handleBet = (e) => {
    e.preventDefault()
    updatePoints(-bet)
    resetGame()
  }

  function withDraw() {
    updatePoints(bet)
    setGameOver(true)
    setBet(0)
  }

  let items = [];
  for (let index=1; index < 26; index++) {
    if (randomNums.includes(index)) {
      items.push(<Square 
        bet={bet}
        setBet={setBet}
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
      <div className='my-auto mx-40 text-center font-bold text-2xl'>
        <section className='text-yellow-400 my-10'>
        <h1 className='text-6xl'>Mines</h1>
        <MineHandler 
          mines={mines}
          setMines={setMines}
          gameOver={GameOver}
        />
        <p className='text-4xl text-white'>Current Value: {bet.toFixed(2)}</p>
        </section>
        <form className='bg-gray-500 rounded-sm'
        onSubmit={handleBet}>
          <input className='w-80'
            type="number"
            onChange={(e) => setBet(parseInt(e.target.value) || 0)}
            placeholder='Enter bet amount'
          />
        <button className='px-5 rounded-sm bg-purple-600 hover:bg-purple-900' type="submit">Bet</button>
        </form>
        <button className='bg-purple-600 p-1 rounded-sm hover:bg-purple-900 m-2' onClick={withDraw}>Cash Out</button>
      </div>
      <div className='grid grid-cols-5 gap-2 m-auto'>
        {items}
      </div>
    </div>
  )
}
