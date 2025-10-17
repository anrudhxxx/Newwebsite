import { useState } from 'react';

export default function SearchBar({ onSearch }: { onSearch: (q: string) => void }) {
  const [q, setQ] = useState('');
  return (
    <div className="relative">
      <input
        aria-label="Search"
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          onSearch(e.target.value);
        }}
        placeholder="Search lessons..."
        className="w-full md:w-96 rounded-xl border border-gray-300 bg-white px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">⌘K</span>
    </div>
  );
}
