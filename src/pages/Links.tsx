import React from 'react';
import { ExternalLink, FileText, Video, Music, BookOpen } from 'lucide-react';

const Links: React.FC = () => {
  const linkCategories = [
    {
      title: "Documentales y Videos",
      icon: Video,
      links: [
        { name: "Soda Stereo", url: "https://youtu.be/_MPrjUyig3E?si=nZMRCi41J16QLuWe", description: "Parte de los relatos..." },
        { name: "Walter Bulacio: Memoria y Justicia", url: "https://vm.tiktok.com/ZMSys6BdX/", description: "Documental sobre el caso Walter Bulacio" },
        { name: "Indio Solari", url: "https://youtu.be/fE6MUj8Gcc4?si=F6te7O7_zTgr32XH", description: "Juan lojo fue al recital..." },
        { name: "La Renga 2011", url: "https://youtu.be/Clc5b6tR8o8?si=2tk2GCHmKQ60l04-", description: "Miguel Herido con bengala..." },
        { name: "Joven Ricotero", url: "https://youtu.be/5r5XR-3pZd0?si=W5I5wGwN2flD92wx", description: "La policia contra el rock..." },
        { name: "Cromañón", url: "https://youtu.be/Y1-nZijnI60?si=iD-FeemYuZhzWEBU", description: "El 30 de diciembre de 2004..." },
        { name: "Indio Solari Olavarria", url: "https://www.tiktok.com/@eze_torres.mp4/video/7109660842710420737?_r=1&_t=ZM-8xAnjxllQW6", description: "Los redonditos de ricota..." },
        { name: "Pato Fontanet", url: "https://www.tiktok.com/@modern.clix/video/7324167404458708230?_r=1&_t=ZM-8xAnKqWMnCA", description: "Declaracion del cantante..." }
     
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Links y Recursos
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Recursos externos, documentales, artículos y material de investigación 
            sobre las tragedias del rock nacional argentino
          </p>
        </div>

        {/* Links Categories */}
        <div className="space-y-12">
          {linkCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <category.icon className="h-8 w-8 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    className="bg-gray-700 hover:bg-gray-600 p-6 rounded-lg transition-colors group block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                        {link.name}
                      </h3>
                      <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-red-400 transition-colors flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {link.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      
        {/* Disclaimer */}
        <div className="mt-12 bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-3">Nota Importante</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Los enlaces externos son proporcionados únicamente con fines informativos y educativos. 
            RockBarrial no se hace responsable del contenido de sitios web externos. Algunos enlaces 
            pueden requerir suscripción o registro para acceder al contenido completo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Links;