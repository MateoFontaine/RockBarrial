import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('Mensaje enviado correctamente. Te contactaremos pronto.');
    setFormData({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contacto
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes información sobre alguna tragedia del rock nacional? ¿Quieres compartir 
            tu testimonio? Contáctanos para que podamos preservar juntos la memoria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Envíanos un Mensaje</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-300 mb-2">
                  Asunto
                </label>
                <select
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Seleccionar asunto</option>
                  <option value="testimonio">Testimonio Personal</option>
                  <option value="informacion">Información Adicional</option>
                  <option value="correccion">Corrección de Datos</option>
                  <option value="colaboracion">Colaboración</option>
                  <option value="prensa">Consulta de Prensa</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={6}
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                  placeholder="Comparte tu mensaje, testimonio o información..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center group"
              >
                <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-300">info@rockbarrial.com</p>
                    <p className="text-gray-300">redaccion@rockbarrial.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Teléfono</h3>
                    <p className="text-gray-300">+54 11 1234-5678</p>
                    <p className="text-sm text-gray-400">Lunes a Viernes, 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Ubicación</h3>
                    <p className="text-gray-300">Buenos Aires, Argentina</p>
                    <p className="text-sm text-gray-400">Trabajamos de forma remota</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Síguenos en Redes</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="#" 
                  className="flex items-center space-x-3 p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors group"
                >
                  <Facebook className="h-6 w-6 text-blue-500 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium">Facebook</span>
                </a>

                <a 
                  href="#" 
                  className="flex items-center space-x-3 p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors group"
                >
                  <Twitter className="h-6 w-6 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium">Twitter</span>
                </a>

                <a 
                  href="#" 
                  className="flex items-center space-x-3 p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors group"
                >
                  <Instagram className="h-6 w-6 text-pink-500 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium">Instagram</span>
                </a>

                <a 
                  href="#" 
                  className="flex items-center space-x-3 p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors group"
                >
                  <Youtube className="h-6 w-6 text-red-500 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium">YouTube</span>
                </a>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Nuestra Misión</h2>
              <p className="text-gray-300 leading-relaxed">
                RockBarrial existe para preservar la memoria de las víctimas de las tragedias 
                del rock nacional argentino. Trabajamos con respeto, rigor periodístico y 
                compromiso con la verdad para que estos eventos nunca sean olvidados y 
                para que contribuyan a prevenir futuras tragedias.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">¿Cómo Puedes Colaborar?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Testimonios</h3>
              <p className="text-gray-300 text-sm">
                Comparte testimonios de primera mano sobre las tragedias documentadas.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Información</h3>
              <p className="text-gray-300 text-sm">
                Proporciona datos, correcciones o información adicional verificable.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Difusión</h3>
              <p className="text-gray-300 text-sm">
                Ayuda a difundir el mensaje para mantener viva la memoria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;