import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Pizza = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const obtenerPizza = async () => {
      setLoading(true);
      setError("");
      setPizza(null);

      try {
        const respuesta = await fetch(
          `http://localhost:5000/api/pizzas/${encodeURIComponent(id)}`,
          { signal: controller.signal }
        );

        if (!respuesta.ok) {
          throw new Error("No se pudo obtener la pizza.");
        }

        const datos = await respuesta.json();
        setPizza(datos);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(
            "No se pudo cargar la pizza. Verifica que el backend esté funcionando."
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    obtenerPizza();

    return () => controller.abort();
  }, [id]);

  if (loading) {
    return (
      <p style={{ textAlign: "center", padding: "40px" }}>
        Cargando pizza...
      </p>
    );
  }

  if (error) {
    return (
      <p
        role="alert"
        style={{ textAlign: "center", color: "red", padding: "40px" }}
      >
        {error}
      </p>
    );
  }

  if (!pizza) {
    return <p>No se encontró la pizza.</p>;
  }

  const imagenLocal = `${import.meta.env.BASE_URL}img/${id}.jpg`;
  const imagenInicial =
    pizza.img?.includes("firebasestorage") || !pizza.img
      ? imagenLocal
      : pizza.img;

  const ingredientes = Array.isArray(pizza.ingredients)
    ? pizza.ingredients
    : [];

  return (
    <main style={{ padding: "40px 20px", minHeight: "60vh" }}>
      <article
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1000px",
          margin: "0 auto",
          border: "1px solid #ddd",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
        }}
      >
        <img
          src={imagenInicial}
          alt={`Pizza ${pizza.name}`}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = imagenLocal;
          }}
          style={{
            width: "100%",
            height: "100%",
            minHeight: "300px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "24px" }}>
          <h1>Pizza {pizza.name}</h1>
          <p style={{ lineHeight: "1.6" }}>
            {pizza.desc ||
              pizza.description ||
              "Una deliciosa pizza de nuestra pizzería."}
          </p>

          <h2>
            Precio: ${Number(pizza.price || 0).toLocaleString("es-CL")}
          </h2>

          <h3>Ingredientes</h3>
          <ul>
            {ingredientes.map((ingrediente, index) => (
              <li key={`${ingrediente}-${index}`}>{ingrediente}</li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => addToCart(pizza)}
            style={{
              width: "100%",
              padding: "14px",
              background: "#198754",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              marginTop: "15px",
              cursor: "pointer",
            }}
          >
            Añadir al carrito
          </button>
        </div>
      </article>
    </main>
  );
};

export default Pizza;
