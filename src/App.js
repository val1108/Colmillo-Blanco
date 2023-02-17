import "./App.css";
import Inicio from "./components/Inicio";
import Conocenos from "./components/Conocenos";
import Servicios from "./components/Servicios";
import Productos from "./components/Productos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Inicio />
      <Conocenos />
      <Servicios />
      <Productos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
