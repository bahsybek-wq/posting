import React, { useState, useEffect } from 'react'; // useEffect қосылды
import Header from './componets/Header';
import PostList from './componets/PostList';
import Footer from './componets/Footer';
import CartModal from './componets/CartModal'; 
import ProductModal from './componets/ProductModal';
import AuthModal from './componets/AuthModal'; 
import './Assets/style/style.css'; 

function App() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('Барлығы');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false); 
  const [user, setUser] = useState(null); 
  const [isError, setIsError] = useState(false);

  // --- URL-ДІ ӨЗГЕРТУ ЛОГИКАСЫ ---
  useEffect(() => {
    // Категория атын URL-ге сәйкестендіру (кіші әріппен)
    const categoryPath = category.toLowerCase();
    
    let newUrl = window.location.pathname;
    
    if (category === 'Барлығы' || category === 'Все') {
      newUrl = '/'; // Басты бетке қайтару
    } else {
      // Мысалы: /burgers немесе /drinks
      newUrl = `/${categoryPath}`; 
    }

    // Браузер тарихын жаңарту (бетті қайта жүктемей URL-ді өзгертеді)
    window.history.pushState({ category }, '', newUrl);

  }, [category]); // Категория өзгерген сайын орындалады

  // Себет функциялары (өзгеріссіз қалды)
  const addToCart = (product) => {
    setCart((prev) => {
      const isItemInCart = prev.find((item) => item.id === product.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const plusQuantity = (id) => {
    setCart((prev) => prev.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const minusQuantity = (id) => {
    setCart((prev) => prev.map((item) => item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  
  return (
    <div className="App">
      <Header 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        setCategory={setCategory} 
        onCartClick={() => setIsCartOpen(true)} 
        onAuthClick={() => setIsAuthOpen(true)}
        currentUser={user}
      />
      
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#00a651' }}>{category}</h2>

        {isError ? (
          <div style={{ textAlign: 'center', padding: '100px' }}>
            <span style={{ fontSize: '120px', color: '#00a651', fontWeight: 'bold' }}>?</span>
            <p style={{ fontSize: '18px' }}>Деректерді жүктеу мүмкін болмады...</p>
            <button onClick={() => window.location.reload()} className="add-to-cart-btn">Қайта жүктеу</button>
          </div>
        ) : (
          <PostList 
            addToCart={addToCart} 
            activeCategory={category} 
            onProductClick={(product) => setSelectedProduct(product)} 
            onError={() => setIsError(true)} 
          />
        )}
      </main>

      <Footer />

      {/* Модалкалар өзгеріссіз... */}
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} onLogin={(userData) => setUser(userData)} />}
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} addToCart={addToCart} />}
      {isCartOpen && <CartModal cartItems={cart} onClose={() => setIsCartOpen(false)} onRemove={removeFromCart} onPlus={plusQuantity} onMinus={minusQuantity} />}
    </div>
  );
}

export default App;