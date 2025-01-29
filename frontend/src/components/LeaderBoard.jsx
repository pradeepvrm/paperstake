import React, { useState, useEffect } from 'react';

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
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((user, index) => (
          <li key={index}>
            {index + 1}. {user.username} - {user.points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;