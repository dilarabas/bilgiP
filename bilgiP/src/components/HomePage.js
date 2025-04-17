import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './HomePage.css';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const quizzes = [
    { id: 1, title: 'HTML Temelleri' },
    { id: 2, title: 'CSS Gelişmiş Seviye' },
    { id: 3, title: 'React Başlangıç' },
    { id: 4, title: 'Node.js Giriş' },
    { id: 5, title: 'JavaScript ES6' },
    { id: 6, title: 'Veri Tabanı Temelleri' },
    { id: 7, title: 'Python ile Programlamaya Giriş' },
    { id: 8, title: 'C# Temelleri' },
    { id: 9, title: 'Java OOP Konseptleri' },
    { id: 10, title: 'TypeScript Temelleri' },
    { id: 11, title: 'Git ve GitHub Kullanımı' },
    { id: 12, title: 'Linux Komut Satırı' },
    { id: 13, title: 'RESTful API Kullanımı' },
    { id: 14, title: 'Django Framework Giriş' },
    { id: 15, title: 'Angular Temelleri' },
    { id: 16, title: 'Vue.js Başlangıç' },
    { id: 17, title: 'Mobil Uygulama Geliştirme (React Native)' },
    { id: 18, title: 'Firebase ile Uygulama Geliştirme' },
    { id: 19, title: 'Algoritma ve Veri Yapıları' },
    { id: 20, title: 'Yapay Zeka ve Makine Öğrenmesi Giriş' }
  ];

  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };

  return (
    <div className="home-page-container">
      <div className="home-header">
        <input
          type="text"
          placeholder="Ders veya sınav ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="card-grid">
        {filteredQuizzes.length > 0 ? (
          filteredQuizzes.map((quiz) => (
            <div key={quiz.id} className="quiz-card" onClick={() => handleClick(quiz.id)}>
              {quiz.title}
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', width: '100%' }}>Sonuç bulunamadı.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
