import React from 'react';

const CartModal = ({ cartItems, onClose, onRemove, onPlus, onMinus }) => {
  // Жалпы бағаны есептегенде санына (quantity) көбейтуді ұмытпаймыз
  const total = cartItems.reduce((sum, item) => sum + (Number(item.price) * (item.quantity || 1)), 0);

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <button onClick={onClose} style={closeBtnStyle}>✕</button>
        <h2 style={{ marginTop: 0 }}>Сіздің себетіңіз</h2>
        
        {cartItems.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '20px' }}>Себет әзірге бос</p>
        ) : (
          <div>
            <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
              {cartItems.map((item, index) => (
                <div key={index} style={cartItemStyle}>
                  <img src={item.image} alt={item.title} style={imgStyle} />
                  <div style={{ flex: 1, marginLeft: '12px' }}>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>{item.title}</p>
                    <p style={{ margin: '4px 0 0', color: '#00a651', fontWeight: 'bold' }}>
                      {item.price * (item.quantity || 1)} ₸
                    </p>
                    
                    {/* САНЫН БАСҚАРУ БӨЛІМІ (ҚОСЫЛДЫ) */}
                    <div style={quantityGroupStyle}>
                      <button onClick={() => onMinus(item.id)} style={countBtnStyle}>-</button>
                      <span style={{ fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>
                        {item.quantity || 1}
                      </span>
                      <button onClick={() => onPlus(item.id)} style={countBtnStyle}>+</button>
                    </div>
                  </div>
                  <button onClick={() => onRemove(item.id)} style={deleteBtnStyle}>Өшіру</button>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '2px solid #eee', marginTop: '15px', paddingTop: '10px' }}>
              <h3 style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
                <span>Жалпы:</span>
                <span>{total} ₸</span>
              </h3>
              <button style={orderBtnStyle} onClick={() => alert('Тапсырыс қабылданды!')}>
                Тапсырыс беру
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ЖАҢА СТИЛЬДЕР (ҚОСЫЛДЫ)
const quantityGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginTop: '8px'
};

const countBtnStyle = {
  background: '#f0f0f0',
  border: '1px solid #ddd',
  borderRadius: '4px',
  width: '24px',
  height: '24px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold'
};

// БҰРЫНҒЫ СТИЛЬДЕР
const modalOverlayStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, backdropFilter: 'blur(3px)' };
const modalContentStyle = { background: 'white', padding: '25px', borderRadius: '20px', width: '90%', maxWidth: '420px', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' };
const closeBtnStyle = { position: 'absolute', top: '15px', right: '15px', border: 'none', background: 'none', fontSize: '22px', cursor: 'pointer', color: '#888' };
const cartItemStyle = { display: 'flex', alignItems: 'center', marginBottom: '12px', borderBottom: '1px solid #f5f5f5', paddingBottom: '10px' };
const imgStyle = { width: '60px', height: '60px', objectFit: 'contain', borderRadius: '8px', background: '#f9f9f9' };
const deleteBtnStyle = { background: '#ff4d4d', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px' };
const orderBtnStyle = { width: '100%', background: '#00a651', color: 'white', border: 'none', padding: '14px', borderRadius: '12px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' };

export default CartModal;