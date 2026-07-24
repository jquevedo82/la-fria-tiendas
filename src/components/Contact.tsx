export default function Contact() {
  return (
    <section id="contacto" className="max-w-3xl mx-auto px-4 py-8 md:px-6 md:py-12 text-center scroll-mt-16">
      <div className="w-10 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mb-3 mx-auto" />
      <h2 className="font-display text-lg md:text-xl font-bold text-gray-900 mb-1">Contáctanos</h2>
      <p className="text-gray-500 text-sm md:text-base mb-3">¿Preguntas sobre el directorio?</p>
      <div className="bg-primary-50/60 border border-primary-100 rounded-2xl p-4 md:p-5 space-y-3">
        <p className="text-gray-600 text-sm md:text-base">
          Cada tienda aparece con su WhatsApp. ¡Contáctalos directo!
        </p>
        <p className="text-gray-500 text-xs md:text-sm">
          ¿Algo sobre el proyecto en sí, alianzas o QSoft Solutions?{' '}
          <a href="mailto:hola@qsoftsolutions.pro" className="text-primary-600 font-medium hover:underline">
            hola@qsoftsolutions.pro
          </a>
        </p>
      </div>
    </section>
  );
}
