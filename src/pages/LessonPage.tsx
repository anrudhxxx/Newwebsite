import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SEO } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Quiz, { type QuizQuestion } from '@/components/Quiz';
import DownloadSnippet from '@/components/DownloadSnippet';
import { loadLesson, type Lesson } from '@/lib/content';
import SandboxEmbed from '@/components/SandboxEmbed';
import { marked } from 'marked';

export default function LessonPage() {
  const { language = '', slug = '' } = useParams();
  const [lesson, setLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    async function run() {
      try {
        const res = await fetch(`/content/${language}/beginner/${slug}.md`);
        const raw = await res.text();
        const data = await loadLesson(raw, language, slug);
        setLesson(data);
      } catch (err) {
        console.error(err);
      }
    }
    run();
  }, [language, slug]);

  const html = useMemo(() => (lesson ? marked.parse(lesson.content) : ''), [lesson]);
  const quiz: QuizQuestion[] = [
    { id: 'q1', question: 'What is a variable?', options: [
      { key: 'a', text: 'A storage for values' },
      { key: 'b', text: 'A programming language' },
      { key: 'c', text: 'A CSS selector' }
    ], answerKey: 'a', explanation: 'Variables store values referenced by a name.' },
    { id: 'q2', question: 'What does IDE stand for?', options: [
      { key: 'a', text: 'Integrated Development Environment' },
      { key: 'b', text: 'Internet Debug Engine' },
      { key: 'c', text: 'Internal Data Event' }
    ], answerKey: 'a', explanation: 'Common tool to write/run code.' }
  ];

  if (!lesson) return <p>Loading...</p>;

  return (
    <div>
      <SEO title={lesson.title} description={`Difficulty: ${lesson.difficulty} | Time: ${lesson.time}`} />
      <Breadcrumbs crumbs={[{ label: 'Home', to: '/' }, { label: lesson.language, to: `/languages/${lesson.language}` }, { label: lesson.title }]} />

      <article className="prose max-w-none prose-pre:bg-gray-900 prose-pre:text-white">
        <h1>{lesson.title}</h1>
        <p className="text-sm">Estimated time: {lesson.time} · Difficulty: <span className="capitalize">{lesson.difficulty}</span></p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Quiz</h2>
        <Quiz questions={quiz} />
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Download starter code</h2>
        <DownloadSnippet filename={`${lesson.slug}.txt`} code={lesson.content} />
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Try it</h2>
        <SandboxEmbed />
      </section>
    </div>
  );
}
