import React from 'react';

const Header = ({ cartCount, setCategory, activeCategory, onCartClick, onAuthClick, currentUser }) => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Кнопка входа слева */}
        <button className="auth-btn" onClick={onAuthClick}>
          {currentUser ? '👤 Профиль' : 'Кіру'}
        </button>
        
        {/* Логотип строго по центру (за счет CSS) */}
        <h1 className="logo-title" onClick={() => setCategory('Барлығы')}>BAHANDI</h1>
        
        {/* Корзина справа */}
        <div className="cart-badge" onClick={onCartClick}>
          🛒 <span>{cartCount}</span>
        </div>
      </div>

      {/* Полоса категорий снизу */}
      <nav className="categories-nav">
        <button 
          className={`category-btn ${activeCategory === 'Бургеры' ? 'active' : ''}`} 
          onClick={() => setCategory('Бургеры')}
        >
          Бургерлер
        </button>
        <button 
          className={`category-btn ${activeCategory === 'Напитки' ? 'active' : ''}`} 
          onClick={() => setCategory('Напитки')}
        >
          Сусындар
        </button>
        <button 
          className={`category-btn ${activeCategory === 'Комбо' ? 'active' : ''}`} 
          onClick={() => setCategory('Комбо')}
        >
          Комбо
        </button>
      </nav>
    </header>
  );
};

export default Header;