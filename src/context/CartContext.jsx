import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((currentCart) => {
      const existingPizza = currentCart.find((item) => item.id === pizza.id);

      if (existingPizza) {
        return currentCart.map((item) =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...pizza, quantity: 1 }];
    });
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((pizza) =>
          pizza.id === id
            ? { ...pizza, quantity: pizza.quantity - 1 }
            : pizza
        )
        .filter((pizza) => pizza.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((pizza) => pizza.id !== id));
  };

  const total = cart.reduce(
    (sum, pizza) => sum + Number(pizza.price || 0) * pizza.quantity,
    0
  );

  const value = useMemo(
    () => ({ cart, addToCart, decreaseQuantity, removeFromCart, total }),
    [cart, total]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe utilizarse dentro de CartProvider.");
  }

  return context;
}
