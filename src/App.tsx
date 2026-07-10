import Hero from './components/Hero';
import StoreGrid from './components/StoreGrid';
import About from './components/About';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useDirectory } from './hooks/useDirectory';

export default function App() {
  const { data, loading, error } = useDirectory();

  return (
    <div className="min-h-screen bg-white">
      <Hero />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {loading && <p className="text-center text-gray-400 py-12">Cargando tiendas...</p>}
        {error && <p className="text-center text-red-500 py-12">{error}</p>}
        {data && <StoreGrid stores={data.stores} />}
      </main>

      <About />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}
