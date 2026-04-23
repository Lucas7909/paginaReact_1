import './Card.css';

interface CardProps {
  children: React.ReactNode;
  variante?: 'inicio' | 'productos' | 'detalle';
}

function Card({ children, variante = 'productos' }: CardProps) {
  return (
    <div className={`card ${variante}`}>
      {children}
    </div>
  );
}

export default Card;