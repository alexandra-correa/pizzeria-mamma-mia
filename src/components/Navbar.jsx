import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

function Navbar() {
  const { total } = useCart();
  const { token, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-brand"
          style={{ color: "white", textDecoration: "none" }}
        >
          Pizzería Mamma Mia!
        </Link>

        <div className="navbar-buttons">
          <Link className="nav-button" to="/">Home</Link>

          {token ? (
            <>
              <Link className="nav-button" to="/profile">Profile</Link>
              <button
                type="button"
                className="nav-button"
                onClick={handleLogout}
              >
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
