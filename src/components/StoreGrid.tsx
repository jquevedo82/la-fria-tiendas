import { useState } from 'react';
import type { DirectoryStore } from '../types';
import StoreCard from './StoreCard';
import StoreModal from './StoreModal';

interface Props {
  stores: DirectoryStore[];
  search?: string;
  category?: string | null;
}

export default function StoreGrid({ stores, search, category }: Props) {
  const [openStore, setOpenStore] = useState<DirectoryStore | null>(null);

  if (stores.length === 0) {
    const term = search?.trim();
    const message =
      term && category
        ? `No hay tiendas en "${category}" que coincidan con "${term}".`
        : term
          ? `No encontramos tiendas que coincidan con "${term}".`
          : category
            ? `No hay tiendas en "${category}" todavía.`
            : 'No encontramos tiendas con esa búsqueda o categoría.';
    return <p className="text-center text-gray-500 py-12">{message}</p>;
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
