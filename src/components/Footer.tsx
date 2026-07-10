export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-10 px-6">
      <p className="text-base md:text-lg font-medium text-white mb-2">
        ¿No tienes catálogo online?
      </p>
      <a
        href="https://tucatalogo.pro"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-primary-400 hover:text-primary-300 font-medium"
      >
        Crea uno gratis →
      </a>
      <p className="text-xs text-gray-500 mt-6">Directorio de La Fría, con TuCatálogo</p>
    </footer>
  );
}
