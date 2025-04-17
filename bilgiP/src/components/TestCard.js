import React from "react";
import { Link } from "react-router-dom";

const TestCard = ({ title, status }) => {
  const getQuizId = (title) => {
    switch (title) {
      case "HTML Temelleri":
        return 1;
      case "CSS Gelişmiş Seviye":
        return 2;
      case "CSS Gelişmiş Seviye":
        return 3;
      case "React Başlangıç":
        return 4;
      case "Node.js Giriş":
        return 5;
      case "Node.js Giriş":
        return 6;
      case "C#":
        return 7;
      default:
        return 0;
    }
  };

  const quizId = getQuizId(title);

  return (
    <div className="test-card">
      <h3>{title}</h3>
      <p>Durum: {status}</p>
      <Link to={`/quiz/${quizId}`} className="take-test-button">
        Testi Çöz
      </Link>
    </div>
  );
};

export default TestCard;