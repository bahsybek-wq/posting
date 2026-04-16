import React, { useState, useEffect } from 'react';
import PostCard from './PostCard'; 

const PostList = ({ addToCart, activeCategory, onProductClick, onError }) => {
  const [items, setItems] = useState([]);

  const BURGER_API = "https://3e1e936b9e856668.mokky.dev/Burger";
  const DRINKS_API = "https://21d8329a23c4d0f3.mokky.dev/Drinks";
  const COMBO_API = "https://ac11cd5f8932088a.mokky.dev/Combo";

  useEffect(() => {
    // Деректерді алуды бастаймыз
    Promise.all([
      fetch(BURGER_API).then(res => { if(!res.ok) throw new Error(); return res.json() }),
      fetch(DRINKS_API).then(res => { if(!res.ok) throw new Error(); return res.json() }),
      fetch(COMBO_API).then(res => { if(!res.ok) throw new Error(); return res.json() })
    ])
    .then(([burgers, drinks, combo]) => {
      const allItems = [
        ...(Array.isArray(burgers) ? burgers : []),
        ...(Array.isArray(drinks) ? drinks : []),
        ...(Array.isArray(combo) ? combo : [])
      ];
      
      if (allItems.length === 0 && onError) {
        onError(); 
      }

      setItems(allItems);
    })
    .catch((err) => {
      console.error("Деректерді алу қатесі:", err);
      if (onError) onError(); 
    });
  }, [onError]); 

  const filteredItems = activeCategory === 'Барлығы' || activeCategory === 'Все'
    ? items 
    : items.filter(item => {
        const itemCat = item.category ? item.category.toLowerCase() : "";
        const activeCat = activeCategory.toLowerCase();

        if (activeCat === 'сусындар' || activeCat === 'напитки') {
          return itemCat === 'напитки' || itemCat === 'сусындар';
        }
        if (activeCat === 'бургерлер' || activeCat === 'бургеры') {
          return itemCat === 'бургеры' || itemCat === 'бургерлер';
        }
        if (activeCat === 'комбо') {
          return itemCat === 'комбо';
        }
        return itemCat === activeCat;
      });

  // ЖҮКТЕЛУ (LOADING) ШАРТЫ ОСЫ ЖЕРДЕН АЛЫП ТАСТАЛДЫ

  return (
    <main className="container" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '30px',
          justifyContent: 'center',
          justifyItems: 'center',
          width: '100%'
        }}>
          {filteredItems.map((item, index) => (
            <PostCard 
              key={`${item.id}-${index}`} 
              product={item} 
              addToCart={addToCart} 
              onOpen={() => onProductClick(item)} 
            />
          ))}
      </div>
    </main>
  );
};

export default PostList;