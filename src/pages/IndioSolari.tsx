import React from 'react';
import { Calendar, MapPin, Users, Wind } from 'lucide-react';

const IndioSolari: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mb-12">
          <img 
            src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Indio Solari Olavarría"
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg" />
          <div className="absolute bottom-8 left-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              Tragedia en Olavarría
            </h1>
            <p className="text-xl text-gray-200">El último recital del Indio</p>
          </div>
        </div>

        {/* Key Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <Calendar className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">19 Mar 2017</div>
            <div className="text-sm text-gray-400">Fecha</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <MapPin className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">Olavarría</div>
            <div className="text-sm text-gray-400">Ciudad</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <Users className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">2</div>
            <div className="text-sm text-gray-400">Víctimas</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <Wind className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">Viento</div>
            <div className="text-sm text-gray-400">Factor clave</div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">El Día que el Viento Cambió Todo</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            El 19 de marzo de 2017, el aeródromo de Olavarría se convirtió en el escenario de una nueva 
            tragedia del rock nacional. Durante el recital de Carlos "Indio" Solari, fuertes vientos 
            provocaron el colapso de estructuras que causaron la muerte de dos personas y dejaron 
            decenas de heridos. Este sería el último concierto del líder de Los Redonditos de Ricota.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">El Evento Masivo</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            El recital del Indio Solari en Olavarría había generado una expectativa enorme. Se esperaban 
            más de 350.000 personas en lo que se promocionaba como "el recital del siglo". Fanáticos de 
            todo el país viajaron hasta la ciudad bonaerense para ver al mítico cantante, quien había 
            anunciado que sería uno de sus últimos shows.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">Las Condiciones Climáticas</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Durante toda la jornada, los vientos fueron intensos en la zona. A pesar de las advertencias 
            meteorológicas, el show continuó según lo programado. Las ráfagas de viento alcanzaron 
            velocidades de hasta 70 kilómetros por hora, poniendo en riesgo las estructuras temporales 
            instaladas para el evento.
          </p>

          <blockquote className="border-l-4 border-red-500 pl-4 my-8 text-gray-300 italic">
            "El viento era terrible, las lonas y estructuras se movían constantemente. Teníamos miedo, 
            pero nadie quería perderse el recital del Indio. Nadie imaginaba que terminaría así."
            <cite className="block mt-2 text-sm text-gray-400">- Testimonio de un asistente</cite>
          </blockquote>

          <h3 className="text-2xl font-bold text-white mb-4">La Tragedia</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Durante el desarrollo del concierto, una ráfaga de viento particularmente fuerte derribó 
            una estructura metálica y lonas que cayeron sobre el público. Dos personas perdieron la vida: 
            una mujer de 52 años y un hombre de 37 años. Además, más de 30 personas resultaron heridas, 
            algunas de gravedad.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">La Reacción del Indio</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Carlos Solari, visiblemente afectado por lo ocurrido, decidió suspender el resto del show. 
            En declaraciones posteriores, expresó su profundo dolor por las víctimas y anunció que no 
            volvería a realizar recitales masivos. "No puedo seguir poniendo en riesgo a la gente que 
            me quiere", declaró el músico.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">Las Investigaciones</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Las autoridades iniciaron investigaciones para determinar las responsabilidades en la 
            organización del evento. Se cuestionó la decisión de mantener el recital a pesar de las 
            condiciones climáticas adversas y se analizaron las medidas de seguridad implementadas. 
            El caso generó un debate sobre la responsabilidad en eventos masivos al aire libre.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">El Final de una Era</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            La tragedia de Olavarría marcó el final de los recitales masivos del Indio Solari. El músico, 
            que había sido el ídolo de multitudes durante décadas, decidió que no podía continuar 
            exponiendo a sus fanáticos a riesgos similares. Su última aparición pública fue para 
            expresar su dolor y su decisión de retirarse de los escenarios.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">El Legado</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            El recital de Olavarría quedó en la memoria como un momento bisagra en la historia del rock 
            nacional. Demostró una vez más que la seguridad en los eventos masivos debe ser prioritaria, 
            independientemente de la expectativa o la importancia del show. La decisión del Indio de 
            retirarse mostró su compromiso con la vida de sus seguidores por encima del espectáculo.
          </p>
        </article>

        {/* Memorial Section */}
        <div className="mt-16 bg-gray-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">En Memoria</h3>
          <p className="text-gray-300 mb-6">
            En memoria de las dos personas que perdieron la vida en el recital del Indio Solari 
            en Olavarría el 19 de marzo de 2017. Su recuerdo permanece en el corazón 
            de la comunidad ricoteca.
          </p>
          <div className="text-red-500 font-bold text-lg">
            ✦ Un Ángel para tu Soledad ✦
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndioSolari;