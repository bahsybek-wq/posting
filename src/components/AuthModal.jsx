import React, { useState } from 'react';

const AuthModal = ({ onClose, onLogin }) => {
  const [isLoginView, setIsLoginView] = useState(true); // Кіру немесе Тіркелу режимі
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLoginView) {
      // КІРУ ЛОГИКАСЫ
      const savedUser = JSON.parse(localStorage.getItem('user'));
      if (savedUser && savedUser.email === email && savedUser.password === password) {
        onLogin(savedUser);
        alert('Қош келдіңіз!');
        onClose();
      } else {
        alert('Электрондық пошта немесе құпия сөз қате!');
      }
    } else {
      // ТІРКЕЛУ ЛОГИКАСЫ
      const newUser = { email, password };
      localStorage.setItem('user', JSON.stringify(newUser));
      alert('Тіркелу сәтті аяқталды! Енді жүйеге кіріңіз.');
      setIsLoginView(true);
    }
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button onClick={onClose} style={closeBtnStyle}>✕</button>
        <h2>{isLoginView ? 'Жүйеге кіру' : 'Тіркелу'}</h2>
        
        <form onSubmit={handleSubmit} style={formStyle}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            style={inputStyle} 
            required 
          />
          <input 
            type="password" 
            placeholder="Құпия сөз" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            style={inputStyle} 
            required 
          />
          <button type="submit" style={submitBtnStyle}>
            {isLoginView ? 'Кіру' : 'Тіркелу'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '15px' }}>
          {isLoginView ? 'Аккаунтыңыз жоқ па?' : 'Аккаунтыңыз бар ма?'} 
          <span 
            onClick={() => setIsLoginView(!isLoginView)} 
            style={{ color: '#00a651', cursor: 'pointer', fontWeight: 'bold', marginLeft: '5px' }}
          >
            {isLoginView ? 'Тіркелу' : 'Кіру'}
          </span>
        </p>
      </div>
    </div>
  );
};

// СТИЛЬДЕР
const overlayStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 3000 };
const modalStyle = { background: 'white', padding: '30px', borderRadius: '20px', width: '350px', position: 'relative' };
const closeBtnStyle = { position: 'absolute', top: '15px', right: '15px', border: 'none', background: 'none', fontSize: '20px', cursor: 'pointer' };
const formStyle = { display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' };
const inputStyle = { padding: '12px', borderRadius: '10px', border: '1px solid #ddd', outline: 'none' };
const submitBtnStyle = { background: '#00a651', color: 'white', border: 'none', padding: '12px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' };

export default AuthModal;