import React, { useState } from 'react';

const ProductModal = ({ product, onClose, addToCart }) => {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleAddComment = () => {
    if (comment.trim()) {
      setCommentsList([...commentsList, comment]);
      setComment("");
    }
  };

  if (!product) return null;

  return (
    <div style={overlayStyle} onClick={onClose}> {/* Фонды басқанда жабылу үшін */}
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}> {/* Терезені басқанда жабылып қалмау үшін */}
        <button onClick={onClose} style={closeBtnStyle}>✕</button>
        
        <div style={contentStyle}>
          {/* Сол жағы - Сурет */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            <img src={product.image} alt={product.title} style={imageStyle} />
          </div>

          {/* Оң жағы - Ақпарат */}
          <div style={{ flex: 1, paddingLeft: '20px', minWidth: '300px' }}>
            <h2 style={{ color: '#00a651', marginBottom: '10px' }}>{product.title}</h2>
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>{product.price} ₸</p>
            
            {/* МЫНА ЖЕРГЕ ӨЗГЕРІС ЕНГІЗІЛДІ: */}
            <div style={{ margin: '15px 0' }}>
              <h4 style={{ marginBottom: '5px' }}>Құрамы:</h4>
              <p style={{ color: '#666', lineHeight: '1.5', fontSize: '15px' }}>
                {product.description || "Бұл бургердің құрамы туралы ақпарат жақын арада қосылады."}
              </p>
            </div>
            
            <button 
              onClick={() => {
                addToCart(product);
                alert("Себетке қосылды!"); // Пайдаланушыға белгі беру
              }} 
              style={addBtnStyle}
            >
              Себетке қосу +
            </button>

            <hr style={{ margin: '20px 0', border: '0.5px solid #eee' }} />

            {/* Пікірлер бөлімі */}
            <h4 style={{ marginBottom: '10px' }}>Пікірлер ({commentsList.length})</h4>
            <div style={commentListStyle}>
              {commentsList.length === 0 ? (
                <p style={{ color: '#999', fontSize: '14px' }}>Әзірге пікір жоқ...</p>
              ) : (
                commentsList.map((c, i) => (
                  <p key={i} style={commentItemStyle}>
                    <span style={{ color: '#00a651' }}>●</span> {c}
                  </p>
                ))
              )}
            </div>
            
            <div style={{ display: 'flex', marginTop: '15px' }}>
              <input 
                type="text" 
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Пікір жазыңыз..." 
                style={inputStyle}
                onKeyPress={(e) => e.key === 'Enter' && handleAddComment()} // Enter-ді басқанда қосу
              />
              <button onClick={handleAddComment} style={okBtnStyle}>OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// СТИЛЬДЕР (Сен жазған стильдерге кішкене толықтырулар)
const overlayStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 };
const modalStyle = { background: 'white', padding: '30px', borderRadius: '20px', width: '850px', position: 'relative', maxWidth: '95%', maxHeight: '90vh', overflowY: 'auto' };
const closeBtnStyle = { position: 'absolute', top: '15px', right: '15px', border: 'none', background: 'none', fontSize: '24px', cursor: 'pointer', color: '#999' };
const contentStyle = { display: 'flex', flexWrap: 'wrap', gap: '10px' };
const imageStyle = { width: '100%', height: 'auto', borderRadius: '15px', objectFit: 'cover', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' };
const addBtnStyle = { width: '100%', background: '#00a651', color: 'white', border: 'none', padding: '14px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px', transition: '0.3s' };
const commentListStyle = { height: '120px', overflowY: 'auto', background: '#f9f9f9', padding: '15px', borderRadius: '10px', border: '1px solid #f0f0f0' };
const commentItemStyle = { margin: '8px 0', fontSize: '14px', borderBottom: '1px solid #f0f0f0', paddingBottom: '5px' };
const inputStyle = { flex: 1, padding: '10px', borderRadius: '8px 0 0 8px', border: '1px solid #ddd', outline: 'none' };
const okBtnStyle = { background: '#00a651', color: 'white', border: 'none', padding: '0 20px', borderRadius: '0 8px 8px 0', cursor: 'pointer' };

export default ProductModal;