import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";
import { UserProvider, useUser } from "./context/UserContext";
import "./App.css";

function AppContent() {
  const { token, login, logout } = useUser();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (correo) => {
    setEmail(correo);
    login();
    alert("¡Inicio de sesión exitoso!");
    navigate("/profile", { replace: true });
  };

  const handleRegister = (correo) => {
    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
    navigate("/login", { state: { email: correo }, replace: true });
  };

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/register"
          element={
            token ? (
              <Navigate to="/" replace />
            ) : (
              <Register onRegister={handleRegister} />
            )
          }
        />

        <Route
          path="/login"
          element={
            token ? (
              <Navigate to="/" replace />
            ) : (
              <Login
                key={location.key}
                onLogin={handleLogin}
              />
            )
          }
        />

        <Route path="/cart" element={<Cart />} />

        <Route path="/pizza/:id" element={<Pizza />} />

        <Route
          path="/profile"
          element={
            token ? (
              <Profile email={email} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <AppContent />
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
