import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const obtenerPizza = async () => {
      try {
        const respuesta = await fetch("http://localhost:5000/api/pizzas/p001");

        if (!respuesta.ok) {
          throw new Error("No se pudo obtener la pizza.");
        }

        const datos = await respuesta.json();
        setPizza(datos);
      } catch {
        setError("No se pudo cargar la pizza. Verifica que el backend esté funcionando.");
      } finally {
        setLoading(false);
      }
    };

    obtenerPizza();
  }, []);

  if (loading) return <p style={{ textAlign: "center", padding: "40px" }}>Cargando pizza...</p>;
  if (error) return <p role="alert" style={{ textAlign: "center", color: "red", padding: "40px" }}>{error}</p>;
  if (!pizza) return <p>No se encontró la pizza.</p>;

  const imagenLocal = "/pizzeria-mamma-mia/img/p001.jpg";
  const imagenInicial = pizza.img?.includes("firebasestorage") ? imagenLocal : pizza.img;

  return (
    <main style={{ padding: "40px 20px", minHeight: "60vh" }}>
      <article style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px", maxWidth: "1000px", margin: "0 auto", border: "1px solid #ddd", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 14px rgba(0,0,0,0.08)" }}>
        <img
          src={imagenInicial}
          alt={pizza.name}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = imagenLocal;
          }}
          style={{ width: "100%", height: "100%", minHeight: "300px", objectFit: "cover" }}
        />
        <div style={{ padding: "24px" }}>
          <h1>Pizza {pizza.name}</h1>
          <p style={{ lineHeight: "1.6" }}>{pizza.desc || pizza.description || "Una deliciosa pizza de nuestra pizzería."}</p>
          <h2>Precio: ${Number(pizza.price || 0).toLocaleString("es-CL")}</h2>
          <h3>Ingredientes</h3>
          <ul>
            {(Array.isArray(pizza.ingredients) ? pizza.ingredients : []).map((ingrediente, index) => (
              <li key={`${ingrediente}-${index}`}>{ingrediente}</li>
            ))}
          </ul>
          <button type="button" style={{ width: "100%", padding: "14px", background: "#222", color: "#fff", border: "none", borderRadius: "6px", marginTop: "15px" }}>
            Añadir al carrito
          </button>
        </div>
      </article>
    </main>
  );
};

export default Pizza;
