import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cronica from './pages/Cronica';
import Nota from './pages/Nota';
import Articulo from './pages/Articulo';
import Links from './pages/Links';
import Encuesta from './pages/Encuesta';
import Nosotros from './pages/Nosotros';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cronica" element={<Cronica />} />
          <Route path="/nota" element={<Nota />} />
          <Route path="/articulo" element={<Articulo />} />
          <Route path="/links" element={<Links />} />
          <Route path="/encuesta" element={<Encuesta />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;