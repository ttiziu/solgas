import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import type { FC } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Productos from './pages/Productos';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import SpinnerPage from './pages/SpinnerPage';
import { Spinner } from './components/ui/spinner';
import './styles/globals.css';
import { useState, useEffect } from 'react';

const AppRoutes: FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(false);
  const [blur, setBlur] = useState<boolean>(false);
  const [hideSpinner, setHideSpinner] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setBlur(true);
    setHideSpinner(false);
    const timeout = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setBlur(false);
        setHideSpinner(true);
      }, 250); // tiempo para suavizar salida (antes 400)
    }, 350); // Duración del spinner (antes 600)
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <div className={`app-blur-overlay${blur ? ' app-blur-active' : ''}`}></div>
      <div className={`app-spinner-overlay${!loading && !blur ? ' app-spinner-overlay-leave' : ''}`} style={{display: hideSpinner ? 'none' : undefined}}>
        {loading && <Spinner size="size-8" color="#222" />} {/* Color oscuro visible */}
      </div>
      {!loading && (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/spinner" element={<SpinnerPage />} />
        </Routes>
      )}
    </>
  );
};

const App: FC = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  );
};

export default App;
