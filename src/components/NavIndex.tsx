import { useEffect, useRef, useState } from 'react';

const LINKS = [
  { href: '#vitrina', label: 'Vitrina' },
  { href: '#quienes-somos', label: 'Quiénes somos' },
  { href: '#queres-aparecer', label: 'Querés aparecer' },
  { href: '#contacto', label: 'Contáctanos' },
];

export default function NavIndex() {
  const [active, setActive] = useState('#vitrina');
  // Estado de intersección de CADA sección, no solo la que cambió en el último callback —
  // el callback de IntersectionObserver solo manda las entradas que cambiaron, no todas.
  const stateRef = useRef(new Map<string, { top: number; visible: boolean }>());

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => !!el,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          stateRef.current.set(`#${entry.target.id}`, {
            top: entry.boundingClientRect.top,
            visible: entry.isIntersecting,
          });
        }
        const visible = [...stateRef.current.entries()].filter(([, v]) => v.visible);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) => (a[1].top < b[1].top ? a : b));
        setActive(topMost[0]);
      },
      { rootMargin: '-15% 0px -70% 0px' },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden text-sm">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`shrink-0 py-3 font-medium border-b-2 transition-colors ${
              active === link.href
                ? 'text-primary-600 border-primary-600'
                : 'text-gray-600 border-transparent hover:text-primary-600'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
