// SignupPage.js içinde (örnek)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignupPage.css';
import signupImage from './signup-image.jpg';

const SignupPage = () => {
  const [name, setName] = useState(""); // Yeni state: ad
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Şifreler eşleşmiyor.");
      return;
    }

    const newUser = {
      name: name, // Adı da kullanıcı nesnesine ekle
      email: email,
      password: password,
    };

    localStorage.setItem("user", JSON.stringify(newUser));
    localStorage.setItem("loggedInName", name); // Giriş yapıldığında kullanılacak adı da kaydet
    navigate("/"); // Veya dashboard'a yönlendirin
  };

  return (
    <div className="form-container">
      <div className="blue-area">
        <img src={signupImage} alt="Kayıt Ol İllüstrasyonu" />
        <h2>Yeni Hesap Oluşturun!</h2>
        <p>Sınav sistemine kaydolarak öğrenmeye başlayın.</p>
      </div>
      <div className="form-column">
        <h2>Kayıt Ol</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Ad Soyad:</label> {/* Ad için input alanı */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input-field"
            />
          </div>
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
          <div className="form-group">
            <label>Şifreyi Onayla:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-btn">Kayıt Ol</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <div className="link-text">
          <p>Zaten bir hesabınız var mı? <a href="/login">Giriş Yapın</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;