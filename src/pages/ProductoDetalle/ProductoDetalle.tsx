import { useParams, Link } from 'react-router-dom';
import './ProductoDetalle.css';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

function ProductoDetalle() {
  const { id } = useParams();

  const productos = [
    {
      id: "1",
      nombre: "PC Gamer i5",
      precio: 850000,
      descripcion: "Ideal para juegos exigentes y alto rendimiento.",
      imagen: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
    },
    {
      id: "2",
      nombre: "PC Oficina",
      precio: 450000,
      descripcion: "Perfecta para tareas diarias, estudio y trabajo.",
      imagen: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
      id: "3",
      nombre: "Notebook Lenovo",
      precio: 600000,
      descripcion: "Portátil, liviana y potente para uso diario.",
      imagen: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
      id: "4",
      nombre: "Monitor 24 pulgadas",
      precio: 300000,
      descripcion: "Pantalla Full HD ideal para trabajo y gaming.",
      imagen: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
    }
  ];

  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return <h1>Producto no encontrado</h1>;
  }

  return (
    <div className="container">
      <Card variante="detalle">
      <h1>{producto.nombre}</h1>

      <img src={producto.imagen} alt={producto.nombre} width="300px" />

      <p><strong>Precio:</strong> ${producto.precio}</p>
      <p>{producto.descripcion}</p>

      <br />

      <Link to="/productos">
        <Button texto="Volver a productos"/>
      </Link>
      </Card>
    </div>
  );
}

export default ProductoDetalle;