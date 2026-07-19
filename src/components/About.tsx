export default function About() {
  return (
    <section id="quienes-somos" className="max-w-3xl mx-auto px-4 py-8 md:px-6 md:py-12 scroll-mt-16">
      <div className="w-10 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mb-3" />
      <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Quiénes somos</h2>
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
        <p className="font-medium text-gray-800">
          Porque en La Fría, los negocios no son impersonales — son de gente que importa.
        </p>
      </div>

      <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-100 text-gray-600 text-sm md:text-base leading-relaxed space-y-3 md:space-y-4">
        <p>
          Soy de acá. Nací, me crié y viví siempre en La Fría. Estudié Ingeniería en Sistemas
          en la UNET, en Táchira, y antes de esto fui docente del pueblo — primaria,
          secundaria y universidad.
        </p>
        <p>
          Con QSoft Solutions, mi empresa de desarrollo de sistemas, arranqué de una idea
          simple: que la tecnología también le llegue a los pueblos chicos. Un emprendimiento
          o negocio de acá no debería tener que pagar sumas grandes para tener presencia
          digital — se trata de modernizar sin perder lo de siempre.
        </p>
        <p>
          De ahí nace este directorio: la puerta más simple para que cualquier negocio, por
          chico que sea, tenga su espacio y se pueda encontrar. Y para el que quiera dar el
          siguiente paso, ahí está{' '}
          <a
            href="https://tucatalogo.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 font-medium hover:underline"
          >
            TuCatálogo
          </a>
          , para vender y mostrar productos online de verdad.
        </p>
        <p>
          Hoy este proyecto es 100% independiente. Si querés aportar, colaborar o sumarte de
          alguna forma, estoy abierto a eso.
        </p>
      </div>
    </section>
  );
}
