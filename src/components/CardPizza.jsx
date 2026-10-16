function CardPizza({ pizza }) {
  const id = pizza.id || "p001";
  const imagenLocal = `/pizzeria-mamma-mia/img/${id}.jpg`;
  const img = pizza.img || "";
  const imagenFinal = img.includes("firebasestorage") ? imagenLocal : img;

  return (
    <div style={{ width: "280px", border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden", margin: "15px", backgroundColor: "#fff", color: "#333" }}>
      <img
        src={imagenFinal}
        alt={`Pizza ${pizza.name}`}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = imagenLocal;
        }}
        style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
      />
      <div style={{ padding: "15px" }}>
        <h3>Pizza {pizza.name}</h3>
        <hr />
        <p><strong>Ingredientes:</strong></p>
        <ul>
          {(Array.isArray(pizza.ingredients) ? pizza.ingredients : []).map((ingredient, index) => (
            <li key={`${ingredient}-${index}`}>{ingredient}</li>
          ))}
        </ul>
        <hr />
        <h3>Precio: ${Number(pizza.price || 0).toLocaleString("es-CL")}</h3>
        <button type="button">Ver más</button>
      </div>
    </div>
  );
}

export default CardPizza;
