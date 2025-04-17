import React, { useEffect, useState } from "react";

const Achievements = ({ user }) => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const savedAchievements = JSON.parse(localStorage.getItem("achievements")) || [];
    setAchievements(savedAchievements);
  }, [user]);

  const checkAchievements = (userScore) => {
    const newAchievements = [];
    if (userScore >= 100) {
      newAchievements.push("100 Puan Başarısı");
    }
    if (userScore === 0) {
      newAchievements.push("Tüm Sorular Yanlış!");
    }
    if (userScore === 100) {
      newAchievements.push("Tüm Sorular Doğru!");
    }
    return newAchievements;
  };

  const updateAchievements = (userScore) => {
    const newAchievements = checkAchievements(userScore);
    const updatedAchievements = [...achievements, ...newAchievements];
    localStorage.setItem("achievements", JSON.stringify(updatedAchievements));
    setAchievements(updatedAchievements);
  };

  return (
    <div>
      <h3>Başarılar</h3>
      <ul>
        {achievements.length > 0 ? (
          achievements.map((achievement, index) => <li key={index}>{achievement}</li>)
        ) : (
          <li>Henüz başarı kazanmadınız.</li>
        )}
      </ul>
    </div>
  );
};

export default Achievements;
