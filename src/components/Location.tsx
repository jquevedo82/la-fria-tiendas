export default function Location() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-primary-950 to-accent-900 text-white">
      {/* Mismo motivo de constelación del Hero, más sutil, para que la identidad de marca
          no se corte de golpe apenas se termina el Hero. */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 -right-10 w-64 h-64 rounded-full bg-accent-600/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-primary-500/20 blur-3xl" />
      </div>
      <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" preserveAspectRatio="none">
        <line x1="10%" y1="25%" x2="22%" y2="55%" stroke="#67e8f9" strokeWidth="1" />
        <line x1="85%" y1="20%" x2="93%" y2="50%" stroke="#e879f9" strokeWidth="1" />
        <circle cx="10%" cy="25%" r="2" fill="#22d3ee" />
        <circle cx="22%" cy="55%" r="2" fill="#22d3ee" />
        <circle cx="85%" cy="20%" r="2" fill="#e879f9" />
        <circle cx="93%" cy="50%" r="2.5" fill="#e879f9" />
      </svg>

      <div className="relative max-w-3xl mx-auto px-4 py-10 md:px-6 md:py-14">
        <div className="w-10 h-1 rounded-full bg-gradient-to-r from-primary-300 to-accent-400 mb-3" />
        <h2 className="font-display text-lg md:text-xl font-bold text-white mb-3 md:mb-4">¿Dónde está La Fría?</h2>
        <div className="text-slate-300 text-sm md:text-base space-y-1">
          <p>La Fría, García de Hevia, Táchira</p>
          <p>Región Andina de Venezuela</p>
          <p>Altitud: ~1.000 msnm</p>
        </div>
      </div>
    </section>
  );
}
