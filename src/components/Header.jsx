import React from 'react';

const Header = ({ cartCount, setCategory, onCartClick, onAuthClick, currentUser }) => {
  return (
    <header className="header" style={headerStyle}>
      <div className="header-container" style={containerStyle}>
        
        {/* 1. СОЛ ЖАҚ: ТІРКЕЛУ/КІРУ */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
          {currentUser ? (
            <div style={userBadgeStyle}>
              👤 {currentUser.email.split('@')[0]}
            </div>
          ) : (
            <button onClick={onAuthClick} style={authBtnStyle}>
              Кіру / Тіркелу
            </button>
          )}
        </div>

        {/* 2. ОРТАЛЫҚ БӨЛІМ: ҮЛКЕН ЛОГОТИП + МӘЗІР */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
          <h1 
            className="logo" 
            onClick={() => setCategory('Барлығы')}
            style={logoStyle}
          >
            BAHANDI
          </h1>

          <nav className="nav-menu" style={{ display: 'flex', gap: '30px' }}>
            <button onClick={() => setCategory('Бургеры')} style={navBtnStyle}>Бургерлер</button>
            <button onClick={() => setCategory('Напитки')} style={navBtnStyle}>Сусындар</button>
            <button onClick={() => setCategory('Комбо')} style={navBtnStyle}>Комбо</button>
          </nav>
        </div>

        {/* 3. ОҢ ЖАҚ: ҮЛКЕН СЕБЕТ */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <div 
            className="cart-badge" 
            onClick={onCartClick} 
            style={cartBadgeStyle}
          >
            Корзина 🛒 <span style={cartCountStyle}>{cartCount}</span>
          </div>
        </div>
        
      </div>
    </header>
  );
};

// --- ҮЛКЕЙТІЛГЕН СТИЛЬДЕР ---
const headerStyle = {
  background: '#00a651',
  padding: '25px 0', // Биіктігін үлкейттік
  color: 'white',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  boxShadow: '0 4px 15px rgba(0,0,0,0.15)'
};

const containerStyle = {
  maxWidth: '1400px', // Енін кеңейттік
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 40px'
};

const logoStyle = {
  cursor: 'pointer',
  margin: 0,
  fontSize: '40px', // Логотипті қатты үлкейттік
  fontWeight: '900',
  letterSpacing: '3px',
  color: 'white',
  textTransform: 'uppercase'
};

const authBtnStyle = {
  background: 'rgba(255, 255, 255, 0.2)',
  border: '1px solid white',
  color: 'white',
  padding: '8px 20px',
  borderRadius: '25px',
  cursor: 'pointer',
  fontSize: '15px',
  fontWeight: '600'
};

const userBadgeStyle = {
  background: 'white',
  color: '#00a651',
  padding: '8px 20px',
  borderRadius: '25px',
  fontWeight: 'bold',
  fontSize: '15px'
};

const navBtnStyle = {
  background: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  fontSize: '20px', // Мәзір жазуларын үлкейттік
  fontWeight: '700', // Жуандығын арттырдық
  transition: 'transform 0.2s'
};

const cartBadgeStyle = {
  background: '#ff4d4d',
  padding: '12px 25px', // Себет батырмасын үлкейттік
  borderRadius: '30px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: '18px',
  fontWeight: 'bold'
};

const cartCountStyle = {
  background: 'white',
  color: '#ff4d4d',
  padding: '2px 10px',
  borderRadius: '50%',
  fontSize: '16px',
  marginLeft: '5px'
};

export default Header;