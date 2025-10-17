import React, { useMemo, useState } from 'react';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({ html: false, linkify: true, breaks: true });

export default function AdminPage() {
  const [frontmatter, setFrontmatter] = useState({
    title: '',
    time: '20 min',
    difficulty: 'beginner',
    lang: 'python',
    slug: 'lesson-1',
  });
  const [content, setContent] = useState('# Lesson Title\n\nWrite your content here.');

  const rendered = useMemo(() => md.render(content), [content]);

  const download = () => {
    const file = matter.stringify(content, frontmatter);
    const blob = new Blob([file], { type: 'text/markdown' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${frontmatter.slug}.md`;
    a.click();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold">Add Lesson</h1>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <input className="w-full rounded-xl border px-3 py-2" placeholder="Title" value={frontmatter.title} onChange={(e) => setFrontmatter({ ...frontmatter, title: e.target.value })} />
          <div className="grid grid-cols-2 gap-3">
            <input className="rounded-xl border px-3 py-2" placeholder="Time" value={frontmatter.time} onChange={(e) => setFrontmatter({ ...frontmatter, time: e.target.value })} />
            <select className="rounded-xl border px-3 py-2" value={frontmatter.difficulty} onChange={(e) => setFrontmatter({ ...frontmatter, difficulty: e.target.value })}>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <select className="rounded-xl border px-3 py-2" value={frontmatter.lang} onChange={(e) => setFrontmatter({ ...frontmatter, lang: e.target.value })}>
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="java">Java</option>
              <option value="c">C</option>
              <option value="cpp">C++</option>
              <option value="html-css">HTML/CSS</option>
            </select>
            <input className="rounded-xl border px-3 py-2" placeholder="Slug" value={frontmatter.slug} onChange={(e) => setFrontmatter({ ...frontmatter, slug: e.target.value })} />
          </div>
          <textarea className="w-full h-72 rounded-xl border p-2 font-mono text-sm" value={content} onChange={(e) => setContent(e.target.value)} />
          <button className="rounded-xl bg-black text-white px-4 py-2" onClick={download}>Download Markdown</button>
        </div>
        <div>
          <div className="rounded-2xl bg-white p-4 shadow-soft border">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: rendered }} />
          </div>
        </div>
      </div>
    </div>
  );
}
