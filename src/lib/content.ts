import matter from 'gray-matter';

export type LessonFrontmatter = {
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  time: string;
  prerequisites?: string[];
  objectives?: string[];
};

export type Lesson = LessonFrontmatter & { slug: string; language: string; content: string };

export async function loadLesson(raw: string, language: string, slug: string): Promise<Lesson> {
  const { data, content } = matter(raw);
  const fm = data as LessonFrontmatter;
  return { ...fm, content, language, slug };
}
