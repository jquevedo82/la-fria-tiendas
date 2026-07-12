import { useState } from 'react';
import type { DirectoryStore } from '../types';
import StoreCard from './StoreCard';
import StoreModal from './StoreModal';

export default function StoreGrid({ stores }: { stores: DirectoryStore[] }) {
  const [openStore, setOpenStore] = useState<DirectoryStore | null>(null);

  if (stores.length === 0) {
    return (
      <p className="text-center text-gray-500 py-12">
        No encontramos tiendas con esa búsqueda o categoría.
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-4">
        {stores.map((store) => (
          <StoreCard key={store.slug} store={store} onOpenModal={() => setOpenStore(store)} />
        ))}
      </div>
      {openStore && <StoreModal store={openStore} onClose={() => setOpenStore(null)} />}
    </>
  );
}
