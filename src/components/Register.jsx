import { useState } from "react";

function Register({ onRegister, onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    onRegister();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Crear cuenta</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Correo electrónico</label>

            <input
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>

            <input
              type="password"
              placeholder="Mínimo 6 caracteres"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Confirmar contraseña</label>

            <input
              type="password"
              placeholder="Repite tu contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-button">
            Crear cuenta
          </button>
        </form>

        <p className="register-text">
          ¿Ya tienes una cuenta?
        </p>

        <button
          type="button"
          className="register-button"
          onClick={onBack}
        >
          Volver a iniciar sesión
        </button>
      </div>
    </div>
  );
}

export default Register;