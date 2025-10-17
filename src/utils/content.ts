import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

export type LessonFrontmatter = {
  title: string;
  time: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites?: string[];
  objectives?: string[];
  lang: string; // e.g., python, javascript
  slug: string;
};

export type Lesson = LessonFrontmatter & { html: string; raw: string };

const md = new MarkdownIt({ html: false, linkify: true, breaks: true });

export async function loadLesson(path: string): Promise<Lesson> {
  const res = await fetch(path);
  const raw = await res.text();
  const { data, content } = matter(raw);
  const html = md.render(content);
  return { ...(data as LessonFrontmatter), html, raw };
}

export async function loadLessonsForLanguage(lang: string): Promise<Lesson[]> {
  // Vite will copy from public; load list from a manifest or pattern
  // For scaffold, we use a static mapping based on known beginner samples
  const files = [`/content/${lang}/beginner/lesson-1.md`];
  const lessons: Lesson[] = [];
  for (const f of files) {
    try {
      lessons.push(await loadLesson(f));
    } catch {
      // ignore missing files in scaffold
    }
  }
  return lessons;
}
