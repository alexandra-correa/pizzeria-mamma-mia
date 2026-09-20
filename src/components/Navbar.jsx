function Navbar() {
  const total = 25000;
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
        <div
          className="navbar-brand"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Pizzería Mamma Mia!
        </div>

        <div
          className="navbar-buttons"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button
            className="nav-button"
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "none",
              padding: "10px 12px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Home
          </button>

          {token ? (
            <>
              <button
                className="nav-button"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                  padding: "10px 12px",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Profile
              </button>

              <button
                className="nav-button"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                  padding: "10px 12px",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="nav-button"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                  padding: "10px 12px",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Login
              </button>

              <button
                className="nav-button"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                  padding: "10px 12px",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Register
              </button>
            </>
          )}

          <button
            className="nav-button total-button"
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid white",
              padding: "10px 12px",
              fontSize: "14px",
              cursor: "pointer",
              borderRadius: "6px",
            }}
          >
            Total: ${total.toLocaleString("es-CL")}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;