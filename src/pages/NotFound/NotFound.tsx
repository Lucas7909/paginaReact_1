import { Link } from "react-router-dom";
import './NotFound.css';
import Button from '../../components/Button/Button';

function NotFound() {
  return (
    <div className="container">
      <h1>404</h1>
      <p>Página no encontrada</p>

       <Link to="/">
        <Button texto = "Volver al inicio"/>
      </Link>
    </div>
  );
}

export default NotFound;