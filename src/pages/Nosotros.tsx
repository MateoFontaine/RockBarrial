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
      image: "https://lh3.googleusercontent.com/fife/ALs6j_H4zyv4fXm1GHXUFTlTjJHE6GQ2WJDeqRMTuTU8YhWv6vruUICdmXVuvQPudtWagtv4Yb0nDADvBvU3zZVTnrng1jspynIKgyjrrnbRg2Xi8Ep6wEbMzw91PUHGv3DO7v7D3fj9Bjcwpq-AYUy3KCQfSnDBKLhpeATOuCN9-K-eDvIFDWTC9FR0fm7aPKoj3W5uQQ85UhRyAmVYkImaQKTKSzpDCntnwOnj0ITa5kaSP8uaz1AdSU0sgdbnIFvlC5dsn2HxPtl_P4SBFAPAoHhFDntMseikod8PClq7lp1oY_Ihl2z43hSWpGdZpZEeAcHW91fIziLU-aO5UMIHNSnq05fur0HKXg59DeKdPLh7l_G7C8bgnVFAzZ8QOzCT33QS3nhKnQ2ckx4hv-xDveaJb20E8Y0U80KdCNPtXiCvLMy7I8cbCQOqmy8YKtaHWRHmjqjZsen5wG_BptHY5hVnqRMzl2_FQzmIoAaFFJERuw89XaK5BQ2dx42rc2MIye_dBskKfs9wRPd3dTt_UovhRyfaxOHhWRpUgj7lb4TvHr1QzBJUTRNJ7Op_nh3Vm2oMWwPU9U4Pq94PJoET42tMpwZ6_EG1JV7U5TKsm3aV4jn9PY-y2yiRM-bMpYOomBd2v6ArrP77fh-K06x197WNf_AHztzbu7RvTXOwK_ONPMS7Em0n2hI5mWozbE-v5hlA93gCYvkgEY6BU9RmMkx9MFK5UQ_B9Dm3FNGibcWW55xCvzWG2e2LvvQn2h623TYcxl61R3wms9PiRkUl5X7AFgi9b1wRxfe3Tik0qGjPPfSylLcDGF41ZA3dq11yKjIvbBUyo3jAB7EFBCj_cP6sCIZc-nK36BQMmBROliWm_hehIOFSW80GpRQ-Y5XJsdgdyDmy4VzwxgLPMyRl9je_VoF6NG9H0liPR1FGJySFmPrqa_jEENy5d0EBda3Atu6MEAg71CfA0B0xGAF-0m6IowIVRAcctZ3GodovEM6kMm_ilkoDPyfn3ZJcCV8Ex_RZP-Ky9nZQGmj7ol_wI6lDd6rsoKeUg7CgYFvTuKW3DIMIqW_1A7j8r5jXYnr9qX5n_P7cGM1tROFZWfpRc7--mToQdN70S8EWz8hh5zATr1qO2E_VpNcVtK7O57rIpxAPFf16Dztrj3J8FKwyHmh78m_waD5ejtC5ovrYnh4F_cJXK0rsTmSxk0XiuKMcKmBSJFVN9MZoohghbkxfnpcp3_eU1ZhJ_55lR2uJZj611ZlnCA1_NXQ4cP7o48ccLmomPSHg58Ug0Dj75IWScKMhZgKTFwKNG5gL20rB0khxjeJ4tvJMoA2E0DzVM9xkL9kOONcKIOhJIrPJwzAx3n7nMXOReomv1nGhMhf7JziGfAdm5ofEV_93lT84l9iimGlFwmekkoVgu94pcaMkWgHfxs0jNV0NkxXhzwITdBcW0MTbMv6rIZc6cBxzCf38w-ELuTpllXr02rdf8k8by7S3S8-Rp0qI69-cQgdRNoNZzYaQmf37j3QttalSEmkqAh_MKPnAnukBzjMeWLHZHfPMa0Y7P4RuOK2e3JfmvUXi8nNA0kAWzS7GVDfbrqLaGhej3s_h4J-TBzyrjDFidLt781wLgXLALdLE7giqFHNU=w2000-h4120?auditContext=forDisplay"
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