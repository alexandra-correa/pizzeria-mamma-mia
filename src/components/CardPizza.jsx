function CardPizza({ name, price, ingredients, img }) {
  return (
    <article className="pizza-card">
      <img src={img} alt={`Pizza ${name}`} className="pizza-image" />

      <div className="pizza-content">
        <h2>Pizza {name}</h2>
        <p className="ingredients-title">Ingredientes:</p>

        <ul className="ingredients-list">
          {ingredients.map((ingredient, index) => (
            <li key={`${ingredient}-${index}`}>{ingredient}</li>
          ))}
        </ul>

        <p className="pizza-price">
          ${price.toLocaleString("es-CL")}
        </p>

        <div className="pizza-buttons">
          <button type="button" className="details-button">Ver más</button>
          <button type="button" className="add-button">Añadir</button>
        </div>
      </div>
    </article>
  );
}

export default CardPizza;
