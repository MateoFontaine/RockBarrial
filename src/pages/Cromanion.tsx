import React from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const Cromanion: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mb-12">
          <img 
            src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Cromañón"
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg" />
          <div className="absolute bottom-8 left-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              Tragedia de Cromañón
            </h1>
            <p className="text-xl text-gray-200">La herida que nunca sanó</p>
          </div>
        </div>

        {/* Key Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <Calendar className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">30 Dic 2004</div>
            <div className="text-sm text-gray-400">Fecha</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <MapPin className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">Once</div>
            <div className="text-sm text-gray-400">Barrio</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <Users className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">194</div>
            <div className="text-sm text-gray-400">Víctimas</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <Clock className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">23:05</div>
            <div className="text-sm text-gray-400">Inicio del incendio</div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">La Noche que Cambió Todo</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            El 30 de diciembre de 2004, la República Cromañón se convirtió en el escenario de la mayor tragedia 
            en la historia del rock argentino. Durante el recital de la banda Callejeros, un incendio provocado 
            por una bengala encendida por un fanático se propagó rápidamente por el techo del local, causando 
            la muerte de 194 personas y dejando más de 1.400 heridos.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">Los Hechos</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            A las 23:05 horas, durante la interpretación del tema "Rocanroles sin Destino", un fanático encendió 
            una bengala que impactó contra la media sombra del techo. El material de espuma de poliuretano se 
            incendió inmediatamente, liberando gases tóxicos. La evacuación se vio obstaculizada por las puertas 
            cerradas con candado y la falta de salidas de emergencia adecuadas.
          </p>

          <blockquote className="border-l-4 border-red-500 pl-4 my-8 text-gray-300 italic">
            "En pocos minutos, el lugar se llenó de humo negro y tóxico. La gente corría desesperada buscando 
            una salida que no existía. Fue una pesadilla que nunca podré olvidar."
            <cite className="block mt-2 text-sm text-gray-400">- Testimonio de un sobreviviente</cite>
          </blockquote>

          <h3 className="text-2xl font-bold text-white mb-4">Las Consecuencias</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            La tragedia de Cromañón marcó un antes y un después en la legislación sobre espectáculos públicos 
            en Argentina. Se establecieron nuevas normativas de seguridad, controles más estrictos y la 
            prohibición del uso de pirotecnia en locales cerrados. Sin embargo, para las familias de las 
            víctimas, ninguna medida puede reparar el dolor de la pérdida.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">El Juicio y la Justicia</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            El proceso judicial que siguió a la tragedia involucró a múltiples responsables: desde los dueños 
            del local hasta funcionarios públicos que habían otorgado habilitaciones irregulares. El entonces 
            jefe de Gobierno de la Ciudad de Buenos Aires, Aníbal Ibarra, fue destituido de su cargo. Los 
            miembros de Callejeros fueron condenados a prisión, aunque posteriormente fueron excarcelados.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">La Memoria</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Cada 30 de diciembre, familiares y amigos de las víctimas se reúnen para recordar a sus seres 
            queridos. El lema "Que la culpa no me persiga más" se convirtió en un grito de dolor y reclamo 
            de justicia. La tragedia de Cromañón permanece en la memoria colectiva como un recordatorio de 
            la importancia de la seguridad en los espectáculos públicos.
          </p>
        </article>

        {/* Memorial Section */}
        <div className="mt-16 bg-gray-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">En Memoria</h3>
          <p className="text-gray-300 mb-6">
            Dedicado a las 194 víctimas de la tragedia de Cromañón y a sus familias, 
            que nunca dejaron de luchar por la verdad y la justicia.
          </p>
          <div className="text-red-500 font-bold text-lg">
            ✦ Nunca Más ✦
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cromanion;