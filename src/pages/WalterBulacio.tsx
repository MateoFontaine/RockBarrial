import React from 'react';
import { Calendar, MapPin, Scale, Shield } from 'lucide-react';

const WalterBulacio: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mb-12">
          <img 
            src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Walter Bulacio"
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg" />
          <div className="absolute bottom-8 left-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              Caso Walter Bulacio
            </h1>
            <p className="text-xl text-gray-200">Una injusticia que cambió la historia</p>
          </div>
        </div>

        {/* Key Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <Calendar className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">19 Abr 1991</div>
            <div className="text-sm text-gray-400">Detención</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <MapPin className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">Buenos Aires</div>
            <div className="text-sm text-gray-400">Ciudad</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <Scale className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">17 años</div>
            <div className="text-sm text-gray-400">Edad de Walter</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <Shield className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">Brutalidad</div>
            <div className="text-sm text-gray-400">Policial</div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">El Caso que Conmocionó a Argentina</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            El 19 de abril de 1991, Walter David Bulacio, un joven de 17 años, fue detenido por la 
            policía durante una razzia realizada antes de un recital de Los Violadores en el estadio 
            Obras Sanitarias. Esta detención arbitraria terminaría convirtiéndose en uno de los casos 
            más emblemáticos de abuso policial y violación de derechos humanos en Argentina.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">La Detención</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Walter Bulacio se dirigía al recital de Los Violadores cuando fue detenido junto a otros 
            jóvenes en una operación policial conocida como "razzia". Estas detenciones masivas eran 
            una práctica común de la policía en los años 90, especialmente antes de eventos de rock, 
            donde se detenía a jóvenes por "averiguación de antecedentes" sin causa justificada.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">La Tortura y la Muerte</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Durante su detención en la Comisaría 35ª de Villa Lugano, Walter fue brutalmente golpeado 
            por los policías. Los golpes le causaron graves lesiones internas que derivaron en su 
            muerte una semana después, el 26 de abril de 1991. El joven murió sin haber recibido 
            atención médica adecuada, víctima de la violencia policial desmedida.
          </p>

          <blockquote className="border-l-4 border-red-500 pl-4 my-8 text-gray-300 italic">
            "Walter solo quería ir a ver a Los Violadores. Era un chico bueno, trabajador, 
            que amaba el rock. No merecía morir de esa manera tan brutal y sin sentido."
            <cite className="block mt-2 text-sm text-gray-400">- Testimony de la familia Bulacio</cite>
          </blockquote>

          <h3 className="text-2xl font-bold text-white mb-4">La Lucha de la Familia</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            La familia Bulacio, liderada por su madre Rosa, inició una incansable lucha por la justicia. 
            Durante años enfrentaron la impunidad, las amenazas y la indiferencia del sistema judicial. 
            Su perseverancia convirtió el caso en un símbolo de la lucha contra la violencia policial 
            y la defensa de los derechos humanos.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">El Proceso Judicial</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            El caso judicial se extendió por décadas. Los policías involucrados fueron procesados, 
            pero muchos de ellos lograron evitar condenas definitivas debido a diversas maniobras 
            legales y la lentitud del sistema judicial. La causa llegó hasta la Corte Interamericana 
            de Derechos Humanos, que condenó al Estado argentino por la violación de los derechos 
            humanos de Walter Bulacio.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">La Sentencia Internacional</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            En 2003, la Corte Interamericana de Derechos Humanos dictó sentencia condenando al Estado 
            argentino por la muerte de Walter Bulacio. La corte determinó que Argentina había violado 
            múltiples derechos consagrados en la Convención Americana sobre Derechos Humanos, incluyendo 
            el derecho a la vida, la integridad personal y las garantías judiciales.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">Los Cambios Legislativos</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            El caso Walter Bulacio impulsó importantes cambios en la legislación argentina. Se modificaron 
            las normas sobre detenciones por averiguación de antecedentes, se establecieron límites 
            temporales más estrictos y se fortalecieron los mecanismos de control sobre las fuerzas 
            de seguridad. Estas reformas buscaron evitar que se repitieran casos similares.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">El Legado</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Walter Bulacio se convirtió en un símbolo de la lucha contra la violencia policial y la 
            impunidad. Su caso demostró que la música y la juventud no pueden ser criminalizadas, 
            y que todos los ciudadanos tienen derecho a la vida, la libertad y un trato digno por 
            parte de las fuerzas de seguridad.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">La Memoria</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            El nombre de Walter Bulacio permanece en la memoria colectiva como recordando la importancia 
            de defender los derechos humanos y luchar contra toda forma de abuso de poder. Su historia 
            trasciende el ámbito del rock para convertirse en un llamado permanente a la justicia y 
            la dignidad humana.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">El Rock y los Derechos Humanos</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            El caso Walter Bulacio estableció una conexión directa entre el mundo del rock y la defensa 
            de los derechos humanos. Demostró que la música, especialmente el rock, no es solo 
            entretenimiento, sino también un espacio de expresión y libertad que debe ser protegido 
            de cualquier forma de represión o violencia estatal.
          </p>
        </article>

        {/* Memorial Section */}
        <div className="mt-16 bg-gray-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">En Memoria</h3>
          <p className="text-gray-300 mb-6">
            En memoria de Walter David Bulacio (1973-1991), joven de 17 años que murió víctima 
            de la violencia policial por el simple hecho de querer asistir a un recital de rock. 
            Su lucha continúa en cada defensa de los derechos humanos.
          </p>
          <div className="text-red-500 font-bold text-lg">
            ✦ Nunca Más Violencia Institucional ✦
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalterBulacio;