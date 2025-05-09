function MineHandler({
    mines,
    setMines,
    gameOver
}) {

function increment() {
    if (mines < 24 && gameOver === true) {
        setMines(mines + 1)
    }
}

function decrement() {
    if (mines > 1 && gameOver === true) {
        setMines(mines - 1)
    }
}

return (
<section className='flex justify-center text-base m-4'>
    <button className="px-5 rounded-lg bg-zinc-800 hover:border" onClick={decrement}>-</button>
        <div className="border border-yellow-400 rounded-lg mx-2 px-2">
            <p>mines</p>
            <p>{mines}</p>
        </div>
    <button className="px-5 rounded-lg bg-zinc-800 hover:border" onClick={increment}>+</button>
</section>
);
}

export default MineHandler;
