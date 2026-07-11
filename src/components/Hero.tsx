import bannerImg from '../assets/banner.webp';

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-primary-950 to-accent-900 text-white">
      {/* Resplandores difuminados, tipo aura del logo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-500/30 blur-3xl animate-drift" />
        <div
          className="absolute -bottom-32 -right-16 w-[28rem] h-[28rem] rounded-full bg-accent-600/25 blur-3xl animate-drift"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-primary-400/20 blur-2xl" />
      </div>

      {/* Constelación — líneas + puntos, mismo motivo del arte de marca */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        preserveAspectRatio="none"
      >
        <line x1="8%" y1="20%" x2="20%" y2="45%" stroke="#67e8f9" strokeWidth="1" />
        <line x1="20%" y1="45%" x2="12%" y2="70%" stroke="#67e8f9" strokeWidth="1" />
        <line x1="82%" y1="15%" x2="92%" y2="40%" stroke="#e879f9" strokeWidth="1" />
        <line x1="92%" y1="40%" x2="80%" y2="60%" stroke="#e879f9" strokeWidth="1" />
        <circle cx="8%" cy="20%" r="2.5" fill="#22d3ee" />
        <circle cx="20%" cy="45%" r="2" fill="#22d3ee" />
        <circle cx="12%" cy="70%" r="2" fill="#22d3ee" />
        <circle cx="82%" cy="15%" r="2" fill="#e879f9" />
        <circle cx="92%" cy="40%" r="2.5" fill="#e879f9" />
        <circle cx="80%" cy="60%" r="2" fill="#e879f9" />
      </svg>

      {/* h1 oculto: el nombre ya está dibujado dentro del banner, esto es solo para accesibilidad/SEO */}
      <h1 className="sr-only">La Fría Conecta — Mostrando tu ciudad</h1>

      <div className="relative max-w-4xl mx-auto px-4 pt-14 pb-10 md:pt-20 md:pb-14 flex flex-col items-center text-center animate-fadeIn">
        {/* Banner con el nombre ya incluido — mask-image vuelve transparente el BORDE de la
            imagen (deja ver el fondo del header a través), no pinta nada encima del contenido. */}
        <img
          src={bannerImg}
          alt="La Fría Conecta — Mostrando tu ciudad"
          className="w-full max-w-2xl h-40 md:h-56 object-cover mb-6"
          style={{
            maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 80%)',
          }}
        />

        <p className="text-slate-200 text-base md:text-lg max-w-2xl -mt-4 md:-mt-8">
          Conectamos a los vecinos de La Fría con los mejores comercios, restaurantes y
          servicios de nuestra comunidad andina.
        </p>
      </div>
    </header>
  );
}
