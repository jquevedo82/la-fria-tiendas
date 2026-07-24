// Número del dev por ahora — pendiente de definir el WhatsApp definitivo del directorio.
const DIRECTORY_WHATSAPP = '5491165560691';

function joinLink(): string {
  const text = encodeURIComponent('Hola! Quiero sumar mi negocio al directorio de La Fría Conecta');
  return `https://wa.me/${DIRECTORY_WHATSAPP}?text=${text}`;
}

export default function JoinSection() {
  return (
    <section id="queres-aparecer" className="max-w-3xl mx-auto px-4 py-8 md:px-6 md:py-12 text-center scroll-mt-16">
      <div className="w-10 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mb-3 mx-auto" />
      <h2 className="font-display text-lg md:text-xl font-bold text-gray-900 mb-1">Querés aparecer</h2>
      <p className="text-gray-500 text-sm md:text-base mb-3">¿Tenés un negocio en La Fría?</p>
      <p className="text-gray-600 text-sm md:text-base mb-5 max-w-xl mx-auto">
        Sumate al directorio gratis — mandanos tus datos y un par de fotos por WhatsApp y quedás
        visible para todo el que busque un negocio como el tuyo.
      </p>
      <a
        href={joinLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-xl transition-colors"
      >
        💬 Sumar mi negocio
      </a>
    </section>
  );
}
