import { Link } from 'react-router-dom';
import './Productos.css';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

function Productos() {
  const productos = [
    {
      id: 1,
      nombre: "PC Gamer i5",
      precio: 850000,
      imagen: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
    },
    {
      id: 2,
      nombre: "PC Oficina",
      precio: 450000,
      imagen: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
      id: 3,
      nombre: "Notebook Lenovo",
      precio: 600000,
      imagen: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
      id: 4,
      nombre: "Monitor 24 pulgadas",
      precio: 300000,
      imagen: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
    }
  ];

  return (
    <div className="container">
      <h1>Productos</h1>

      <div className="productos">
        {productos.map((p) => (
          <Card variante="productos" key={p.id}>
            <img src={p.imagen} alt={p.nombre} width="100%" />
            <h3>{p.nombre}</h3>
            <p>${p.precio}</p>

            <Link to={`/producto/${p.id}`}>
              <Button texto="Ver detalle" />
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Productos;