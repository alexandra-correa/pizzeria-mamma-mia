import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");

  const handleLogin = () => {
    alert("¡Inicio de sesión exitoso!");
    setPage("home");
  };

  const handleCreateAccount = () => {
    alert("¡Cuenta creada exitosamente!");
    setPage("login");
  };

  const goToRegister = () => {
    setPage("register");
  };

  const goToLogin = () => {
    setPage("login");
  };

  if (page === "register") {
    return (
      <Register
        onRegister={handleCreateAccount}
        onBack={goToLogin}
      />
    );
  }

  if (page === "home") {
    return <Home />;
  }

  return (
    <Login
      onLogin={handleLogin}
      onRegister={goToRegister}
    />
  );
}

export default App;