import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
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
import { pizzaCart } from "./data/pizzas";
import "./App.css";

const totalInicial = pizzaCart.reduce(
  (suma, pizza) => suma + pizza.price * pizza.quantity,
  0
);

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [total, setTotal] = useState(totalInicial);
  const navigate = useNavigate();

  const handleLogin = (correo) => {
    setEmail(correo);
    setIsLoggedIn(true);
    alert("¡Inicio de sesión exitoso!");
    navigate("/profile");
  };

  const handleRegister = (correo) => {
    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
    navigate("/login", { state: { email: correo } });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    navigate("/login");
  };

  return (
    <>
      <Navbar
        total={total}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={<Register onRegister={handleRegister} />}
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="/cart"
          element={<Cart onTotalChange={setTotal} />}
        />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route
          path="/profile"
          element={
            isLoggedIn ? (
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
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
