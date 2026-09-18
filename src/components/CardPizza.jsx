function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="pizza-card">
      <img
        src={img}
        alt={`Pizza ${name}`}
        className="pizza-image"
      />

      <div className="pizza-content">
        <h2>Pizza {name}</h2>

        <p className="ingredients-title">
          Ingredientes:
        </p>

        <p className="ingredients">
          {ingredients.join(", ")}
        </p>

        <p className="pizza-price">
          ${price.toLocaleString("es-CL")}
        </p>

        <div className="pizza-buttons">
          <button className="details-button">
            Ver más 👀
          </button>

          <button className="add-button">
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;