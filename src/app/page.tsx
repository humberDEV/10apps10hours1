"use client";

interface App {
  id: number;
  name: string;
  url: string;
  description: string;
  randomWord: string;
}

const apps: App[] = [
  {
    id: 1,
    name: "World Compass",
    url: "https://world-compass.netlify.app",
    description:
      "Hice una brujula con IA para saber dónde ir cuando no tengas planes",
    randomWord: "Brújula",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 py-8 lg:px-6 lg:py-12">
        {/* Header Section */}
        <div className="mb-12">
          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">
              10 apps en 10 horas
            </h1>
            <div className="bg-green-500 px-2 py-1 rounded">
              <span className="text-white font-bold text-xs lg:text-sm">
                WEB
              </span>
            </div>
          </div>

          {/* Bio */}
          <div className="mb-6">
            <p className="text-base lg:text-xl text-gray-700 leading-relaxed">
              ¡Hola, soy{" "}
              <span className="bg-green-100 text-green-800 px-1 rounded font-semibold">
                Humber Voss
              </span>
              ! Mi objetivo es crear{" "}
              <span className="bg-green-100 text-green-800 px-1 rounded font-semibold">
                10 aplicaciones completas
              </span>{" "}
              en solo{" "}
              <span className="bg-green-100 text-green-800 px-1 rounded font-semibold">
                10 horas
              </span>{" "}
              ¿Seré capaz de hacerlo?
            </p>
          </div>

          {/* Social Buttons - Mobile optimized */}
          <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3">
            <a
              href="https://www.tiktok.com/@humbervoss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <div className="w-6 h-6 bg-gray-800 rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">T</span>
              </div>
              <span className="text-sm font-medium text-gray-700">
                Sígueme en TikTok
              </span>
            </a>

            <a
              href="https://github.com/humberDEV"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <div className="w-6 h-6 bg-gray-800 rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">G</span>
              </div>
              <span className="text-sm font-medium text-gray-700">
                Ver en GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/humberdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <div className="w-6 h-6 bg-gray-800 rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">L</span>
              </div>
              <span className="text-sm font-medium text-gray-700">
                Ver en LinkedIn
              </span>
            </a>
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-6">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6">
            Proyectos
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {apps
              .slice()
              .reverse()
              .map((app) => (
                <div key={app.id} className="group">
                  {/* Project Number */}
                  <div className="mb-3">
                    <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                      #{app.id}
                    </span>
                  </div>

                  {/* Preview Image */}
                  <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-xl mb-4">
                    {/* Logo real de World Compass */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-white">
                      <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm p-3">
                        <img
                          src="/world-compass.png"
                          alt="World Compass Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-center">
                        {app.name}
                      </h3>
                    </div>

                    {/* Overlay para efecto de pantalla */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                    {/* Efecto de brillo en las esquinas */}
                    <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {app.name}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {app.description}
                  </p>

                  {/* CTA Button */}
                  <div>
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Demo
                    </a>
                  </div>
                </div>
              ))}

            {/* Coming Soon Cards - Solo 2 placeholders */}
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i + 2} className="group">
                {/* Project Number */}
                <div className="mb-3">
                  <span className="bg-gray-400 text-white text-sm font-bold px-3 py-1 rounded-full">
                    #{i + 2}
                  </span>
                </div>

                {/* Preview Image */}
                <div className="aspect-video bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 animate-pulse"></div>
                    <p className="text-gray-500 font-medium">Próximamente</p>
                  </div>
                </div>

                {/* Title */}
                <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>

                {/* Subtitle */}
                <div className="h-4 bg-gray-200 rounded w-4/5 mb-4 animate-pulse"></div>

                {/* CTA Button */}
                <div className="h-12 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Banner */}
        <div className="mt-8 lg:mt-12 bg-green-50 border border-green-200 rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center">
          <div className="flex items-center justify-center gap-2 lg:gap-3 mb-2 lg:mb-3">
            <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs lg:text-sm">🚀</span>
            </div>
            <h3 className="text-base lg:text-lg font-bold text-green-800">
              Próximamente en TikTok
            </h3>
          </div>
          <p className="text-sm lg:text-base text-green-700">
            Siguiente proyecto en desarrollo...
          </p>
        </div>
      </div>
    </div>
  );
}
