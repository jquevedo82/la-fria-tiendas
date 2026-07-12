export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-primary-950 to-accent-900 text-gray-300 text-center py-6 px-4 md:py-10 md:px-6">
      <div className="absolute -bottom-16 left-1/3 w-64 h-64 rounded-full bg-primary-500/20 blur-3xl pointer-events-none" />
      <p className="relative text-base md:text-lg font-medium text-white mb-2">
        ¿No tienes catálogo online?
      </p>
      <a
        href="https://tucatalogo.pro"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block bg-gradient-to-r from-primary-300 to-accent-400 bg-clip-text text-transparent font-semibold hover:opacity-80 transition-opacity"
      >
        Crea uno gratis →
      </a>
      <p className="relative text-xs text-gray-400 mt-6">Directorio de La Fría, con TuCatálogo</p>
    </footer>
  );
}
