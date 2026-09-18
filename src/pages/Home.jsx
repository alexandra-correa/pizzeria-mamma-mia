import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

function Home() {
  return (
    <>
      <Header />

      <main className="home">
        <h2 className="section-title">Nuestras Pizzas</h2>

        <div className="pizza-container">

          <CardPizza
            name="Napolitana"
            price={5950}
            ingredients={[
              "mozzarella",
              "tomates",
              "jamón",
              "orégano",
            ]}
            img="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80"
          />

          <CardPizza
            name="Española"
            price={6950}
            ingredients={[
              "mozzarella",
              "gorgonzola",
              "parmesano",
              "provolone",
            ]}
            img="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80"
          />

          <CardPizza
            name="Pepperoni"
            price={6950}
            ingredients={[
              "mozzarella",
              "pepperoni",
              "orégano",
            ]}
            img="https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80"
          />

        </div>
      </main>
    </>
  );
}

export default Home;