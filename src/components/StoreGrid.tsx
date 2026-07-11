import type { DirectoryStore } from '../types';
import StoreCard from './StoreCard';

export default function StoreGrid({ stores }: { stores: DirectoryStore[] }) {
  if (stores.length === 0) {
    return (
      <p className="text-center text-gray-500 py-12">
        No encontramos tiendas con esa búsqueda o categoría.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {stores.map((store) => (
        <StoreCard key={store.slug} store={store} />
      ))}
    </div>
  );
}
