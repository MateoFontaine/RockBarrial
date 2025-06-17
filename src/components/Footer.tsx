import React from 'react';
import { Link } from 'react-router-dom';
import { Volume2, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Volume2 className="h-8 w-8 text-red-500" />
              <div className="text-2xl font-bold">
                <span className="text-white">Rock</span>
                <span className="text-red-500">Barrial</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Revista digital dedicada a preservar la memoria de las tragedias que marcaron 
              la historia del rock nacional argentino. Un homenaje a las víctimas y sus familias.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/rockbarrial.magazine?igsh=dWE1NzZ6eDVkcDd3" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><Link to="" className="text-gray-400 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="" className="text-gray-400 hover:text-white transition-colors">Cromañón</Link></li>
              <li><Link to="" className="text-gray-400 hover:text-white transition-colors">Soda Stereo</Link></li>
              <li><Link to="" className="text-gray-400 hover:text-white transition-colors">La Renga</Link></li>
              <li><Link to="" className="text-gray-400 hover:text-white transition-colors">Historia</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <div className="space-y-2">
              <a href="mailto:info@rockbarrial.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                info@rockbarrial.com
              </a>
              <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">
                Formulario de Contacto
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} RockBarrial. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">
            Sitio web dedicado a la memoria y el respeto por las víctimas del rock nacional argentino.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;