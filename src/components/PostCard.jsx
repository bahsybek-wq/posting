import React from 'react';

const PostCard = ({ product, addToCart, onOpen }) => {
  return (
    <div className="post-card" onClick={onOpen}>
      <img 
        className="product-img"
        src={product.image || 'https://via.placeholder.com/150'} 
        alt={product.title} 
      />
      <div className="product-info">
        <h3>{product.title || 'Атауы жоқ'}</h3>
        <div className="price-row">
          <span className="price">{product.price ? `${product.price} ₸` : '?'}</span>
          <button 
            className="add-btn-small" 
            onClick={(e) => {
              e.stopPropagation(); // Чтобы не открывалось модальное окно при нажатии на плюс
              addToCart(product);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;