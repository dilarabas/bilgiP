import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaChartLine, FaHistory, FaLightbulb } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
    const [testResults, setTestResults] = useState([]);
    const [userName, setUserName] = useState(() => {
        const storedName = localStorage.getItem('loggedInName');
        return storedName ? storedName : 'Kullanıcı';
    });

    const completedTests = testResults.length;
    const averageScore = testResults.length > 0
        ? testResults.reduce((sum, result) => sum + (result.score / result.total) * 100, 0) / testResults.length
        : 0;

    useEffect(() => {
        const storedResults = JSON.parse(localStorage.getItem("results")) || [];
        setTestResults(storedResults);
    }, []);

    const lastSolvedTests = testResults.slice(0, 3);

    const recommendedTests = [
        { id: 4, title: "İleri JavaScript Konuları" },
        { id: 5, title: "CSS Flexbox ve Grid" },
        { id: 6, title: "Redux Temelleri" },
    ];

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h2>👋 Hoş Geldiniz, <span className="username">{userName}</span></h2>
                <p>Gelişimini takip etmek ve yeni testler çözmek için buradasın!</p>
            </div>
            <div className="dashboard-summary grid-2">
                <div className="summary-card">
                    <FaCheckCircle className="summary-icon success" />
                    <div>
                        <h4>Tamamlanan Testler</h4>
                        <p>{completedTests}</p>
                    </div>
                </div>
                <div className="summary-card">
                    <FaChartLine className="summary-icon info" />
                    <div>
                        <h4>Ortalama Başarı</h4>
                        <p>%{Math.round(averageScore)}</p>
                    </div>
                </div>
            </div>
            <div className="dashboard-section">
                <h3>
                    <FaHistory className="section-icon" /> Son Çözülen Testler
                </h3>
                {lastSolvedTests.length > 0 ? (
                    <ul className="test-list">
                        {lastSolvedTests.map((result, index) => (
                            <li key={index}>
                                <div className="test-info">
                                    <span className="test-title">{result.quizName}</span>
                                    <span className="test-date">{result.date}</span>
                                </div>
                                <div className="test-score">
                                    Puan: {result.score}/{result.total}
                                </div>
                                {/* İsterseniz detay sayfasına link ekleyebilirsiniz */}
                                {/* <Link to={`/quiz-results/${result.quizId}`} className="test-link">Detaylar</Link> */}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Henüz tamamlanmış bir sınavınız bulunmuyor.</p>
                )}
            </div>

            <div className="dashboard-section">
                <h3>
                    <FaLightbulb className="section-icon" /> Önerilen Testler
                </h3>
                {recommendedTests.length > 0 ? (
                    <ul className="test-list">
                        {recommendedTests.map((test) => (
                            <li key={test.id}>
                                <Link to={`/quiz/${test.id}`} className="test-link">
                                    {test.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Yeni öneriler hazırlanıyor.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;