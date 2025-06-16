import React from 'react';
import { Users, Heart, Target, Mail } from 'lucide-react';

const Nosotros: React.FC = () => {
  const team = [
    {
      name: "Segundo Mercado",
      role: "",
      bio: "Estudiande de la carrera de Relaciones Publicas e Institucionales en la universidad CAECE en mar del plata. Ademas de fanatico de el rock nacional y los recitales.",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQFxz3S-RVuvtg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710002708313?e=1755734400&v=beta&t=3bZBFTuwZl9iuyCvzMnA86qiMY0WFibFDUsRKZE9lNk"
    },
    {
      name: "Manuel Contreras Brandan",
      role: "",
      bio: "estudiante de segundo año de relaciones publicas e institucionales, una persona entusiasta e creativa, con ganas de aprender y enfrentar nuevos desafíos.",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGP4HHjcyHIzw/profile-displayphoto-shrink_800_800/B4EZd2SYaSHgAk-/0/1750036220964?e=1755734400&v=beta&t=XJbfQ6KE7Qpraoy4v7gCtMWiHHG8KH7LbvQ6mv5Niso"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nosotros
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Somos un equipo de estudiantes, investigadores y activistas comprometidos 
            con preservar la memoria de las tragedias del rock nacional argentino
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gray-800 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Nuestra Misión</h3>
              <p className="text-gray-300">
                Preservar la memoria de las víctimas y educar sobre la importancia 
                de la seguridad en espectáculos musicales.
              </p>
            </div>
            
            <div className="text-center">
              <Target className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Nuestro Objetivo</h3>
              <p className="text-gray-300">
                Que las tragedias del pasado sirvan como lección para prevenir 
                futuras pérdidas de vidas humanas.
              </p>
            </div>
            
            <div className="text-center">
              <Users className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Nuestro Compromiso</h3>
              <p className="text-gray-300">
                Trabajar con rigor periodístico, respeto hacia las víctimas 
                y compromiso con la verdad histórica.
              </p>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Nuestra Historia</h2>
          
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                RockBarrial nació en 2025 como respuesta a la necesidad de mantener viva la memoria 
                de las tragedias que marcaron el rock nacional argentino. Decidimos crear un espacio digital 
                que sirviera como archivo histórico y centro de reflexión sobre estos eventos. Ademas de concientizar
                 sobre la responsaiblidad de las bandas y los relacionistas publicos de estas, de mantener la seguridad
                no solo de la banda sino del publico tambien 
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Nuestro nombre, "RockBarrial", hace referencia a las raíces populares del rock 
                argentino y su conexión profunda con los barrios y la gente común. Creemos que 
                estas tragedias no pueden ser olvidadas porque afectaron a familias reales, 
                a jóvenes con sueños y pasiones, a una comunidad entera.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Trabajamos de forma independiente, sin fines de lucro, con el único objetivo 
                de honrar la memoria de las víctimas y contribuir a que nunca más se repitan 
                tragedias similares en el mundo del rock nacional.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Nuestro Equipo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-red-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Nuestros Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Respeto</h3>
              <p className="text-gray-300">
                Tratamos cada historia con el respeto que merecen las víctimas y sus familias, 
                evitando el sensacionalismo y manteniendo siempre la dignidad humana como prioridad.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Rigor</h3>
              <p className="text-gray-300">
                Verificamos cada dato, contrastamos fuentes y trabajamos con metodología periodística 
                para asegurar la veracidad de la información que publicamos.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Memoria</h3>
              <p className="text-gray-300">
                Creemos que la memoria es fundamental para la construcción de una sociedad más justa. 
                Recordar es el primer paso para prevenir.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Compromiso</h3>
              <p className="text-gray-300">
                Estamos comprometidos con la verdad, la justicia y la construcción de un futuro 
                donde la música una sin poner en riesgo vidas humanas.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-8 text-center">
          <Mail className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Contactanos</h2>
          <p className="text-gray-300 mb-6">
            Si tienes información, testimonios o quieres colaborar con nuestro trabajo, 
            no dudes en ponerte en contacto con nosotros.
          </p>
          <div className="space-y-2">
            <p className="text-gray-300">
              <strong>Email:</strong> info@rockbarrial.com
            </p>
            <p className="text-gray-300">
              <strong>Redacción:</strong> redaccion@rockbarrial.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;