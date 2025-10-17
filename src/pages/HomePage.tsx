import React, { useMemo, useState } from 'react';
import SearchBar from '@components/SearchBar';
import LanguageCard from '@components/LanguageCard';

const LANGS = [
  { key: 'python', title: 'Python', color: '#3776AB', description: 'Beginner-friendly scripting and data science.' },
  { key: 'javascript', title: 'JavaScript', color: '#F7DF1E', description: 'The language of the web.' },
  { key: 'java', title: 'Java', color: '#EA2D2E', description: 'Enterprise, Android, and backend applications.' },
  { key: 'c', title: 'C', color: '#555555', description: 'Systems programming and embedded.' },
  { key: 'cpp', title: 'C++', color: '#00599C', description: 'High-performance applications and game engines.' },
  { key: 'html-css', title: 'HTML/CSS', color: '#E34F26', description: 'Structure and style for the web.' }
];

export default function HomePage() {
  const [q, setQ] = useState('');
  const items = useMemo(() => {
    const k = q.toLowerCase();
    return LANGS.filter((l) => l.title.toLowerCase().includes(k) || l.description.toLowerCase().includes(k));
  }, [q]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Learn to Code, Step by Step</h1>
        <p className="mt-2 text-gray-600">Interactive lessons, quizzes, and projects across popular languages.</p>
        <div className="mx-auto mt-6 max-w-xl">
          <SearchBar value={q} onChange={setQ} placeholder="Search languages…" />
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((l) => (
          <LanguageCard key={l.key} lang={l.key} title={l.title} color={l.color} description={l.description} count={5} />
        ))}
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Featured Lessons</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 shadow-soft border">
            <h3 className="font-semibold">Python: Variables & Types</h3>
            <p className="text-sm text-gray-600">Understand Python basics with practical examples.</p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-soft border">
            <h3 className="font-semibold">JavaScript: DOM Interactions</h3>
            <p className="text-sm text-gray-600">Manipulate the DOM and handle events.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
