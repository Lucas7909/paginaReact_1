import './contacto.css';
import Button from '../../components/Button/Button';

function Contacto() {
  return (
    <div className="container">
      <h1>Contacto</h1>

      <p>¿Tenés alguna consulta? Escribinos y te respondemos a la brevedad.</p>

      <form>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea placeholder="Escribí tu mensaje..." required></textarea>

        <Button texto="Enviar" type="submit" />
      </form>

      <br />

      <h3>📍 Información</h3>
      <p>Email: contacto@corsariotech.com</p>
      <p>Teléfono: +54 291 1234567</p>
      <p>Bahía Blanca, Buenos Aires</p>
    </div>
  );
}

export default Contacto;