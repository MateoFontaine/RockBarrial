import React, { useState } from 'react';
import { BarChart3, Users, MessageSquare, CheckCircle } from 'lucide-react';

const Encuesta: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 0,
      question: "¿Cuál consideras que fue la tragedia más impactante del rock nacional?",
      options: [
        "Cromañón (2004)",
        "Caso Walter Bulacio (1991)",
        "Derrumbe Soda Stereo (1987)",
        "Tragedia Indio Solari Olavarría (2017)"
      ]
    },
    {
      id: 1,
      question: "¿Crees que las medidas de seguridad actuales son suficientes?",
      options: [
        "Sí, son adecuadas",
        "No, faltan más controles",
        "Parcialmente, se puede mejorar",
        "No tengo opinión formada"
      ]
    },
    {
      id: 2,
      question: "¿Has asistido a recitales después de conocer estas tragedias?",
      options: [
        "Sí, sin cambios en mi comportamiento",
        "Sí, pero con más precaución",
        "No, me generan inseguridad",
        "Nunca asistí a recitales"
      ]
    },
    {
      id: 3,
      question: "¿Qué aspecto consideras más importante para prevenir tragedias?",
      options: [
        "Mejor infraestructura de los venues",
        "Controles más estrictos de seguridad",
        "Educación del público asistente",
        "Mayor responsabilidad de organizadores"
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const resetSurvey = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-white mb-6">
              ¡Gracias por Participar!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Tu opinión es valiosa para mantener viva la memoria y mejorar la seguridad 
              en los espectáculos musicales.
            </p>
            
            <div className="bg-gray-800 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Tus Respuestas</h2>
              <div className="space-y-4 text-left">
                {questions.map((q, index) => (
                  <div key={index} className="border-b border-gray-700 pb-4">
                    <p className="text-gray-300 mb-2">{q.question}</p>
                    <p className="text-red-400 font-medium">{answers[index]}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={resetSurvey}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors mr-4"
              >
                Realizar Otra Encuesta
              </button>
              
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Encuesta
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tu opinión sobre las tragedias del rock nacional y las medidas de seguridad actuales
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400 text-sm">Progreso</span>
            <span className="text-gray-400 text-sm">
              {currentQuestion + 1} de {questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-8">
            {questions[currentQuestion].question}
          </h2>
          
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors group"
              >
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full mr-4 group-hover:border-red-400"></div>
                  <span className="text-gray-300 group-hover:text-white">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Stats Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Users className="h-8 w-8 text-red-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">1,247</div>
            <div className="text-gray-400 text-sm">Participantes</div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <MessageSquare className="h-8 w-8 text-red-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">4</div>
            <div className="text-gray-400 text-sm">Preguntas</div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <BarChart3 className="h-8 w-8 text-red-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">85%</div>
            <div className="text-gray-400 text-sm">Tasa de Finalización</div>
          </div>
        </div>

        {/* Info */}
        <div className="mt-12 bg-red-900/20 border border-red-500/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-3">Sobre esta Encuesta</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Esta encuesta es anónima y tiene como objetivo conocer la percepción del público 
            sobre las tragedias del rock nacional y las medidas de seguridad actuales. 
            Los resultados serán utilizados para generar contenido informativo y análisis 
            sobre la evolución de la seguridad en espectáculos musicales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Encuesta;