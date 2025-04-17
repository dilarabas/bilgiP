import React, { useState } from 'react';
import './account-settings.css'; // CSS dosyasını import edin

const NotificationSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);

  const handleEmailChange = (e) => {
    setEmailNotifications(e.target.checked);
  };

  const handlePushChange = (e) => {
    setPushNotifications(e.target.checked);
  };

  const handleSmsChange = (e) => {
    setSmsNotifications(e.target.checked);
  };

  const handleSaveSettings = () => {
    // Bildirim ayarlarını kaydetme mantığını burada uygulayın
    console.log('Email Bildirimleri:', emailNotifications);
    console.log('Push Bildirimleri:', pushNotifications);
    console.log('SMS Bildirimleri:', smsNotifications);
    alert('Bildirim ayarları kaydedildi!');
  };

  return (
    <div className="settings-container">
      <h2>Bildirim Ayarları</h2>
      <p>Hangi tür bildirimleri almak istediğinizi seçin.</p>
      <div className="notification-options">
        <div className="notification-item">
          <input
            type="checkbox"
            id="email"
            checked={emailNotifications}
            onChange={handleEmailChange}
          />
          <label htmlFor="email">E-posta Bildirimleri</label>
        </div>
        <div className="notification-item">
          <input
            type="checkbox"
            id="push"
            checked={pushNotifications}
            onChange={handlePushChange}
          />
          <label htmlFor="push">Push Bildirimleri</label>
        </div>
        <div className="notification-item">
          <input
            type="checkbox"
            id="sms"
            checked={smsNotifications}
            onChange={handleSmsChange}
          />
          <label htmlFor="sms">SMS Bildirimleri</label>
        </div>
      </div>
      <button onClick={handleSaveSettings} className="submit-button">Ayarları Kaydet</button>
    </div>
  );
};

export default NotificationSettings;