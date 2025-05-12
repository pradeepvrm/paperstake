import UpdatePoints from '../components/UpdatePoints';

const HomePage = () => {
    return (
        <div className='flex flex-col h-screen'> 
            <a href="/game" className="text-xl hover:underline">Mines</a>
            <UpdatePoints />
        </div>
    )
}

export default HomePage; 