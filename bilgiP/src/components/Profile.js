import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6 1.41 1.41z" />
          </svg>
        </div>
        <div className="game-name">Elementary</div>
        <div className="action-buttons">
          <button className="join-lobby-button">Join Lobby</button>
          <button className="start-quiz-button">Start Quiz</button>
          <div className="user-icons">
            {/* Kullanıcı ikonları buraya eklenebilir */}
          </div>
        </div>
      </div>

      <div className="user-info">
        <div className="user-avatar">
          {/* Kullanıcı avatarı buraya eklenebilir */}
        </div>
        <div className="user-name-and-bonus">
          <div className="user-name">John Willis</div>
          <div className="bonus-booster">Bonus Booster , 24 v</div>
        </div>
        <div className="user-stats">
          <div className="stat">
            <div className="stat-value">27</div>
            <div className="stat-label">Game Wins</div>
          </div>
          <div className="stat">
            <div className="stat-value">910</div>
            <div className="stat-label">Highest Score</div>
          </div>
          <div className="stat">
            <div className="stat-value">218</div>
            <div className="stat-label">Correct Answers</div>
          </div>
        </div>
      </div>

      <div className="xp-bar">
        <div className="xp-value">3000/8000 XP</div>
        <div className="xp-fill" style={{ width: '37.5%' }}></div>
      </div>

      <div className="achievements-and-inventory">
        <div className="achievements">
          <div className="achievements-title">Achievements 8</div>
          <div className="achievement-icons">
            {/* Başarım ikonları buraya eklenebilir */}
          </div>
          <div className="view-all">View all</div>
        </div>
        <div className="inventory">
          <div className="inventory-title">Inventory 4</div>
          <div className="inventory-icons">
            {/* Envanter ikonları buraya eklenebilir */}
          </div>
          <div className="view-all">View all</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;