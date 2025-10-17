import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumbs from '@components/Breadcrumbs';
import { loadLessonsForLanguage, Lesson } from '@utils/content';

export default function LanguageHubPage() {
  const { lang = '' } = useParams();
  const [q, setQ] = useState('');
  const [difficulty, setDifficulty] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    loadLessonsForLanguage(lang).then(setLessons);
  }, [lang]);

  const filtered = useMemo(() => {
    const k = q.toLowerCase();
    return lessons.filter((l) => {
      if (difficulty !== 'all' && l.difficulty !== difficulty) return false;
      return l.title.toLowerCase().includes(k);
    });
  }, [lessons, q, difficulty]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: lang.toUpperCase() }]} />

      <h1 className="mt-4 text-2xl font-bold">{lang.toUpperCase()} Lessons</h1>

      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <input
          className="w-full sm:max-w-sm rounded-xl border px-3 py-2"
          placeholder="Search lessons by title"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as any)}
          className="rounded-xl border px-3 py-2 w-full sm:w-48"
          aria-label="Filter by difficulty"
        >
          <option value="all">All</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {filtered.map((l) => (
          <Link key={l.slug} to={`/lesson/${l.lang}/${l.slug}`} className="rounded-2xl bg-white p-5 shadow-soft border block">
            <h3 className="font-semibold">{l.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{l.time} • {l.difficulty}</p>
          </Link>
        ))}
        {filtered.length === 0 && (
          <div className="text-gray-600">No lessons matched your filters.</div>
        )}
      </div>
    </div>
  );
}
