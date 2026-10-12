import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

// Componentes de los hitos anteriores:
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <Cart />
      <Footer />
    </>
  );
}

export default App;
