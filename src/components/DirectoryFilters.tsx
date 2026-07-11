interface Props {
  categories: string[];
  selected: string | null;
  onSelect: (category: string | null) => void;
}

export default function DirectoryFilters({ categories, selected, onSelect }: Props) {
  if (categories.length === 0) return null;

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden">
      <button
        onClick={() => onSelect(null)}
        className={`shrink-0 text-sm px-4 py-2 rounded-full border font-medium transition-colors ${
          selected === null
            ? 'border-primary-600 bg-primary-50 text-primary-700'
            : 'border-gray-200 text-gray-600 hover:bg-gray-50'
        }`}
      >
        Todos
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`shrink-0 text-sm px-4 py-2 rounded-full border font-medium capitalize transition-colors ${
            selected === cat
              ? 'border-primary-600 bg-primary-50 text-primary-700'
              : 'border-gray-200 text-gray-600 hover:bg-gray-50'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
