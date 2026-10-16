import { Link } from "react-router-dom";

function Profile({ email, onLogout }) {
  return (
    <main className="login-container">
      <section className="login-card">
        <h1>Mi perfil</h1>
        <p>Has iniciado sesión con el correo:</p>
        <p><strong>{email || "usuario@ejemplo.com"}</strong></p>

        <button
          type="button"
          className="login-button"
          onClick={onLogout}
        >
          Cerrar sesión
        </button>

        <p className="register-text">
          <Link to="/">Volver a la página principal</Link>
        </p>
      </section>
    </main>
  );
}

export default Profile;
