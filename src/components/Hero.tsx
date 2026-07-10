export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-white" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24 text-center animate-fadeIn">
        <p className="text-primary-100 text-sm md:text-base font-medium mb-2">
          La Fría — Directorio de Tiendas
        </p>
        <h1 className="text-3xl md:text-5xl font-medium mb-4">Bienvenido a La Fría</h1>
        <p className="text-primary-50 text-base md:text-lg max-w-2xl mx-auto">
          Conectamos a los vecinos de La Fría con los mejores comercios, restaurantes y
          servicios de nuestra comunidad andina.
        </p>
      </div>
    </header>
  );
}
