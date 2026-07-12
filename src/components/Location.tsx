export default function Location() {
  return (
    <section className="bg-gray-50 border-y border-gray-100">
      <div className="max-w-3xl mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="w-10 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mb-3" />
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">¿Dónde está La Fría?</h2>
        <div className="text-gray-600 text-sm md:text-base space-y-1">
          <p>La Fría, García de Hevia, Táchira</p>
          <p>Región Andina de Venezuela</p>
          <p>Altitud: ~1.000 msnm</p>
          <p className="mt-3 font-medium text-gray-800">
            Centro comercial: Calle Principal, cerca de la Iglesia
          </p>
        </div>
      </div>
    </section>
  );
}
