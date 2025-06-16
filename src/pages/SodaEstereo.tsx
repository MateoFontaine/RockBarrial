import React from 'react';
import { Calendar, MapPin, Users, AlertTriangle } from 'lucide-react';

const SodaEstereo: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mb-12">
          <img 
            src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Soda Stereo"
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg" />
          <div className="absolute bottom-8 left-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              Derrumbe en Obras
            </h1>
            <p className="text-xl text-gray-200">Soda Stereo 1987</p>
          </div>
        </div>

        {/* Key Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <Calendar className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">15 Nov 1987</div>
            <div className="text-sm text-gray-400">Fecha</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <MapPin className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">Obras</div>
            <div className="text-sm text-gray-400">Estadio</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <Users className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">1</div>
            <div className="text-sm text-gray-400">Víctima</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">Estructura</div>
            <div className="text-sm text-gray-400">Colapso</div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">El Accidente que Marcó una Era</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            El 15 de noviembre de 1987, durante un recital de Soda Stereo en el Estadio Obras Sanitarias, 
            una estructura metálica colapsó causando la muerte de una persona y dejando varios heridos. 
            Este trágico incidente ocurrió en pleno auge de la banda liderada por Gustavo Cerati, 
            Zeta Bosio y Charly Alberti.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">El Contexto</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            En 1987, Soda Stereo se encontraba en la cúspide de su carrera. El álbum "Signos" había sido 
            un éxito rotundo y la banda estaba realizando una extensa gira por Argentina. El Estadio Obras 
            Sanitarias era uno de los venues más importantes para los recitales de rock en Buenos Aires, 
            con capacidad para miles de espectadores.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">La Tragedia</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Durante el desarrollo del concierto, una estructura metálica instalada para el evento se desplomó 
            sobre parte del público. La víctima fatal fue un joven fanático de la banda que había acudido 
            al recital con gran expectativa. El accidente generó pánico entre los asistentes y obligó a 
            suspender inmediatamente el show.
          </p>

          <blockquote className="border-l-4 border-red-500 pl-4 my-8 text-gray-300 italic">
            "Fue un momento terrible. En pleno éxtasis del recital, de repente todo se transformó en 
            tragedia. Gustavo [Cerati] quedó visiblemente afectado por lo ocurrido."
            <cite className="block mt-2 text-sm text-gray-400">- Testimonio de un asistente</cite>
          </blockquote>

          <h3 className="text-2xl font-bold text-white mb-4">El Impacto en la Banda</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            El accidente afectó profundamente a los miembros de Soda Stereo, especialmente a Gustavo Cerati, 
            quien expresó su dolor y consternación por lo sucedido. La banda colaboró con las investigaciones 
            y expresó sus condolencias a la familia de la víctima. Este evento los marcó durante toda su carrera.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">Las Consecuencias</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            A raíz de este accidente, se comenzaron a revisar más estrictamente las medidas de seguridad 
            en los estadios y venues de conciertos. La industria del entretenimiento tuvo que enfrentar 
            la realidad de que la seguridad del público debía ser la prioridad absoluta en cualquier evento masivo.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">El Legado</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Aunque Soda Stereo continuó su exitosa carrera, el recuerdo de esta tragedia permaneció siempre 
            presente. La banda siempre mostró un compromiso especial con la seguridad en sus conciertos 
            posteriores, y el incidente sirvió como un punto de inflexión para mejorar los estándares 
            de seguridad en los espectáculos de rock en Argentina.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">Reflexión</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Este accidente demostró que incluso en los momentos de mayor gloria del rock nacional, 
            la tragedia podía presentarse sin previo aviso. La muerte de un fanático en un recital 
            de una de las bandas más importantes de la historia del rock argentino sirvió como 
            recordatorio de la fragilidad de la vida y la importancia de la seguridad en los eventos masivos.
          </p>
        </article>

        {/* Memorial Section */}
        <div className="mt-16 bg-gray-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">En Memoria</h3>
          <p className="text-gray-300 mb-6">
            En memoria del joven fanático que perdió la vida durante el recital de Soda Stereo 
            en Obras Sanitarias el 15 de noviembre de 1987.
          </p>
          <div className="text-red-500 font-bold text-lg">
            ✦ Para Siempre en Nuestra Memoria ✦
          </div>
        </div>
      </div>
    </div>
  );
};

export default SodaEstereo;