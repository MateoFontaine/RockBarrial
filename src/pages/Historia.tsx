import React from 'react';
import { Calendar, Music, Heart, BookOpen } from 'lucide-react';

const Historia: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Historia del Rock Nacional
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Un recorrido por las luces y sombras del rock argentino, desde sus orígenes 
            hasta las tragedias que marcaron para siempre nuestra música.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-red-500"></div>
          
          {/* 1960s-1970s */}
          <div className="relative flex items-center mb-16">
            <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10"></div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-red-400 font-semibold">1960s - 1970s</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Los Pioneros</h3>
                <p className="text-gray-300">
                  Nacimiento del rock nacional con Los Gatos, Manal y Almendra. 
                  Charly García, Luis Alberto Spinetta y Lito Nebbia sientan las bases 
                  de lo que será el movimiento musical más importante de Argentina.
                </p>
              </div>
            </div>
          </div>

          {/* 1980s */}
          <div className="relative flex items-center mb-16 md:flex-row-reverse">
            <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10"></div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pl-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-red-400 font-semibold">1980s</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">La Explosión</h3>
                <p className="text-gray-300">
                  Época dorada con Soda Stereo, Los Violadores, Sumo, Virus y Los Redonditos. 
                  El rock se masifica y se convierte en la voz de una generación. 
                  Aparecen los primeros festivales masivos.
                </p>
              </div>
            </div>
          </div>

          {/* 1987 - Soda Stereo */}
          <div className="relative flex items-center mb-16">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-900 border-2 border-red-500 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10"></div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
              <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-red-400 font-semibold">15 Noviembre 1987</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Primera Tragedia</h3>
                <p className="text-gray-300 mb-3">
                  Derrumbe durante un recital de Soda Stereo en Obras Sanitarias. 
                  Una víctima fatal marca el inicio de una serie de tragedias.
                </p>
                <div className="text-red-400 text-sm font-medium">✦ 1 víctima</div>
              </div>
            </div>
          </div>

          {/* 1990s */}
          <div className="relative flex items-center mb-16 md:flex-row-reverse">
            <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10"></div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pl-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-red-400 font-semibold">1990s</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Rock Barrial</h3>
                <p className="text-gray-300">
                  Surge el rock barrial con La Renga, Callejeros y Viejas Locas. 
                  El rock se acerca a los barrios populares y desarrolla una identidad 
                  más cruda y directa.
                </p>
              </div>
            </div>
          </div>

          {/* 1991 - Walter Bulacio */}
          <div className="relative flex items-center mb-16">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-900 border-2 border-red-500 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10"></div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
              <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-red-400 font-semibold">19 Abril 1991</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Caso Walter Bulacio</h3>
                <p className="text-gray-300 mb-3">
                  Muerte de Walter Bulacio (17 años) tras ser detenido en una razzia 
                  antes de un recital de Los Violadores. Símbolo de la lucha contra 
                  la violencia policial.
                </p>
                <div className="text-red-400 text-sm font-medium">✦ 1 víctima</div>
              </div>
            </div>
          </div>

          {/* 1993 - Buenos Aires Vivo */}
          <div className="relative flex items-center mb-16 md:flex-row-reverse">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-900 border-2 border-red-500 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10"></div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pl-8">
              <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-red-400 font-semibold">6 Diciembre 1993</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Buenos Aires Vivo 3</h3>
                <p className="text-gray-300 mb-3">
                  Electrocución fatal durante el festival. Primera tragedia por 
                  fallas eléctricas que cambió los protocolos de seguridad.
                </p>
                <div className="text-red-400 text-sm font-medium">✦ 1 víctima</div>
              </div>
            </div>
          </div>

          {/* 2000s */}
          <div className="relative flex items-center mb-16">
            <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10"></div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-red-400 font-semibold">2000s</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Nueva Generación</h3>
                <p className="text-gray-300">
                  Consolidación del rock barrial. Callejeros, La 25, Kapanga dominan 
                  la escena. Los recitales se masifican sin suficientes controles de seguridad.
                </p>
              </div>
            </div>
          </div>

          {/* 2004 - Cromañón */}
          <div className="relative flex items-center mb-16 md:flex-row-reverse">
            <div className="flex-shrink-0 w-12 h-12 bg-gray-900 border-4 border-red-500 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 flex items-center justify-center">
              <Heart className="h-5 w-5 text-red-500" />
            </div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pl-8">
              <div className="bg-red-900/30 border-2 border-red-500 p-8 rounded-lg">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-red-400 font-semibold">30 Diciembre 2004</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Tragedia de Cromañón</h3>
                <p className="text-gray-300 mb-3">
                  La mayor tragedia del rock argentino. Incendio en República Cromañón 
                  durante un recital de Callejeros. Cambió para siempre la legislación 
                  sobre espectáculos públicos.
                </p>
                <div className="text-red-400 text-lg font-bold">✦ 194 víctimas</div>
              </div>
            </div>
          </div>

          {/* 2011-2016 - La Renga */}
          <div className="relative flex items-center mb-16">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-900 border-2 border-red-500 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10"></div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
              <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-red-400 font-semibold">2011 - 2016</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Tragedias en La Renga</h3>
                <p className="text-gray-300 mb-3">
                  Serie de incidentes mortales en recitales de La Renga. 
                  Consolidación de nuevos protocolos de seguridad.
                </p>
                <div className="text-red-400 text-sm font-medium">✦ 3 víctimas</div>
              </div>
            </div>
          </div>

          {/* 2017 - Indio Solari */}
          <div className="relative flex items-center mb-16 md:flex-row-reverse">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-900 border-2 border-red-500 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10"></div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pl-8">
              <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-red-400 font-semibold">19 Marzo 2017</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Olavarría - El Final</h3>
                <p className="text-gray-300 mb-3">
                  Última tragedia en el recital del Indio Solari en Olavarría. 
                  El mítico cantante decide retirarse de los escenarios masivos.
                </p>
                <div className="text-red-400 text-sm font-medium">✦ 2 víctimas</div>
              </div>
            </div>
          </div>

          {/* Presente */}
          <div className="relative flex items-center">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10"></div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
              <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-blue-400 font-semibold">Presente</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Nueva Era</h3>
                <p className="text-gray-300">
                  Protocolos de seguridad consolidados. El rock argentino continúa 
                  con mayor conciencia sobre la importancia de la seguridad. 
                  La memoria de las víctimas impulsa mejores prácticas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <Music className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <p className="text-gray-400">Años de Rock Nacional</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">201</div>
            <p className="text-gray-400">Víctimas Recordadas</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <BookOpen className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">6</div>
            <p className="text-gray-400">Tragedias Documentadas</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-red-900/20 to-gray-900/20 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Para Que Nunca Más</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Cada tragedia nos enseñó algo. Cada víctima nos recordó que la música debe unir, 
            no dividir. Que la pasión no debe costar vidas. Su memoria impulsa nuestro 
            compromiso con la seguridad.
          </p>
          <div className="text-red-500 text-2xl font-bold">
            ✦ Nunca Más ✦
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historia;