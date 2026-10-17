import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";

const API_URL = "http://localhost:5000/api/pizzas";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const obtenerPizzas = async () => {
      try {
        const respuesta = await fetch(API_URL);

        if (!respuesta.ok) {
          throw new Error("No se pudieron obtener las pizzas.");
        }

        const datos = await respuesta.json();

        const listaPizzas = Array.isArray(datos)
          ? datos
          : Array.isArray(datos.value)
            ? datos.value
            : Array.isArray(datos.pizzas)
              ? datos.pizzas
              : [];

        setPizzas(listaPizzas);
      } catch (error) {
        console.error("Error al obtener las pizzas:", error);
        setError(
          "No se pudo conectar con la API. Verifica que el backend esté funcionando en el puerto 5000."
        );
      } finally {
        setLoading(false);
      }
    };

    obtenerPizzas();
  }, []);

  return (
    <>
      <Header />

      <main style={{ padding: "30px 20px", minHeight: "60vh" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Nuestras pizzas
        </h2>

        {loading && (
          <p style={{ textAlign: "center" }}>Cargando pizzas...</p>
        )}

        {error && (
          <p role="alert" style={{ textAlign: "center", color: "red" }}>
            {error}
          </p>
        )}

        {!loading && !error && pizzas.length === 0 && (
          <p style={{ textAlign: "center" }}>
            No hay pizzas disponibles.
          </p>
        )}

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {pizzas.map((pizza) => (
            <CardPizza key={pizza.id} pizza={pizza} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
