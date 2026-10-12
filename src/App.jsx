import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cartTotal, setCartTotal] = useState(25840);

  return (
    <>
      <Navbar total={cartTotal} />
      <Cart onTotalChange={setCartTotal} />
      <Footer />
    </>
  );
}

export default App;