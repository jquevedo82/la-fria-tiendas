import { useEffect, useMemo, useState } from 'react';
import Hero from './components/Hero';
import NavIndex from './components/NavIndex';
import DirectorySearch from './components/DirectorySearch';
import DirectoryFilters from './components/DirectoryFilters';
import StoreGrid from './components/StoreGrid';
import About from './components/About';
import JoinSection from './components/JoinSection';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useDirectory } from './hooks/useDirectory';

export default function App() {
  const { data, loading, error } = useDirectory();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const categories = useMemo(() => {
    if (!data) return [];
    const set = new Set(data.stores.map((s) => s.category).filter((c): c is string => !!c));
    return Array.from(set).sort();
  }, [data]);

  const filteredStores = useMemo(() => {
    if (!data) return [];
    const term = search.trim().toLowerCase();
    return data.stores.filter((store) => {
      const matchesCategory = !category || store.category === category;
      const matchesSearch =
        !term ||
        store.name.toLowerCase().includes(term) ||
        (store.category ?? '').toLowerCase().includes(term) ||
        (store.tags ?? []).some((tag) => tag.toLowerCase().includes(term));
      return matchesCategory && matchesSearch;
    });
  }, [data, search, category]);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <NavIndex />

      <main id="vitrina" className="max-w-6xl mx-auto px-4 py-6 md:px-6 md:py-12 scroll-mt-16">
        {loading && <p className="text-center text-gray-400 py-8 md:py-12">Cargando tiendas...</p>}
        {error && <p className="text-center text-red-500 py-8 md:py-12">{error}</p>}
        {data && (
          <div>
            <div className="sticky top-[47px] z-30 bg-white pt-4 md:pt-6 pb-3 space-y-3 border-b border-gray-100">
              <DirectorySearch value={search} onChange={setSearch} />
              <DirectoryFilters categories={categories} selected={category} onSelect={setCategory} />
            </div>
            <div className="pt-4 md:pt-5">
              <StoreGrid stores={filteredStores} search={search} category={category} />
            </div>
          </div>
        )}
      </main>

      <About />
      <JoinSection />
      <Location />
      <Contact />
      <Footer />

      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-primary-600 hover:bg-primary-700 text-white shadow-lg flex items-center justify-center transition-colors z-40"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}
    </div>
  );
}
