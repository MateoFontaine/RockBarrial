import React from 'react';
import { Calendar, MapPin, Zap, Music } from 'lucide-react';

const BuenosAiresVivo: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mb-12">
          <img 
            src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Buenos Aires Vivo 3"
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg" />
          <div className="absolute bottom-8 left-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              Buenos Aires Vivo 3
            </h1>
            <p className="text-xl text-gray-200">Tragedia eléctrica en 1993</p>
          </div>
        </div>

        {/* Key Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <Calendar className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">6 Dic 1993</div>
            <div className="text-sm text-gray-400">Fecha</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <MapPin className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">Buenos Aires</div>
            <div className="text-sm text-gray-400">Ciudad</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <Zap className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">1</div>
            <div className="text-sm text-gray-400">Víctima</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <Music className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">Festival</div>
            <div className="text-sm text-gray-400">Masivo</div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">La Tragedia Eléctrica del Festival</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            El 6 de diciembre de 1993, durante la realización del festival Buenos Aires Vivo 3, 
            una electrocución fatal conmocionó al mundo del rock nacional argentino. Este evento, 
            que había sido concebido como una celebración de la música local, se convirtió en 
            escenario de una tragedia que marcó la importancia de los estándares de seguridad 
            eléctrica en los espectáculos masivos.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">El Festival Buenos Aires Vivo</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Buenos Aires Vivo era una serie de festivales que se habían convertido en eventos 
            destacados del calendario musical argentino. La tercera edición prometía ser la más 
            grande hasta el momento, con la participación de importantes bandas del rock nacional 
            y una producción ambiciosa que incluía complejas instalaciones técnicas y eléctricas.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">Las Condiciones del Evento</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            El festival se desarrollaba al aire libre con múltiples escenarios y una extensa 
            infraestructura eléctrica necesaria para alimentar los equipos de sonido, iluminación 
            y otros elementos técnicos. La complejidad de la instalación eléctrica requería de 
            rigurosos protocolos de seguridad y mantenimiento constante.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">El Accidente</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Durante el desarrollo del festival, una persona sufrió una electrocución fatal debido 
            a problemas en la instalación eléctrica del evento. Las circunstancias exactas del 
            accidente revelaron fallas en los sistemas de seguridad eléctrica y en los protocolos 
            de protección para el personal y el público asistente.
          </p>

          <blockquote className="border-l-4 border-red-500 pl-4 my-8 text-gray-300 italic">
            "Era impensable que un festival de esa magnitud no tuviera las medidas de seguridad 
            eléctrica adecuadas. La muerte de esa persona cambió para siempre cómo se organizan 
            los eventos masivos en Argentina."
            <cite className="block mt-2 text-sm text-gray-400">- Técnico de sonido de la época</cite>
          </blockquote>

          <h3 className="text-2xl font-bold text-white mb-4">La Investigación</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Las autoridades iniciaron inmediatamente una investigación para determinar las causas 
            del accidente y establecer responsabilidades. Se analizaron las instalaciones eléctricas, 
            los protocolos de seguridad implementados y el cumplimiento de las normativas vigentes 
            para eventos de esa magnitud.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">El Impacto en la Industria</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            La tragedia del Buenos Aires Vivo 3 tuvo un impacto profundo en la industria del 
            entretenimiento argentino. Se establecieron nuevas normativas de seguridad eléctrica 
            para eventos masivos, incluyendo requisitos más estrictos para las instalaciones, 
            certificaciones obligatorias y controles regulares durante el desarrollo de los espectáculos.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">Los Cambios Normativos</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            A raíz de este accidente, se implementaron nuevos protocolos de seguridad eléctrica 
            que incluían la obligatoriedad de contar con electricistas matriculados en todos los 
            eventos, sistemas de protección diferencial, puestas a tierra adecuadas y planes de 
            contingencia específicos para emergencias eléctricas.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">La Profesionalización del Sector</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Este incidente contribuyó significativamente a la profesionalización del sector de 
            eventos y espectáculos en Argentina. Se comenzó a exigir mayor capacitación técnica 
            para el personal, certificaciones de seguridad y la participación de profesionales 
            especializados en todas las etapas de planificación y ejecución de eventos masivos.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">El Legado de Seguridad</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            La tragedia del Buenos Aires Vivo 3 dejó como legado un sistema más riguroso de 
            control y prevención de accidentes eléctricos en espectáculos. Aunque no pudo evitar 
            la pérdida de una vida humana, sirvió para que miles de eventos posteriores se 
            desarrollaran con estándares de seguridad mucho más altos.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">La Memoria y la Prevención</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            El recuerdo de esta tragedia continúa siendo un recordatorio constante para organizadores, 
            técnicos y autoridades sobre la importancia crítica de la seguridad eléctrica en eventos 
            masivos. Cada protocolo implementado, cada control realizado, honra la memoria de quien 
            perdió la vida en ese festival.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">Reflexión Final</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            La electrocución fatal en Buenos Aires Vivo 3 demostró que la creatividad y la pasión 
            por la música deben ir siempre acompañadas de la responsabilidad y el profesionalismo 
            en materia de seguridad. No hay espectáculo que valga más que una vida humana, y esta 
            tragedia sirvió para recordárselo a toda una industria.
          </p>
        </article>

        {/* Memorial Section */}
        <div className="mt-16 bg-gray-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">En Memoria</h3>
          <p className="text-gray-300 mb-6">
            En memoria de la persona que perdió la vida por electrocución durante el festival 
            Buenos Aires Vivo 3 el 6 de diciembre de 1993. Su muerte impulsó mejores estándares 
            de seguridad que han salvado incontables vidas.
          </p>
          <div className="text-red-500 font-bold text-lg">
            ✦ Por una Industria Más Segura ✦
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuenosAiresVivo;