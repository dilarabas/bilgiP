import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import QuizPage from './components/QuizPage';
import QuizList from './components/QuizList';
import Account from './components/Account';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ChangePassword from './components/ChangePassword';
import NotificationSettings from './components/NotificationSettings'; 
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-container-top">
        <Sidebar /> {/* Sidebar component'i burada render ediliyor */}
        <div className="content-area">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/quiz/:id" element={<QuizPage />} />
            <Route path="/quizlist" element={<QuizList />} />
            <Route path="/account" element={<Account />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/change-password" element={<ChangePassword />} /> {/* Yeni rota */}
            <Route path="/notification-settings" element={<NotificationSettings />} /> {/* Yeni rota */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
