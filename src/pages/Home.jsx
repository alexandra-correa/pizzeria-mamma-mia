import Header from "../components/Header";
import Navbar from "../components/Navbar";
import CardPizza from "../components/CardPizza";
import { pizzas } from "../data/pizzas";

function Home() {
  return (
    <>
      <Navbar />
      <Header />

      <main className="home">
        <h2 className="section-title">Nuestras Pizzas</h2>

        <div className="pizza-container">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
