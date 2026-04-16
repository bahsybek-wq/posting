import React, { useState } from 'react';

const PostCard = ({ product, addToCart, onOpen }) => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleSendComment = (e) => {
    e.stopPropagation(); 
    if (comment.trim()) {
      setCommentsList([...commentsList, comment]);
      setComment('');
    }
  };

  return (
    <div className="post-card" onClick={onOpen} style={{ cursor: 'pointer' }}>
      <img 
        // 1. ПРОВЕРКА КАРТИНКИ: Если в Mokky нет ссылки, ставим заглушку с вопросом
        src={product.image || 'https://img.icons8.com/ios/100/000000/help.png'} 
        alt={product.title} 
        className="product-img" 
        // 2. ОБРАБОТКА ОШИБКИ: Если ссылка есть, но она битая (404), заменяем на вопрос
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = 'https://img.icons8.com/ios/100/000000/help.png';
        }}
      />
      <div className="product-info">
        {/* 3. ПРОВЕРКА ТЕКСТА: Если названия нет в базе, пишем "?" */}
        <h3>{product.title || 'Атауы жоқ ?'}</h3>
        
        {/* 4. ПРОВЕРКА ЦЕНЫ: Если цена пустая, ставим "?" */}
        <p className="price">{product.price ? `${product.price} ₸` : 'бағасы: ?'}</p>
        
        <button 
          className="add-to-cart-btn" 
          onClick={(e) => {
            e.stopPropagation(); 
            addToCart(product);
          }}
        >
          {/* Если данных нет, кнопка тоже может показывать вопрос */}
          {product.price ? 'Себетке қосу +' : '?'}
        </button>
      </div>

      <div className="comment-box" onClick={(e) => e.stopPropagation()}>
        <h4>Пікірлер ({commentsList.length})</h4>
        <div className="comments-display">
          {commentsList.length > 0 ? (
            commentsList.map((c, index) => (
              <p key={index} className="single-comment">💬 {c}</p>
            ))
          ) : (
            <p className="no-comments">Әзірге пікір жоқ...</p>
          )}
        </div>
        <div className="comment-input-group">
          <input 
            type="text" 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
            placeholder="Пікір жазыңыз..." 
          />
          <button onClick={handleSendComment}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;