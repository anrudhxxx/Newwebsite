import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '@components/Breadcrumbs';
import Quiz from '@components/Quiz';
import CodeSandbox from '@components/CodeSandbox';
import { loadLesson, Lesson } from '@utils/content';

export default function LessonPage() {
  const { lang = '', slug = '' } = useParams();
  const [lesson, setLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    loadLesson(`/content/${lang}/beginner/${slug}.md`).then(setLesson);
  }, [lang, slug]);

  const quiz = useMemo(() => {
    return [
      { id: 'q1', prompt: 'This is a sample question?', choices: [
        { id: 'a', text: 'Yes', correct: true, explanation: 'Sample correct answer.' },
        { id: 'b', text: 'No' }
      ]}
    ];
  }, []);

  if (!lesson) return <div className="max-w-3xl mx-auto px-4 py-6">Loading…</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: lang.toUpperCase(), to: `/languages/${lang}` }, { label: lesson.title }]} />

      <article className="mt-4 rounded-2xl bg-white p-6 shadow-soft border">
        <header>
          <h1 className="text-2xl font-bold">{lesson.title}</h1>
          <p className="text-sm text-gray-600 mt-1">{lesson.time} • {lesson.difficulty}</p>
          {lesson.prerequisites && lesson.prerequisites.length > 0 && (
            <p className="text-sm text-gray-600 mt-2">Prerequisites: {lesson.prerequisites.join(', ')}</p>
          )}
        </header>
        <hr className="my-4" />
        <section dangerouslySetInnerHTML={{ __html: lesson.html }} />
      </article>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Live Code</h2>
        <CodeSandbox initialCode={`console.log('Hello from ${lang}!')`} />
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Quick Quiz</h2>
        <Quiz questions={quiz} />
      </section>

      <section className="mt-6">
        <a
          href={`/content/${lang}/beginner/${slug}.md`}
          download
          className="rounded-xl bg-black text-white px-4 py-2 inline-block"
        >
          Download Lesson Markdown
        </a>
      </section>
    </div>
  );
}
