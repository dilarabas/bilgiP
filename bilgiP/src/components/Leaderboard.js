import React, { useEffect, useState } from "react";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem("scores")) || [];
    savedScores.sort((a, b) => b.score - a.score);
    setLeaders(savedScores);
  }, []);

  return (
    <div>
      <h3>Liderlik Tablosu</h3>
      <ul>
        {leaders.length > 0 ? (
          leaders.map((leader, index) => (
            <li key={index}>
              {leader.name} - {leader.score} Puan
            </li>
          ))
        ) : (
          <li>Liderlik tablosu boş.</li>
        )}
      </ul>
    </div>
  );
};

export default Leaderboard;
