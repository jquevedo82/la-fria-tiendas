interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function DirectorySearch({ value, onChange }: Props) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Busca tienda o categoría..."
        aria-label="Buscar tiendas"
        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:bg-white transition-colors"
      />
    </div>
  );
}
