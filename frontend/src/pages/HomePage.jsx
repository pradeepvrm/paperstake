import UpdatePoints from '../components/UpdatePoints';

const HomePage = () => {
    return (
        <div className='flex flex-col h-screen'> 
            <a href="/game" className="w-25 h-25 bg-sky-500 rounded-sm m-2 text-center text-xl hover:underline">Mines</a>
            <UpdatePoints />
        </div>
    )
}

export default HomePage; 