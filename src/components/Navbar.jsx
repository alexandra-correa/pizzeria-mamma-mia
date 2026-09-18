function Navbar() {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          🍕 Pizzería Mamma Mia!
        </div>

        <div className="navbar-buttons">
          <button className="nav-button">
            🍕 Home
          </button>

          {token ? (
            <>
              <button className="nav-button">
                🔓 Profile
              </button>

              <button className="nav-button">
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <button className="nav-button">
                🔐 Login
              </button>

              <button className="nav-button">
                🔐 Register
              </button>
            </>
          )}

          <button className="nav-button total-button">
            🛒 Total: ${total.toLocaleString("es-CL")}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;