import { useMemo, useState } from 'react';
import matter from 'gray-matter';
import { marked } from 'marked';
import { SEO } from '@/lib/seo';

export default function AddLessonPage() {
  const [title, setTitle] = useState('New Lesson');
  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [time, setTime] = useState('20 min');
  const [content, setContent] = useState(`# New Lesson\n\nWrite your lesson content here...`);

  const md = useMemo(() => {
    const fm = matter.stringify(content, { title, difficulty, time });
    return fm;
  }, [title, difficulty, time, content]);

  const html = useMemo(() => marked.parse(md), [md]);

  return (
    <div>
      <SEO title="Add Lesson" />
      <h1 className="text-2xl font-bold mb-4">Add Lesson (Markdown)</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card p-4">
          <div className="grid gap-3">
            <label className="grid gap-1">
              <span className="text-sm">Title</span>
              <input className="rounded-lg border p-2" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label className="grid gap-1">
              <span className="text-sm">Difficulty</span>
              <select className="rounded-lg border p-2" value={difficulty} onChange={(e) => setDifficulty(e.target.value as any)}>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </label>
            <label className="grid gap-1">
              <span className="text-sm">Estimated time</span>
              <input className="rounded-lg border p-2" value={time} onChange={(e) => setTime(e.target.value)} />
            </label>
            <label className="grid gap-1">
              <span className="text-sm">Content</span>
              <textarea className="rounded-lg border p-2 h-64" value={content} onChange={(e) => setContent(e.target.value)} />
            </label>
          </div>
        </div>
        <div className="card p-4">
          <h2 className="font-semibold mb-2">Preview</h2>
          <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>

      <div className="mt-4">
        <a className="btn btn-primary" href={`data:text/markdown;charset=utf-8,${encodeURIComponent(md)}`} download={`lesson-${Date.now()}.md`}>
          Download Markdown
        </a>
      </div>
    </div>
  );
}
