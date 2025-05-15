import { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const response = await fetch('http://localhost:8000/api/leaderboard/');
      const data = await response.json();
      setLeaderboard(data);
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className='flex flex-col items-center h-screen'>
      <h2 className='text-xl m-2'>Leaderboard</h2>
      <ul>
        {leaderboard.map((user, index) => (
          <li className='bg-linear-to-t from-slate-950 to-purple-950 h-10 m-2 w-screen text-center' key={index}>
            {index + 1}. @{user.username} - {user.points} points
          </li>
        ))}
      </ul>
    </div>  
  );
};

export default Leaderboard;