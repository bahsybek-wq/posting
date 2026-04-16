import React from 'react';

const Header = ({ cartCount, setCategory, onCartClick, onAuthClick, currentUser }) => {
  return (
    <header className="header">
      {/* ВЕРХНЯЯ ЧАСТЬ: Вход - ЛОГО - Корзина */}
      <div className="header-top">
        <div className="auth-section">
          {currentUser ? (
            <div className="user-badge">
              👤 {currentUser.email.split('@')[0]}
            </div>
          ) : (
            <button onClick={onAuthClick} className="auth-btn">
              Кіру / Тіркелу
            </button>
          )}
        </div>

        <h1 
          className="logo-title" 
          onClick={() => setCategory('Барлығы')}
        >
          BAHANDI
        </h1>

        <div className="cart-section">
          <div className="cart-badge-new" onClick={onCartClick}>
             Корзина 🛒 <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </div>

      {/* НИЖНЯЯ ЧАСТЬ: Категории (скролл) */}
      <nav className="categories-nav">
        <button onClick={() => setCategory('Барлығы')} className="category-item">Барлығы</button>
        <button onClick={() => setCategory('Бургеры')} className="category-item">Бургерлер</button>
        <button onClick={() => setCategory('Напитки')} className="category-item">Сусындар</button>
        <button onClick={() => setCategory('Комбо')} className="category-item">Комбо</button>
      </nav>
    </header>
  );
};

export default Header;