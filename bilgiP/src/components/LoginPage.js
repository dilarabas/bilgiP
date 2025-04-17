import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginPage.css';
import loginImage from './signup-image.jpg';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      localStorage.setItem("loggedInName", user.name); // Giriş başarılıysa adı kaydet
      navigate("/");
    } else {
      setError("Geçersiz e-posta veya şifre.");
    }
  };

  return (
    <div className="form-container">
      <div className="blue-area">
        <img src={loginImage} alt="Giriş Yap İllüstrasyonu"/>
        <h2>Hoş Geldiniz!</h2>
        <p>Sınav sistemine giriş yapın ve bilgilerinize erişin.</p>
      </div>
      <div className="form-column">
        <h2>Giriş Yap</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Şifre:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-btn">Giriş Yap</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <div className="link-text">
          <p>Henüz hesabınız yok mu? <a href="/signup">Kayıt Olun</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;