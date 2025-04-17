import React, { useState } from 'react';
import './account-settings.css'; // CSS dosyasını import edin

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Şifre değiştirme mantığını burada uygulayın
    if (newPassword === confirmNewPassword) {
      setMessage('Şifre başarıyla değiştirildi!');
      // ... backend'e istek gönderme vb.
    } else {
      setMessage('Yeni şifreler eşleşmiyor.');
    }
  };

  return (
    <div className="settings-container">
      <h2>Şifre Değiştir</h2>
      <p>Güvenliğiniz için şifrenizi düzenli olarak değiştirmeniz önerilir.</p>
      <form className="password-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="oldPassword">Mevcut Şifre:</label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">Yeni Şifre:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmNewPassword">Yeni Şifreyi Onayla:</label>
          <input
            type="password"
            id="confirmNewPassword"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Şifreyi Değiştir</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default ChangePassword;