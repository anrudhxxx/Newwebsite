import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LessonList, { LessonMeta } from '@/components/LessonList';
import { SEO } from '@/lib/seo';

const SAMPLE: LessonMeta[] = [
  { title: 'Lesson 1: Getting Started', slug: './intro', difficulty: 'beginner', time: '20 min' },
  { title: 'Lesson 2: Variables', slug: './variables', difficulty: 'beginner', time: '25 min' }
];

export default function LanguageHubPage() {
  const { language } = useParams();
  const [filter, setFilter] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');

  const lessons = useMemo(() => SAMPLE.filter((l) => (filter === 'all' ? true : l.difficulty === filter)), [filter]);

  return (
    <div>
      <SEO title={`Language: ${language}`} description={`Browse ${language} lessons by difficulty.`} />
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold capitalize">{language}</h1>
        <Link to="/" className="text-sm text-brand-700 hover:underline">Back home</Link>
      </div>
      <div className="flex items-center gap-2 mb-4">
        {(['all','beginner','intermediate','advanced'] as const).map((d) => (
          <button key={d} className={`btn ${filter === d ? 'btn-primary' : 'btn-outline'}`} onClick={() => setFilter(d)}>
            {d}
          </button>
        ))}
      </div>
      <LessonList lessons={lessons} />
    </div>
  );
}
