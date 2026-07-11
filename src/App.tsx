import { useMemo, useState } from 'react';
import Hero from './components/Hero';
import DirectorySearch from './components/DirectorySearch';
import DirectoryFilters from './components/DirectoryFilters';
import StoreGrid from './components/StoreGrid';
import About from './components/About';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useDirectory } from './hooks/useDirectory';

export default function App() {
  const { data, loading, error } = useDirectory();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string | null>(null);

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

      <main className="max-w-6xl mx-auto px-6 py-12">
        {loading && <p className="text-center text-gray-400 py-12">Cargando tiendas...</p>}
        {error && <p className="text-center text-red-500 py-12">{error}</p>}
        {data && (
          <div className="space-y-5">
            <DirectorySearch value={search} onChange={setSearch} />
            <DirectoryFilters categories={categories} selected={category} onSelect={setCategory} />
            <StoreGrid stores={filteredStores} />
          </div>
        )}
      </main>

      <About />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}
