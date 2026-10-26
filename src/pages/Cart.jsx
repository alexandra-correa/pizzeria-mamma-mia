import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

function Cart() {
  const {
    cart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    total,
  } = useCart();

  const { token } = useUser();

  return (
    <main className="cart-page">
      <h1>Detalles del pedido</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">
          Tu carrito está vacío. Ve al inicio y añade tus pizzas favoritas.
        </p>
      ) : (
        <div className="cart-list">
          {cart.map((pizza) => {
            const imagenLocal =
              `${import.meta.env.BASE_URL}img/${pizza.id}.jpg`;

            return (
              <article className="cart-item" key={pizza.id}>
                <img
                  src={pizza.img || imagenLocal}
                  alt={`Pizza ${pizza.name}`}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = imagenLocal;
                  }}
                />

                <div className="cart-item-info">
                  <h2>{pizza.name}</h2>
                  <p>
                    Precio unitario: $
                    {Number(pizza.price || 0).toLocaleString("es-CL")}
                  </p>
                  <p>
                    Subtotal: $
                    {(Number(pizza.price || 0) * pizza.quantity)
                      .toLocaleString("es-CL")}
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
                    onClick={() => addToCart(pizza)}
                    aria-label={`Aumentar cantidad de ${pizza.name}`}
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => removeFromCart(pizza.id)}
                  aria-label={`Eliminar ${pizza.name} del carrito`}
                >
                  Eliminar
                </button>
              </article>
            );
          })}
        </div>
      )}

      <div className="cart-total">
        <h2>Total: ${total.toLocaleString("es-CL")}</h2>
        <button
          type="button"
          className="pay-button"
          disabled={!token || cart.length === 0}
          onClick={() => {
            if (token && cart.length > 0) {
              alert("¡Pedido listo para pagar!");
            }
          }}
        >
          Pagar
        </button>

        {!token && (
          <p>Debes iniciar sesión para pagar.</p>
        )}
      </div>
    </main>
  );
}

export default Cart;
