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
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
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

      <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center animate-fadeIn">
        {/* Logo con anillo de brillo */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 blur-2xl opacity-50 scale-110" />
          <img
            src="/logo.webp"
            alt="La Fría Conecta"
            className="relative w-24 h-24 md:w-28 md:h-28 drop-shadow-2xl"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-1">
          LA FRÍA{' '}
          <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400 bg-clip-text text-transparent">
            CONECTA
          </span>
        </h1>
        <p className="text-primary-200/80 text-sm md:text-base font-medium tracking-wide uppercase mb-5">
          Mostrando tu ciudad
        </p>
        <p className="text-slate-200 text-base md:text-lg max-w-2xl">
          Conectamos a los vecinos de La Fría con los mejores comercios, restaurantes y
          servicios de nuestra comunidad andina.
        </p>
      </div>
    </header>
  );
}
