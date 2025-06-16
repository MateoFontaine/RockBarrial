import React, { useState } from 'react';
import { Calendar, MapPin, Users, X, Play, ExternalLink } from 'lucide-react';
import { Image } from './../components/tragedias.jpeg';

interface TragedyEvent {
  id: string;
  date: string;
  title: string;
  location: string;
  victims: number;
  description: string;
  details: string;
  image: string;
  videos?: string[];
  articles?: string[];
  year: number;
}

const Cronica: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<TragedyEvent | null>(null);

  const events: TragedyEvent[] = [
    {
      id: 'soda-1987',
      date: '1987',
      title: 'San Sebastian - Soda Stereo',
      location: 'San sebastaian, Buenos Aires',
      victims: 5,
      description: 'Colapso de estructura durante recital de Soda Stereo',
      details: 'Durante un recital de Soda Stereo en el Estadio Obras Sanitarias, una estructura metálica colapsó causando la muerte de una persona y dejando varios heridos. Este trágico incidente ocurrió en pleno auge de la banda liderada por Gustavo Cerati, Zeta Bosio y Charly Alberti. El accidente afectó profundamente a los miembros de la banda y marcó el inicio de una mayor conciencia sobre la seguridad en los conciertos.',
      image: 'https://infonews.com/datos/fotos/2017/03/13/263864-10/imagen_31536.jpg',
      videos: [],
      articles: [],
      year: 1987
    },
    {
      id: 'walter-1991',
      date: '1991',
      title: 'Caso Walter Bulacio',
      location: 'Comisaría 35ª, Villa Lugano',
      victims: 1,
      description: 'Muerte por brutalidad policial antes de recital',
      details: 'Walter David Bulacio, de 17 años, fue detenido durante una razzia antes de un recital de Los Violadores. Durante su detención fue brutalmente golpeado por policías, causándole lesiones internas que derivaron en su muerte una semana después. Su caso se convirtió en símbolo de la lucha contra la violencia policial y llegó hasta la Corte Interamericana de Derechos Humanos.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFigLAhaVWkgewRykqtm-Hpis47_UNlRm6mQ&s',
      videos: [],
      articles: [],
      year: 1991
    },
    {
      id: 'buenosaires-1993',
      date: '1993',
      title: 'Electrocución Buenos Aires Vivo 3',
      location: 'Festival Buenos Aires Vivo',
      victims: 1,
      description: 'Muerte por electrocución durante festival',
      details: 'Durante el festival Buenos Aires Vivo 3, una persona sufrió una electrocución fatal debido a problemas en la instalación eléctrica del evento. Este accidente reveló fallas en los sistemas de seguridad eléctrica y cambió los protocolos de seguridad para eventos masivos, estableciendo nuevas normativas obligatorias.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qdMbyTt9ERjMY7fJo-nxW_1zWKvXmNo3BQ&s',
      articles: [],
      year: 1993
    },
    {
      id: 'cromanion-2004',
      date: '2004',
      title: 'Tragedia de Cromañón',
      location: 'República Cromañón, Once',
      victims: 194,
      description: 'Incendio durante recital de Callejeros',
      details: 'La mayor tragedia del rock argentino. Durante un recital de Callejeros, una bengala encendida por un fanático impactó contra el techo de espuma de poliuretano, causando un incendio que se propagó rápidamente. Las puertas cerradas con candado y la falta de salidas de emergencia causaron 194 muertes y más de 1.400 heridos. Cambió para siempre la legislación sobre espectáculos públicos.',
      image: 'https://fmrockandpop.com/media/k2/items/cache/e26238df8d9b44d93629c8d79a52c718_L.webp?t=20231220_140524',
      videos: [],
      articles: [],
      year: 2004
    },
    {
      id: 'larenga-2011',
      date: '2011',
      title: 'Primer Incidente La Renga',
      location: 'Recital de La Renga',
      victims: 1,
      description: 'Primera muerte en recital de La Renga',
      details: 'Primer incidente trágico en un recital de La Renga, donde un fanático perdió la vida en circunstancias relacionadas con problemas de seguridad y aglomeración. Este caso alertó sobre la necesidad de mejorar los protocolos en los conciertos de la banda.',
      image: 'https://www.lacapitalmdp.com/wp-content/uploads/2016/07/Renga.jpg',
      videos: [],
      articles: [],
      year: 2011
    },
    {
      id: 'larenga-2016',
      date: '2016',
      title: 'Segundo Incidente La Renga',
      location: 'Recital de La Renga',
      victims: 1,
      description: 'Segunda muerte en recital de La Renga',
      details: 'El último incidente fatal en recitales de La Renga confirmó un patrón preocupante. Esta tercera muerte generó una crisis profunda en la banda y la industria, obligando a replantear completamente la organización de eventos masivos de rock.',
      image: 'https://resizer.glanacion.com/resizer/v2/tete-entre-obreros-de-la-fabrica-recuperada-zanon-3XBD4UE2KRGQFL3XS3CPDQVQD4.jpg?auth=ce03e9cbddf6520d40a8fad91e3fb729329223a5bc643a2b022a99030908edbc&width=420&height=280&quality=70&smart=true',
      videos: [],
      articles: [],
      year: 2016
    },
    {
      id: 'indio-2017',
      date: '2017',
      title: 'Tragedia en Olavarría - Indio Solari',
      location: 'Aeródromo de Olavarría',
      victims: 2,
      description: 'Colapso de estructuras por vientos fuertes',
      details: 'Durante el recital del Indio Solari en Olavarría, fuertes vientos provocaron el colapso de estructuras que causaron la muerte de dos personas y dejaron decenas de heridos. Este fue el último concierto masivo del líder de Los Redonditos de Ricota, quien decidió retirarse tras la tragedia.',
      image: 'https://resizer.glanacion.com/resizer/v2/el-predio-la-colmena-se-vio-desbordado-por-la-YBLZA2SIGRCL3INVY4GT23LI3Q.jpg?auth=f46789f4d6b4661092dcbfb7d9f2c5322b31edb901898d8ca7055d35489b2681&width=420&height=236&quality=70&smart=true',
      videos: [],
      articles: [],
      year: 2017
    }
  ];

  const sortedEvents = events.sort((a, b) => a.year - b.year);

  const openModal = (event: TragedyEvent) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-start mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            La Sombra del Rock: Tragedias y el Eco de las Advertencias Ignoradas
          </h1>
          <h4>Segundo Mercado</h4>
          <br />
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            El rock nacional Argentino, esa cuna de himnos y pasiones, también carga con una sombra
oscura: la de las tragedias que han marcado sus rituales masivos. La fiesta popular se ha
teñido de luto, dejando una estela de advertencias ignoradas y responsabilidades difusas que
resuenan hasta hoy. <br /> <br />
La primera alarma se encendió el 2 de mayo de 1987. Un balcón se derrumbó durante un
show de Soda Stereo en la discoteca Highland
Road, matando a cinco jóvenes y exponiendo
graves fallas de seguridad. Cuatro años
después, el 19 de abril de 1991, Walter
Bulacio, de 17 años, murió por golpes
policiales tras ser detenido antes de un recital
de Los Redondos, convirtiéndose en un
símbolo contra la violencia institucional. En
marzo de 1999, dos jóvenes se electrocutaron
en el festival "Buenos Aires Vivo III", otra
muestra de negligencia.<br /> <br />
Pero ninguna herida fue tan profunda como la
del 30 de diciembre de 2004. Un incendio por
pirotecnia en un recital de Callejeros en
República Cromañón dejó 194 muertos y más
de 1.400 heridos. No fue un accidente, sino la
consecuencia visible de una red de corrupción
y negligencia que marcó un antes y un después en la legislación de seguridad.
En esta devastadora crisis, el rol del vocero fue crucial y, a menudo, deficiente. Un vocero
eficaz debe: transmitir empatía y condolencias, ofrecer información precisa y verificada,
asumir la responsabilidad cuando corresponda, proteger la reputación mediante
transparencia y ser el canal único y autorizado de información. La falta de una voz
unificada y empática en Cromañón magnificó el dolor y la desconfianza, dejando a la
sociedad con una búsqueda incansable de justicia.<br /> <br />
Aun con las lecciones de Cromañón, la fatalidad continuó. La Renga sufrió dos golpes en La
Plata: en abril de 2011, Miguel Ramírez murió por una bengala, y en julio de 2016, Sebastián
Alfonso Medina falleció por muerte súbita. El último gran fantasma llegó el 11 de marzo de
2017 en Olavarría, donde dos personas perdieron la vida en un show del Indio Solari que
superó la capacidad permitida.<br /> <br />
Desde las relaciones públicas, estas tragedias han marcado un antes y un después. Ya no se
trata solo de gestionar una crisis, sino de prevenirla con responsabilidad, planificación y
profesionalismo. La seguridad no es secundaria; es la esencia de cualquier evento. Estas
dolorosas cicatrices nos recuerdan que la cultura y la vida deben ir siempre de la mano.
<br /> <br />
          </p>

          <img 
                  src="https://lh3.googleusercontent.com/fife/ALs6j_HLx_l0nr89yM_cI4--d1mONiXe2FXBCsF8f_JbRvDmng2Ya61VZxeO2rAFsMRsXCL1mzqI3cSGDfYJj_PukchdZ2KRk0W8XPiWEm8ffAa-mRFo9PuTtoYA4_18BQJLGb8btnNmE1Ejf2hp0ok5SdYTYgB3wInLd54BVMx5kerz4U9MM34PKlHKdvzdX6O4IbIQRVtRIvxGJ7ays4e0e9AaRCk9_6cTgeDF1lUbzhCdTDOtpJ2n5zKHSbJxuf9mJNH0bjA0yUJmy2S0VckEimL1XmYv-e-bSIQDJA9jbZ6d2TEmOrK7pfFiinBkVPAZH-TuJXDsFz3Rwf1VDP2-Le1ufi4by2nRN0AL7j87OVvJ3cuI7vUjMSV57j4VfPNDyH7JIO8HW-so9TprtjYbgHbpbNBw8lw_5i75-I0mvCbAi74PvC4Dtal1Q_KldiYjWhtkjYJUSMcG5tyRiqrpLHVF5k7QJ-P1yoq-fA7OHzS_FL2Ws4vJJG3-edB7o2vRLD8EYq7PQ0mXgJA9nr0_WBov9N8VNBQCJvczdmg5_d_CNr0wRrrxRxmnqYfQnvRNBZL_jWDnsddYQExeQgdHXJrgkpatOQwQjBzyyk3uAqw7ijU3JnfTOzX8P8adS4ZygbfIoHLpvF3dNt5-0rAKzixTWkxJw7YJbuq8NvLuZmnVuAW4KUXUWPQMD2y7ZcMwuKYeDRgRrCVNJjSk_SOM-MiRtuR-mfuA7tCCeCAwgkLLGxUMWbQ-dxz2NAA-OFgiHW9N56XbGOGoqWVs2N2qRVAD9-H1QjwfXQQLJeVFpAYqVA_7mRQ3XaxMSHCX5W6jbaNzcKBbECftjztOUIGB-WCuRN0lWtuS89yPNI8G0mahs6N6J3jDXAqrJOZWrYtZ3LFoO0ZZBu-8AAV3mrB3v_-T55W7SdXQ42kmSF_knIgOXmS0dgcFbUJSgviFSWq_7EJRHhot6lhZMmoN-DdlrmJ-K_8VzVcftN99apQLDIR31HxAfwaana-lflhniNtuLRtLdjZLWtOK61HKdXYcv82S_QPHL_N2VXw6gmoY6hQpvrPn0OVB7zbbUhBZF6CIY9X0H3b_7qSpYjkElHInLlY8kiEsJn4Z7SDG_YSVnC1DEGbhHyCHAtD9FaFSXqL4EE-czgwWqUcjLUDKkgcrt6VWvV7BHYBxryrAVFFDBShU6ocTdGEUrknEavoNaV-JTPBTBxeql_-9Or8WbtagvAshWwMu7bdZR8-XTc9ZPVhQ2PhTMssItrAK9mrFCgD_DEuDGsxUr3uxql8VCQawR2qEL7w5pjj1WL9P7In2Xkcd2JtuGBscUAiHMCoI8Sd3dUqzDhlPnA7q07hQsUzIPROcjKVRiTqSrmD_e3legrK86B-WYuslcKB5qcC-zx3fXXCBFutmD1pEm63zroa3hyplNzDn1fd624tnSIKWoJBgVhOQJmt3h2DMWO9RWjd12iYmOLbgtVzKFyjX7FpVEYG1YcefD4TmTlFuMCJ1i9JM7d5URImGtCX7p1crxTLVCdeFvakGV3Mb3WyvAdAFr0Kfb8hE_IrtDJxdvKN_cDrumbrXUBHq9hVj2jXQTkNCwYY1-zBSujbAH4gWJtk4AcIAX4abOLE9NTpAkcUvSIM=w2000-h4120?auditContext=forDisplay"
                  alt="Imagen de Cronica"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
        </div>

        {/* Interactive Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-1 bg-gradient-to-b from-red-500 via-red-600 to-red-700"></div>
          
          {sortedEvents.map((event, index) => (
            <div 
              key={event.id} 
              className={`relative flex items-center mb-12 cursor-pointer group ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
              onClick={() => openModal(event)}
            >
              {/* Timeline Dot */}
              <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full absolute left-1 md:left-1/2 transform md:-translate-x-1/2 z-10 group-hover:scale-125 transition-transform border-4 border-gray-900 group-hover:bg-red-400">
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75 group-hover:opacity-100"></div>
              </div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-gray-800 hover:bg-gray-750 p-6 rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 border border-gray-700 group-hover:border-red-500">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-red-400 font-semibold text-sm">{event.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{event.victims} víctima{event.victims > 1 ? 's' : ''}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">
                    {event.description}
                  </p>
                  
                  <div className="text-red-500 text-sm font-medium group-hover:text-red-400">
                    Clic para ver detalles completos →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-6 flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedEvent.title}</h2>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{selectedEvent.date}</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="mr-4">{selectedEvent.location}</span>
                    <Users className="h-4 w-4 mr-1" />
                    <span>{selectedEvent.victims} víctima{selectedEvent.victims > 1 ? 's' : ''}</span>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Image */}
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                {/* Details */}
                <div className="prose prose-invert max-w-none mb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {selectedEvent.details}
                  </p>
                </div>

                {/* Videos and Articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Videos */}
                  {selectedEvent.videos && selectedEvent.videos.length > 0 && (
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                        <Play className="h-5 w-5 mr-2 text-red-500" />
                        Videos Relacionados
                      </h3>
                      <div className="space-y-2">
                        {selectedEvent.videos.map((video, index) => (
                          <div key={index} className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                            <span className="text-gray-300 text-sm">{video}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Articles */}
                  {selectedEvent.articles && selectedEvent.articles.length > 0 && (
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                        <ExternalLink className="h-5 w-5 mr-2 text-red-500" />
                        Artículos y Notas
                      </h3>
                      <div className="space-y-2">
                        {selectedEvent.articles.map((article, index) => (
                          <div key={index} className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                            <span className="text-gray-300 text-sm">{article}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cronica;