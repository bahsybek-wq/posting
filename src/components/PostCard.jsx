import React from 'react';

const PostCard = ({ product, addToCart, onOpen }) => {
  return (
    <div className="post-card" onClick={onOpen}>
      <img 
        src={product.image || 'https://img.icons8.com/ios/100/000000/help.png'} 
        alt={product.title} 
        className="product-img" 
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = 'https://img.icons8.com/ios/100/000000/help.png';
        }}
      />
      <div className="product-info">
        <h3>{product.title || 'Атауы жоқ ?'}</h3>
        
        <div className="price-row">
          <span className="price">
            {product.price ? `${product.price} ₸` : '?'}
          </span>
          
          <button 
            className="add-btn-small" 
            onClick={(e) => {
              e.stopPropagation(); 
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