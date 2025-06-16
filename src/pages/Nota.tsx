import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';

const Nota: React.FC = () => {
  const notas = [
    {
      id: 1,
      titulo: "Cromañón: 20 años después, las heridas siguen abiertas",
      autor: "María González",
      fecha: "15 de Diciembre, 2024",
      categoria: "Investigación",
      imagen: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
      resumen: "A dos décadas de la tragedia, las familias de las víctimas siguen luchando por justicia y memoria.",
      contenido: "Han pasado 20 años desde aquella noche del 30 de diciembre de 2004 que cambió para siempre la historia del rock nacional argentino..."
    },
 {
  id: 2,
  titulo: "La seguridad en los recitales: antes y después de las tragedias",
  autor: "Segundo Mercado",
  fecha: "10 de Junio, 2025",
  categoria: "Análisis de la imagen",
  imagen: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800",
  resumen: `El rock nacional, pasión de multitudes, también carga el peso de la tragedia. Incidentes como Cromañón o los recitales de Soda Stereo y La Renga no solo costaron vidas, sino que golpearon la imagen de la industria musical argentina.

Desde las relaciones públicas, estos hechos son catástrofes que exigen una respuesta estratégica y un profundo proceso de reconstrucción. La imagen pública, construida con esfuerzo, puede desmoronarse en segundos.

La crónica de los episodios oscuros del rock argentino —desde el derrumbe en Soda Stereo (1987) hasta los incidentes en La Renga y el Indio Solari— revela cómo la negligencia y fallas de seguridad no solo mataron, sino que dañaron la credibilidad de los involucrados.

Cromañón (2004) es el ejemplo más doloroso: la banda, la productora y los funcionarios vieron su imagen destrozada, pasando del disfrute a la indignación. La tragedia se volvió símbolo de irresponsabilidad. La imagen colectiva del rock quedó empañada por la imprudencia.

Frente a estas crisis, las relaciones públicas son clave. No se trata de maquillar la realidad, sino de abordarla con transparencia, empatía y acciones concretas que demuestren compromiso con la seguridad.


La reconstrucción de la imagen es compleja, pero se basa en principios esenciales:
- Asumir responsabilidad (el reconocimiento sincero es clave),
- Comunicación empática y transparente (información clara y constante),
- Acciones concretas y cambios estructurales (no basta con disculpas, como los cambios legislativos post-Cromañón),
- Reconstrucción a largo plazo (la imagen no se recupera de un día para otro).

De hecho, la banda involucrada tuvo que reinventarse: el cantante formó otro grupo tras la fuerte condena social. Estas tragedias marcaron un antes y un después en la organización de eventos masivos. Hoy, la seguridad es el pilar fundamental.

Las relaciones públicas no solo gestionan la percepción: son vitales para prevenir y reconstruir la confianza. La música debe ser vida, no luto.`,
  contenido: "La evolución de las medidas de seguridad en los espectáculos masivos ha sido dramática..."
},

   {
  id: 3,
  titulo: "Cuando el silencio también mata",
  autor: "Manuel Contreras",
  fecha: "5 de Junio, 2025",
  categoria: "Problemáticas",
  imagen: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
  resumen: `El rock nacional argentino, con toda su potencia cultural, también arrastra una lista de tragedias que marcaron su historia: muertos, heridos, y una sociedad conmocionada. Desde el colapso en un show de Soda Stereo en 1987 hasta el desastre en Olavarría durante el recital del Indio Solari en 2017, cada episodio dejó algo más que víctimas: dejó versiones cruzadas, juicios mediáticos y una verdad cada vez más difícil de encontrar.

En la era digital, la tragedia no termina cuando se apagan los amplificadores. Comienza otra batalla: la de los relatos. La infoxicación —la saturación de datos, versiones, titulares y opiniones— transforma hechos dolorosos en un terreno pantanoso donde todo se discute, pero poco se entiende. Cromañón, por ejemplo, no fue solo un incendio con 194 muertos: fue también una guerra simbólica en redes sociales, donde las responsabilidades se mezclaron con fanatismo, odio y desinformación.

La polarización no perdona ni a la memoria. En vez de construir consensos sobre cómo prevenir nuevas tragedias, se generan bandos: los que defienden a la banda, los que acusan a los fans, los que culpan al Estado. La tragedia se convierte en trending topic, en contenido, en campo de batalla digital. Y mientras se discute quién tiene razón, lo urgente —la seguridad, la empatía, la prevención— queda a un costado.

En este escenario, las relaciones públicas tienen un nuevo desafío: no es solo comunicar, sino hacerlo con responsabilidad en medio del ruido. Hoy, una mala gestión comunicacional no solo genera rechazo, sino que alimenta la desconfianza en instituciones, artistas y medios. El impacto de una tragedia no se mide solo en víctimas, sino en cómo se narra, se recuerda y se aprende.

Las redes deberían ser puentes, pero muchas veces son trincheras. El rock, como espacio de encuentro, merece algo mejor. Que la próxima vez no se trate de culpas virales, sino de cuidados reales. Porque entre la desinformación y el olvido, también se pierde la posibilidad de que la música vuelva a ser solo eso: música.`,
  contenido: "El caso Walter Bulacio se convirtió en un símbolo de la lucha contra la violencia policial..."
}


  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Notas Periodísticas
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Análisis profundo y investigaciones sobre las tragedias del rock nacional argentino
          </p>
        </div>

        {/* Featured Article */}
        

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {notas.slice(1).map((nota) => (
            <article key={nota.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={nota.imagen} 
                  alt={nota.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {nota.categoria}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {nota.titulo}
                </h3>
                <p className="text-gray-400 mb-4  whitespace-pre-line">
                  {nota.resumen}
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{nota.autor}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{nota.fecha}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
       
      </div>
    </div>
  );
};

export default Nota;