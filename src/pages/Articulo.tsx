import React from 'react';
import { BookOpen, Clock, Share2 } from 'lucide-react';

const Articulo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Article Header */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              ARTÍCULO DE OPINION
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
           El antes y después en el rock
          </h1>
          
          <div className="flex items-center justify-center space-x-6 text-gray-400 text-sm mb-8">
            <h4 className='text-xl'>Manuel Contreras</h4>
          </div>
          
          <img 
            src="https://static.eldiario.es/clip/4beffe3e-004a-40bb-bd4b-8b9bdc1ebd65_16-9-discover-aspect-ratio_default_0.jpg"
            alt="Rock Nacional"
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
           El rock nacional argentino ha sido, históricamente, mucho más que una expansión
artística,ha sido bandera de resistencia y un canal de crítica.
No obstante, en su recorrido por el entramado cultural del país, también ha estado
atravesado por profundas problemáticas estructurales que han derivado en tragedias,
muchas veces evitables. <br /> <br />
Dos eventos paradigmáticos marcan un antes y un después en la relación entre el rock, el
Estado, los medios y la ciudadanía: la tragedia del boliche República Cromañón en 2004 y
el recital del Indio Solari en Olavarría en 2017. Ambos casos revelan, entre otras cosas, las
fallas en la comunicación institucional y la ausencia de planificación estratégica para
escenarios de riesgo. En ese sentido, los profesionales de las Relaciones Públicas
aparecen como figuras clave, aunque muchas veces invisibilizadas, en la prevención,
gestión y respuesta ante situaciones de crisis.<br /> <br />
Este artículo de opinión busca reflexionar sobre el papel de los relacionistas públicos
en el contexto del rock nacional argentino, especialmente cuando este se convierte
en un escenario de crisis. Se propone argumentar que la intervención profesional de
RRPP en el ámbito de la música no solo es necesaria, sino urgente, y que su ausencia o
subestimación ha contribuido a la mala gestión de eventos que han tenido consecuencias
trágicas. Desde una mirada académica y crítica, se analizarán los casos mencionados como
ejemplos del costo que implica la falta de una estrategia comunicacional sería, ética y
profesional.<br /> <br />
En los eventos masivos vinculados al rock, donde convergen miles de personas,
emociones intensas, consumo de sustancias, presión mediática y responsabilidad legal, el
rol del profesional en RRPP debería ser central. Sin embargo, en la práctica argentina, esta
función ha sido históricamente relegada o suplantada por figuras improvisadas: asistentes,
productores, mánagers o incluso artistas que, sin formación específica, intentan lidiar con
situaciones que requieren de experticia comunicacional y manejo de crisis.<br /> <br />
Cuando nos encontramos con problemáticas que puedan afectar a esta expansión de
multitud tratamos de encontrar un tipo de gestión correspondiente dentro de ella, como una
expansión o dirección allí.
          </p>
        </article>

        {/* Article Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Este artículo está dedicado a la memoria de todas las víctimas de las tragedias 
              del rock nacional argentino.
            </p>
            <div className="text-red-500 font-bold">
              ✦ Nunca Más ✦
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articulo;