export default function About() {
  return (
    <section id="quienes-somos" className="max-w-3xl mx-auto px-4 py-8 md:px-6 md:py-12 scroll-mt-16">
      <div className="w-10 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mb-3" />
      <h2 className="font-display text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Quiénes somos</h2>
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
          Porque en La Fría, detrás de cada negocio hay gente que importa.
        </p>
      </div>

      <div className="mt-5 md:mt-6 bg-primary-50/60 border border-primary-100 rounded-2xl p-4 md:p-5">
        <h3 className="font-display text-sm md:text-base font-semibold text-gray-900 mb-2.5">
          ¿Sabías qué...?
        </h3>
        <ul className="text-gray-600 text-xs md:text-sm leading-relaxed space-y-2 list-disc list-inside md:text-justify">
          <li>
            El nombre no es casualidad: viene de "la fría", como le decían antiguamente a la
            fiebre que afectó a los primeros pobladores por los escalofríos que producía. Otra
            versión, que también circula, lo atribuye a una quebrada de agua fría donde los
            arrieros paraban a refrescarse.
          </li>
          <li>
            Por eso el nombre engaña: hoy el clima es tropical y cálido, el promedio ronda
            los 25°C, pero en la práctica suele sentirse bastante más.
          </li>
          <li>
            La Fría nació como estación terminal del Gran Ferrocarril del Táchira (1896), la
            vía que bajaba el café de los Andes hasta el Lago de Maracaibo. El edificio de la
            vieja estación hoy es el Cuerpo de Bomberos del municipio.
          </li>
          <li>
            Es un cruce de caminos real: puerta entre los Andes venezolanos, la cuenca del
            Lago de Maracaibo y la frontera con Colombia.
          </li>
        </ul>
      </div>

      <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-100 text-gray-600 text-sm md:text-base leading-relaxed space-y-3 md:space-y-4">
        <p>
          Soy de La Fría. Nací, me crié y viví ahí la mayor parte de mi vida. Estudié
          Informática en la UNET, y también Educación, y ya graduado di clases en el pueblo,
          en primaria, secundaria y universidad. Hace unos años me vine a vivir a Argentina,
          pero siempre supe que iba a volver, y ya estoy cerca.
        </p>
        <p>
          La Fría Conecta nace de esa distancia, y también de las ganas de reconectar antes
          de llegar, de querer que mi pueblo siga teniendo visibilidad y presencia mientras
          tanto.
        </p>
        <p>
          Con QSoft Solutions, la empresa de soluciones informáticas que estoy formando,
          apunto a algo más grande: que la tecnología también le llegue a los pueblos
          chicos. Un emprendimiento o negocio de acá no debería tener que pagar sumas
          grandes para tener presencia digital: se trata de modernizar sin perder lo de
          siempre.
        </p>
        <p>
          Y para el que quiera dar el siguiente paso, ahí está{' '}
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
          En esto también me acompaña Beatriz, colaboradora del proyecto, quien me ayuda a
          diseñar, repensar y afinar las ideas antes de llevarlas adelante.
        </p>
        <p>
          Hoy este proyecto es 100% independiente. Si querés aportar, colaborar o sumarte de
          alguna forma, estoy abierto a eso.
        </p>
      </div>
    </section>
  );
}
