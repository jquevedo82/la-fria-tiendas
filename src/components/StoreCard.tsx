import type { DirectoryStore } from '../types';

const CATEGORY_GRADIENTS: Record<string, string> = {
  restaurante: 'from-orange-400 to-rose-500',
  abastos: 'from-lime-400 to-green-600',
  farmacia: 'from-sky-400 to-cyan-500',
  servicios: 'from-indigo-400 to-purple-600',
  default: 'from-primary-400 to-primary-700',
};

interface Props {
  store: DirectoryStore;
  onOpenModal: () => void;
}

export default function StoreCard({ store, onOpenModal }: Props) {
  const gradient = CATEGORY_GRADIENTS[store.category ?? ''] ?? CATEGORY_GRADIENTS.default;
  const actionLabel = store.hasStoreEnabled ? 'Ver catálogo' : 'Contactar';

  const content = (
    <>
      <div
        className={`h-24 bg-gradient-to-br ${gradient} flex items-center justify-center text-3xl text-white`}
      >
        {store.profileImage ? (
          <img src={store.profileImage} alt={store.name} className="w-full h-full object-cover" />
        ) : (
          <span>🏪</span>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium text-gray-900 truncate">{store.name}</h3>
        {store.category && (
          <p className="text-xs text-gray-500 mt-0.5 capitalize">{store.category}</p>
        )}
        <span className="mt-3 inline-block w-full text-center text-xs font-medium py-2 rounded-lg bg-primary-50 text-primary-700 group-hover:bg-primary-100 transition-colors">
          {actionLabel}
        </span>
      </div>
    </>
  );

  const className =
    'group block w-full text-left bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg';

  if (store.hasStoreEnabled) {
    return (
      <a
        href={`https://${store.slug}.tucatalogo.pro`}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onOpenModal} className={className}>
      {content}
    </button>
  );
}
