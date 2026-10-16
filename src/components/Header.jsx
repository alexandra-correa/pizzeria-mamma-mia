function Header() {
  const bannerImage = `${import.meta.env.BASE_URL}img/p001.jpg`;

  return (
    <header
      style={{
        minHeight: "320px",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.65)), url("${bannerImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        padding: "40px 20px",
      }}
    >
      <div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "15px" }}>
          ¡Pizzería Mamma Mia!
        </h1>
        <p style={{ fontSize: "1.15rem", margin: 0 }}>
          Las mejores pizzas con ingredientes frescos y deliciosos.
        </p>
      </div>
    </header>
  );
}

export default Header;
