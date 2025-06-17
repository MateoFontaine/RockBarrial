import React, { useEffect, useState } from 'react';
import { Calendar, Users, Music } from 'lucide-react';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32xEcGNVdDSZIO5DINrwIZyh4Mgtir7XSKA&s',
  'https://tn.com.ar/resizer/v2/el-indio-solari-en-olavarria-las-repercusiones-en-el-mundo-FWM472MZJYDAE3E6D3C2RTCXNM.jpg?auth=d1c9212e791fd87b8edf6858fa71a8b86aecc1e1cc49470cdf6a542ce8d263bf&width=7670',
  'https://www.clarin.com/2024/11/02/c-nv7JtgK_1256x620__1.jpg',
  'https://www.clarin.com/2011/05/06/H1lca_b1Ne_1200x0.jpg',
  'https://www.tiempoar.com.ar/wp-content/uploads/2021/05/65365_65313-web-indio-misa_BIG.jpg',
  'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/08/05175054/shutterstock_294263531.jpg',
  
];

const Home: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Fondo con slider */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Contenido encima del fondo */}
      <div className="relative z-10 pt-16 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-lg shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400 to-transparent"></div>
            </div>

            <div className="relative z-10 p-8 md:p-12">
              <div className="mb-8">
                <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-2">ROCK</h1>
                <h1 className="text-6xl md:text-8xl font-black text-yellow-300 leading-none">Barrial</h1>
                <h2 className="text-white text-xl md:text-xl font-medium mt-4 max-w-md">
                  Las grandes tragedias dentro del rock Argentino
                </h2>
                <p><br /> RockBarrial nace como un espacio de memoria y reflexión. Nuestro objetivo es visibilizar las tragedias del rock nacional argentino, entendiendo sus causas, consecuencias y silencios. A través de una mirada crítica y comprometida, buscamos honrar a las víctimas, aprender del pasado y promover una cultura más consciente y segura.</p>
                <p> <br />Segundo Mercado, Manuel Contreras</p>
              </div>

              {/* Grid de imágenes */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {images.map((src, i) => (
                  <div key={i} className="relative group col-span-1 md:col-span-1">
                    <img
                      src={src}
                      alt={`Slide ${i}`}
                      className="w-full h-32 md:h-40 object-cover rounded-lg border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 text-white">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
              <div className="text-2xl font-bold">30+</div>
              <div className="text-sm opacity-80">Años de Historia</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 text-white">
              <Users className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm opacity-80">Víctimas</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 text-white">
              <Music className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
              <div className="text-2xl font-bold">7</div>
              <div className="text-sm opacity-80">Tragedias</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
