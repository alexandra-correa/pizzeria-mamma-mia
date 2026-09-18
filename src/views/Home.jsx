import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import heroPizza from "../assets/images/hero-pizza.jpg";
import margherita from "../assets/images/pizza-margherita.jpg";
import pepperoni from "../assets/images/pizza-pepperoni.jpg";
import hawaiana from "../assets/images/pizza-hawaiana.jpg";
import napolitana from "../assets/images/pizza-napolitana.jpg";
import vegetariana from "../assets/images/pizza-vegetariana.jpg";
import carnivora from "../assets/images/pizza-carnivora.jpg";

function Home() {
  const pizzas = [
    {
      name: "Pizza Margherita",
      description: "Salsa de tomate, mozzarella fresca y albahaca.",
      price: "$8.990",
      image: margherita,
    },
    {
      name: "Pizza Pepperoni",
      description: "Mozzarella, salsa de tomate y abundante pepperoni.",
      price: "$10.990",
      image: pepperoni,
    },
    {
      name: "Pizza Hawaiana",
      description: "Jamón, mozzarella, salsa de tomate y piña.",
      price: "$10.490",
      image: hawaiana,
    },
    {
      name: "Pizza Napolitana",
      description: "Tomate, mozzarella, jamón, aceitunas y orégano.",
      price: "$10.990",
      image: napolitana,
    },
    {
      name: "Pizza Vegetariana",
      description: "Verduras frescas, mozzarella, tomate y champiñones.",
      price: "$10.490",
      image: vegetariana,
    },
    {
      name: "Pizza Carnívora",
      description: "Pepperoni, carne, jamón, salame y mozzarella.",
      price: "$12.490",
      image: carnivora,
    },
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}

        <section
          className="hero"
          style={{ backgroundImage: `url(${heroPizza})` }}
        >
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <span className="hero-tag">PIZZA ARTESANAL</span>

            <h1>
              El verdadero sabor
              <br />
              de Italia
            </h1>

            <p>
              Pizzas artesanales preparadas con ingredientes frescos,
              masa casera y mucho amor.
            </p>

            <div className="hero-buttons">
              <a href="#menu" className="primary-button">
                Ver nuestro menú
              </a>

              <a href="#nosotros" className="secondary-button">
                Conócenos
              </a>
            </div>
          </div>
        </section>

        {/* DESTACADO */}

        <section className="featured">
          <div className="section-heading">
            <span>HECHO CON PASIÓN</span>

            <h2>
              Una pizza que
              <br />
              recordarás
            </h2>

            <p>
              Seleccionamos los mejores ingredientes para crear pizzas
              llenas de sabor y preparadas siempre al momento.
            </p>
          </div>

          <div className="featured-items">
            <div className="feature-item">
              <div className="feature-icon">🍅</div>
              <h3>Ingredientes frescos</h3>
              <p>
                Productos seleccionados para garantizar el mejor sabor.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🍕</div>
              <h3>Masa artesanal</h3>
              <p>
                Nuestra masa se prepara cuidadosamente para lograr la
                textura perfecta.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">❤️</div>
              <h3>Hecho con cariño</h3>
              <p>
                Cada pizza se prepara al momento pensando en nuestros
                clientes.
              </p>
            </div>
          </div>
        </section>

        {/* MENÚ */}

        <section className="menu-section" id="menu">
          <div className="section-heading menu-heading">
            <span>NUESTRO MENÚ</span>

            <h2>Las favoritas de Mamma Mía</h2>

            <p>
              Elige tu favorita y disfruta una pizza preparada especialmente
              para ti.
            </p>
          </div>

          <div className="pizza-grid">
            {pizzas.map((pizza) => (
              <article className="pizza-card" key={pizza.name}>
                <div className="pizza-image">
                  <img src={pizza.image} alt={pizza.name} />
                </div>

                <div className="pizza-info">
                  <div className="pizza-title">
                    <h3>{pizza.name}</h3>
                    <span>{pizza.price}</span>
                  </div>

                  <p>{pizza.description}</p>

                  <button className="order-button">
                    Pedir ahora
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* NOSOTROS */}

        <section className="about-section" id="nosotros">
          <div className="about-content">
            <span>TRADICIÓN Y SABOR</span>

            <h2>
              Bienvenidos a
              <br />
              Mamma Mía
            </h2>

            <p>
              En Mamma Mía creemos que una buena pizza comienza con buenos
              ingredientes. Por eso preparamos nuestras masas y
              seleccionamos cuidadosamente cada ingrediente para ofrecerte
              una experiencia llena de sabor.
            </p>

            <p>
              Nuestro objetivo es que cada visita se sienta como compartir
              una pizza entre amigos y familia.
            </p>

            <a href="#menu" className="about-button">
              Descubrir el menú
            </a>
          </div>
        </section>

        {/* PROMOCIÓN */}

        <section className="promo-section">
          <div className="promo-content">
            <span>PARA COMPARTIR</span>

            <h2>Una pizza siempre es una buena idea</h2>

            <p>
              Reúne a tus personas favoritas y disfruta el sabor de
              Mamma Mía.
            </p>

            <a href="#menu" className="primary-button">
              Ver pizzas
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;