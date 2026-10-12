import { useEffect, useState } from "react";
import { pizzaCart } from "../data/pizzas";

function Cart({ onTotalChange }) {
  const [cart, setCart] = useState(pizzaCart);

  const total = cart.reduce(
    (sum, pizza) => sum + pizza.price * pizza.quantity,
    0
  );

  useEffect(() => {
    onTotalChange(total);
  }, [total, onTotalChange]);

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((pizza) =>
        pizza.id === id
          ? { ...pizza, quantity: pizza.quantity + 1 }
          : pizza
      )
    );
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

  return (
    <main className="cart-page">
      <h1>Detalles del pedido</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Tu carrito está vacío.</p>
      ) : (
        <div className="cart-list">
          {cart.map((pizza) => (
            <article className="cart-item" key={pizza.id}>
              <img src={pizza.img} alt={`Pizza ${pizza.name}`} />

              <div className="cart-item-info">
                <h2>{pizza.name}</h2>
                <p>
                  Precio unitario: ${pizza.price.toLocaleString("es-CL")}
                </p>
                <p>
                  Subtotal: $
                  {(pizza.price * pizza.quantity).toLocaleString("es-CL")}
                </p>
              </div>

              <div className="quantity-controls">
                <button
                  type="button"
                  onClick={() => decreaseQuantity(pizza.id)}
                  aria-label={`Disminuir cantidad de ${pizza.name}`}
                >
                  -
                </button>

                <span>{pizza.quantity}</span>

                <button
                  type="button"
                  onClick={() => increaseQuantity(pizza.id)}
                  aria-label={`Aumentar cantidad de ${pizza.name}`}
                >
                  +
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="cart-total">
        <h2>Total: ${total.toLocaleString("es-CL")}</h2>
        <button type="button" className="pay-button">
          Pagar
        </button>
      </div>
    </main>
  );
}

export default Cart;