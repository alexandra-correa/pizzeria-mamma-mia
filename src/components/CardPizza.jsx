import { Link } from "react-router-dom";

function CardPizza({ pizza }) {
  const id = pizza.id || "p001";
  const imagenLocal = `${import.meta.env.BASE_URL}img/${id}.jpg`;
  const img = pizza.img || "";
  const imagenFinal = img.includes("firebasestorage") ? imagenLocal : img;

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
        src={imagenFinal}
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
          {(Array.isArray(pizza.ingredients) ? pizza.ingredients : []).map(
            (ingredient, index) => (
              <li key={`${ingredient}-${index}`}>{ingredient}</li>
            )
          )}
        </ul>
        <hr />
        <h3>Precio: ${Number(pizza.price || 0).toLocaleString("es-CL")}</h3>

        <Link
          to="/pizza/p001"
          className="nav-button"
          style={{
            display: "inline-block",
            backgroundColor: "#e63946",
            color: "white",
            textDecoration: "none",
            marginTop: "8px",
          }}
        >
          Ver más
        </Link>
      </div>
    </article>
  );
}

export default CardPizza;
