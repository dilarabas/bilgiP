import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Doğru import yolu

import {
  FaHome,
  FaTachometerAlt,
  FaUser
} from 'react-icons/fa';

function Sidebar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="top-nav navbar navbar-expand-lg bg-body-tertiary"> {/* top-nav class'ı korundu */}
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/">BilgiP</Link> {/* logo class'ı korundu */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="menu navbar-nav me-auto mb-2 mb-lg-0"> {/* menu class'ı korundu */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FaHome className="icon" /> Ana Sayfa {/* icon class'ı korundu */}
              </Link>
            </li>
            {user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    <FaTachometerAlt className="icon" /> Gösterge Paneli {/* icon class'ı korundu */}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/account">
                    <FaUser className="icon" /> Hesap {/* icon class'ı korundu */}
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="auth-buttons navbar-nav"> {/* auth-buttons class'ı korundu */}
            <Link className="nav-link nav-button" to="/login"> {/* nav-button class'ı korundu */}
              Giriş Yap
            </Link>
            <Link className="nav-link nav-button" to="/signup"> {/* nav-button class'ı korundu */}
              Kayıt Ol
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;