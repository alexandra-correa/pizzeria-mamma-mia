import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar({ isLoggedIn = false, onLogout }) {
  const { total } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" style={{ color: "white", textDecoration: "none" }}>
          Pizzería Mamma Mia!
        </Link>

        <div className="navbar-buttons">
          <Link className="nav-button" to="/">Home</Link>

          {isLoggedIn ? (
            <>
              <Link className="nav-button" to="/profile">Profile</Link>
              <button type="button" className="nav-button" onClick={onLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="nav-button" to="/login">Login</Link>
              <Link className="nav-button" to="/register">Register</Link>
            </>
          )}

          <Link className="nav-button total-button" to="/cart">
            Total: ${total.toLocaleString("es-CL")}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
