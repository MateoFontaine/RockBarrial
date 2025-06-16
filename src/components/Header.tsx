import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Volume2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Crónica', path: '/cronica' },
    { name: 'Nota', path: '/nota' },
    { name: 'Artículo', path: '/articulo' },
    { name: 'Links', path: '/links' },
    { name: 'Encuesta', path: '/encuesta' },
    { name: 'Nosotros', path: '/nosotros' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-red-700/95 backdrop-blur-sm border-b border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left Side */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Volume2 className="h-6 w-6 text-white group-hover:text-yellow-300 transition-colors" />
            <div className="text-xl font-bold">
              <span className="text-white">Rock</span>
              <span className="text-yellow-300">Barrial</span>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-yellow-400 text-red-800'
                    : 'text-white hover:text-yellow-300 hover:bg-red-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-white hover:text-yellow-300 hover:bg-red-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-red-600">
            <div className="grid grid-cols-2 gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-yellow-400 text-red-800'
                      : 'text-white hover:text-yellow-300 hover:bg-red-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;