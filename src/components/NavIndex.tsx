const LINKS = [
  { href: '#vitrina', label: 'Vitrina' },
  { href: '#quienes-somos', label: 'Quiénes somos' },
  { href: '#queres-aparecer', label: 'Querés aparecer' },
  { href: '#contacto', label: 'Contáctanos' },
];

export default function NavIndex() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden text-sm">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="shrink-0 py-3 font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
