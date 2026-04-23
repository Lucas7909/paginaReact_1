import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link> | 
      <Link to="/productos">Productos</Link> | 
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}

export default Navbar;