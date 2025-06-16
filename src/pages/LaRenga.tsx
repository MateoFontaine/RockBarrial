import React from 'react';
import { Calendar, MapPin, Users, AlertCircle } from 'lucide-react';

const LaRenga: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mb-12">
          <img 
            src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="La Renga"
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg" />
          <div className="absolute bottom-8 left-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              Tragedias en La Renga
            </h1>
            <p className="text-xl text-gray-200">2011-2016: Años difíciles</p>
          </div>
        </div>

        {/* Key Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <Calendar className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">2011-2016</div>
            <div className="text-sm text-gray-400">Período</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <MapPin className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">Varios</div>
            <div className="text-sm text-gray-400">Lugares</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <Users className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">3</div>
            <div className="text-sm text-gray-400">Víctimas</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <AlertCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">Múltiples</div>
            <div className="text-sm text-gray-400">Incidentes</div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">Los Años Oscuros de La Renga</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Entre 2011 y 2016, los recitales de La Renga se vieron marcados por una serie de incidentes 
            trágicos que costaron la vida a tres personas. Estos eventos convirtieron un período que 
            debería haber sido de celebración para la banda en años de dolor y reflexión sobre la 
            seguridad en los conciertos de rock.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">Primer Incidente - 2011</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            El primer incidente trágico ocurrió durante un recital en 2011, cuando un fanático perdió 
            la vida en circunstancias relacionadas con la aglomeración de personas y problemas de 
            seguridad en el evento. Este primer caso alertó sobre la necesidad de mejorar los 
            protocolos de seguridad en los conciertos de la banda.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">Segundo Incidente - 2014</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            En 2014, otro incidente mortal se produjo durante un recital de La Renga. Las investigaciones 
            posteriores revelaron problemas similares a los del incidente anterior: falta de control en 
            el acceso, problemas de evacuación y medidas de seguridad insuficientes para la magnitud 
            del evento y la intensidad de los fanáticos de la banda.
          </p>

          <blockquote className="border-l-4 border-red-500 pl-4 my-8 text-gray-300 italic">
            "Los recitales de La Renga siempre fueron intensos, pero nadie esperaba que la pasión 
            por la música terminara en tragedia. Era necesario un cambio urgente en cómo se 
            organizaban estos eventos."
            <cite className="block mt-2 text-sm text-gray-400">- Periodista especializado en rock</cite>
          </blockquote>

          <h3 className="text-2xl font-bold text-white mb-4">Tercer Incidente - 2016</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            El último incidente fatal ocurrió en 2016, confirmando un patrón preocupante en los 
            conciertos de la banda. Esta tercera muerte generó una crisis profunda tanto en La Renga 
            como en la industria del entretenimiento, obligando a replantear completamente la forma 
            en que se organizaban los eventos masivos de rock.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">La Reacción de la Banda</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Los miembros de La Renga expresaron su profundo dolor por las pérdidas humanas ocurridas 
            en sus conciertos. La banda comenzó a trabajar activamente con organizadores y autoridades 
            para implementar medidas de seguridad más estrictas. Gustavo "Chizzo" Nápoli, líder de 
            la banda, manifestó públicamente su compromiso con la seguridad de los fanáticos.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">Cambios Implementados</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            A partir de estos incidentes, se implementaron nuevos protocolos de seguridad para los 
            recitales de La Renga. Estos incluían mejor control de accesos, más personal de seguridad, 
            planes de evacuación más claros y colaboración estrecha con fuerzas policiales y servicios 
            de emergencia. La banda también comenzó a seleccionar más cuidadosamente los venues para 
            sus presentaciones.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">El Impacto en la Industria</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Los incidentes en los recitales de La Renga tuvieron un impacto significativo en toda la 
            industria del rock nacional. Otras bandas y organizadores comenzaron a revisar sus propios 
            protocolos de seguridad. Se establecieron nuevas normativas y controles más estrictos 
            para eventos musicales masivos en todo el país.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">La Reflexión</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Estos eventos trágicos sirvieron como un llamado de atención para toda la comunidad del 
            rock argentino. Demostraron que la pasión y la energía de los conciertos no deben estar 
            reñidas con la seguridad y el cuidado de la vida humana. La música debe unir, celebrar 
            y emocionar, pero nunca poner en riesgo la integridad de quienes la disfrutan.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">El Presente</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Desde 2016, La Renga ha continuado su carrera con un enfoque renovado en la seguridad. 
            Los conciertos siguen siendo intensos y emotivos, pero ahora se desarrollan bajo 
            estrictos protocolos que priorizan la vida y la seguridad de los asistentes por encima 
            de cualquier otra consideración.
          </p>
        </article>

        {/* Memorial Section */}
        <div className="mt-16 bg-gray-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">En Memoria</h3>
          <p className="text-gray-300 mb-6">
            En memoria de las tres personas que perdieron la vida en recitales de La Renga 
            entre 2011 y 2016. Su recuerdo impulsa el compromiso permanente con la seguridad 
            en los espectáculos musicales.
          </p>
          <div className="text-red-500 font-bold text-lg">
            ✦ Despedazado por Mil Partes ✦
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaRenga;