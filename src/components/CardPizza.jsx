import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CardPizza({ pizza }) {
  const { addToCart } = useCart();
  const id = pizza.id || "p001";
  const imagenLocal = `${import.meta.env.BASE_URL}img/${id}.jpg`;
  const imagen = pizza.img || imagenLocal;
  const ingredientes = Array.isArray(pizza.ingredients)
    ? pizza.ingredients
    : [];

  return (
    <article
      style={{
        width: "100%",
        maxWidth: "340px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        margin: "0 auto",
        backgroundColor: "#fff",
        color: "#333",
      }}
    >
      <img
        src={imagen}
        alt={`Pizza ${pizza.name}`}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = imagenLocal;
        }}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          display: "block",
        }}
      />

      <div style={{ padding: "15px" }}>
        <h3>Pizza {pizza.name}</h3>
        <hr />
        <p><strong>Ingredientes:</strong></p>
        <ul>
          {ingredientes.map((ingrediente, index) => (
            <li key={`${ingrediente}-${index}`}>{ingrediente}</li>
          ))}
        </ul>
        <hr />
        <h3>Precio: ${Number(pizza.price || 0).toLocaleString("es-CL")}</h3>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <Link
            to="/pizza/p001"
            style={{
              display: "inline-block",
              backgroundColor: "#e63946",
              color: "#fff",
              textDecoration: "none",
              marginTop: "8px",
              padding: "10px 16px",
              borderRadius: "6px",
            }}
          >
            Ver más
          </Link>

          <button
            type="button"
            onClick={() => addToCart(pizza)}
            style={{
              backgroundColor: "#198754",
              color: "#fff",
              border: "none",
              marginTop: "8px",
              padding: "10px 16px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </article>
  );
}

export default CardPizza;
