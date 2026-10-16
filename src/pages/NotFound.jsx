import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="login-container">
      <section className="login-card">
        <h1 style={{ fontSize: "64px", color: "#e63946", margin: "0" }}>
          404
        </h1>
        <h2>¡Ups! Esta pizza no está en el menú</h2>
        <p>
          La página que buscas no existe o fue movida.
        </p>
        <Link
          to="/"
          className="login-button"
          style={{
            display: "block",
            boxSizing: "border-box",
            textDecoration: "none",
            marginTop: "24px",
          }}
        >
          Volver al inicio
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
