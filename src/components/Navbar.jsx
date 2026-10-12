function Navbar({ total = 25840 }) {
  const token = false;

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: "#222",
        color: "white",
        width: "100%",
        minHeight: "70px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="navbar-container"
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "15px 25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          Pizzería Mamma Mia!
        </div>

        <div
          className="navbar-buttons"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <button className="nav-button">Home</button>

          {token ? (
            <>
              <button className="nav-button">Profile</button>
              <button className="nav-button">Logout</button>
            </>
          ) : (
            <>
              <button className="nav-button">Login</button>
              <button className="nav-button">Register</button>
            </>
          )}

          <button className="nav-button total-button">
            Total: ${total.toLocaleString("es-CL")}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;