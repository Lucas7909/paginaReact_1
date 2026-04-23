import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';


function Inicio() {
  return (
    <div className="container">
      <h1>Bienvenido a El Corsario Tech 🖥️</h1>

      <p>
        Encontrá las mejores computadoras, notebooks y accesorios al mejor precio.
        Equipos ideales para gaming, trabajo y estudio.
      </p>

      <h2>🔥 Productos destacados</h2>

      <div className="productos">
        <Card variante="inicio">
          <img
            src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
            alt="PC Gamer"
            width="100%"
          />
          <h3>PC Gamer</h3>
          <p>Alto rendimiento para juegos exigentes</p>
        </Card>

          <Card variante="inicio">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
            alt="Notebook"
            width="100%"
          />
          <h3>Notebook</h3>
          <p>Ideal para estudio y trabajo</p>
        </Card>
      </div>

      <br />

      <Link to="/productos">
        <Button texto= "Ver todos los productos"/>
      </Link>
    </div>
  );
}

export default Inicio;
