import React, { useState } from "react";
import { Link } from "react-router-dom";

const QuizList = () => {
  const [exams, setExams] = useState([
    { id: 1, title: "HTML Temelleri" },
    { id: 2, title: "CSS Gelişmiş Seviye" },
    { id: 3, title: "React Başlangıç" },
    { id: 4, title: "Node.js Giriş" },
    { id: 5, title: "JavaScript ES6" },
    { id: 6, title: "Veri Tabanı Temelleri" },
    { id: 7, title: "Python ile Programlamaya Giriş" },
    { id: 8, title: "C# Temelleri" },
    { id: 9, title: "Java OOP Konseptleri" },
    { id: 10, title: "TypeScript Temelleri" },
    { id: 11, title: "Git ve GitHub Kullanımı" },
    { id: 12, title: "Linux Komut Satırı" },
    { id: 13, title: "RESTful API Kullanımı" },
    { id: 14, title: "Django Framework Giriş" },
    { id: 15, title: "Angular Temelleri" },
    { id: 16, title: "Vue.js Başlangıç" },
    { id: 17, title: "Mobil Uygulama Geliştirme (React Native)" },
    { id: 18, title: "Firebase ile Uygulama Geliştirme" },
    { id: 19, title: "Algoritma ve Veri Yapıları" },
    { id: 20, title: "Yapay Zeka ve Makine Öğrenmesi Giriş" },
  ]);

  return (
    <div>
      <h3>Sınavlar</h3>
      <ul>
        {exams.map((exam) => (
          <li key={exam.id}>
            <Link to={`/quiz/${exam.id}`}>{exam.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
