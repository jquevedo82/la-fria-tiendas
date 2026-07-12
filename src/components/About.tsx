export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="w-10 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mb-3" />
      <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Acerca de La Fría</h2>
      <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-3 md:space-y-4">
        <p>
          La Fría es un municipio de García de Hevia ubicado en las montañas de Táchira,
          Venezuela. Con un comercio vibrante y tradición agrícola, la localidad es punto de
          referencia para la región andina.
        </p>
        <p>
          Aquí, cada tienda tiene historia. Cada negocio es familiar. Y cada transacción es
          una conexión entre vecinos que se conocen, se respetan y construyen juntos.
        </p>
        <p>
          Este directorio existe para que la tradición de proximidad de La Fría se amplíe:
          que un vecino de otra vereda, un visitante de paso, o alguien que se muda a la
          zona, pueda descubrir rápidamente dónde comprar comida, servicio, diversión o lo
          que necesite.
        </p>
        <p className="font-medium text-gray-800">
          Porque en La Fría, los negocios no son impersonales — son de gente que importa.
        </p>
      </div>
    </section>
  );
}
