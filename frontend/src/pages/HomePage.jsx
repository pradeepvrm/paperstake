import React from 'react';
import UpdatePoints from '../components/UpdatePoints';

const HomePage = () => {
    return (
        <div> 
            <a href="/game" className="text-xl text-blue-700 hover:underline">Mines</a>
            <UpdatePoints />
        </div>
    )
}

export default HomePage; 