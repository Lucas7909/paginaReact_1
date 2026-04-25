import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from './pages/Inicio/Inicio';
import Contacto from './pages/Contacto/Contacto';
import Productos from './pages/Productos/Productos';
import ProductoDetalle from './pages/ProductoDetalle/ProductoDetalle';
import NotFound from './pages/NotFound/NotFound';

import Navbar from './components/Navbar/Navbar';

import './App.css';

function App() {
  return (
    <BrowserRouter basename="/paginaReact_1">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;