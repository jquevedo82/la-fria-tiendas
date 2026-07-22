import { useEffect, useState } from 'react';
import type { DirectoryStore } from '../types';

const CLOSE_ANIMATION_MS = 180;

function waLink(phone: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent('Hola! Te vi en el directorio de La Fría')}`;
}

export default function StoreModal({ store, onClose }: { store: DirectoryStore; onClose: () => void }) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    if (closing) return;
    setClosing(true);
    setTimeout(onClose, CLOSE_ANIMATION_MS);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && handleClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closing]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 flex items-end md:items-center justify-center p-0 md:p-6 ${
        closing ? 'animate-overlayOut' : 'animate-overlayIn'
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white w-full md:max-w-lg md:rounded-2xl rounded-t-2xl overflow-hidden max-h-[90vh] overflow-y-auto ${
          closing ? 'animate-modalOut' : 'animate-modalIn'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-40 bg-gradient-to-br from-primary-400 to-primary-700 flex items-center justify-center text-5xl text-white">
          {store.profileImage ? (
            <img src={store.profileImage} alt={store.name} className="w-full h-full object-cover" />
          ) : (
            <span>🏪</span>
          )}
          <button
            onClick={handleClose}
            aria-label="Cerrar"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors text-sm leading-none"
          >
            ✕
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div>
            <h2 className="text-lg font-medium text-gray-900">{store.name}</h2>
            {store.category && (
              <p className="text-sm text-gray-500 capitalize mt-0.5">{store.category}</p>
            )}
          </div>

          {store.description && (
            <p className="text-sm text-gray-600">{store.description}</p>
          )}

          <div className="space-y-2 text-sm text-gray-600">
            {store.hours && (
              <p className="flex items-start gap-2">
                <span>🕐</span>
                <span>{store.hours}</span>
              </p>
            )}
            {store.address && (
              <p className="flex items-start gap-2">
                <span>📍</span>
                {store.mapsUrl ? (
                  <a
                    href={store.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-primary-600"
                  >
                    {store.address}
                  </a>
                ) : (
                  <span>{store.address}</span>
                )}
              </p>
            )}
            {store.websiteUrl && (
              <p className="flex items-start gap-2">
                <span>🌐</span>
                <a
                  href={store.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline break-all"
                >
                  {store.websiteUrl.replace(/^https?:\/\//, '')}
                </a>
              </p>
            )}
          </div>

          {store.tags && store.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {store.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full capitalize"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {store.whatsappPhone && (
            <a
              href={waLink(store.whatsappPhone)}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-medium transition-colors"
            >
              💬 Contactar por WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
