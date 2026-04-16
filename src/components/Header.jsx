import React from 'react';

const Header = ({ cartCount, setCategory, activeCategory, onCartClick, onAuthClick, currentUser }) => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Кнопка входа слева */}
        <button className="auth-btn" onClick={onAuthClick}>
          {currentUser ? 'Профиль' : 'Кіру'}
        </button>
        
        {/* Логотип строго по центру */}
        <h1 className="logo-title" onClick={() => setCategory('Барлығы')}>BAHANDI</h1>
        
        {/* Корзина справа (красная) */}
        <button className="cart-badge" onClick={onCartClick}>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" 
            alt="cart" 
            style={{ width: '18px', filter: 'invert(1)' }} 
          />
          <span>{cartCount}</span>
        </button>
      </div>

      {/* Меню категорий */}
      <nav className="categories-nav">
        <button 
          className={`category-btn ${activeCategory === 'Комбо' ? 'active' : ''}`} 
          onClick={() => setCategory('Комбо')}
        >
          Комбо
        </button>
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
      </nav>
    </header>
  );
};

export default Header;