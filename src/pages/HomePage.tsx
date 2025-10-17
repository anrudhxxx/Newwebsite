import LanguageCard from '@/components/LanguageCard';
import SearchBar from '@/components/SearchBar';
import { SEO } from '@/lib/seo';

const LANGUAGES = [
  { name: 'Python', slug: 'python', description: 'Beginner-friendly language great for data and automation.' },
  { name: 'JavaScript', slug: 'javascript', description: 'The language of the web, everywhere with Node.js.' },
  { name: 'Java', slug: 'java', description: 'Robust, object-oriented language used in enterprise and Android.' },
  { name: 'C', slug: 'c', description: 'Low-level systems programming and embedded.' },
  { name: 'C++', slug: 'cpp', description: 'Performance and control with modern abstractions.' },
  { name: 'HTML/CSS', slug: 'html-css', description: 'The building blocks of the web.' }
];

export default function HomePage() {
  return (
    <div>
      <SEO title="Learn Programming" description="Interactive lessons for Python, Java, C, C++, JavaScript, HTML/CSS" />
      <section className="text-center py-10">
        <h1 className="text-3xl md:text-4xl font-bold">Learn Programming by Building</h1>
        <p className="mt-3 text-gray-600">Bite-sized lessons, quizzes, and interactive sandboxes.</p>
        <div className="mt-6 flex justify-center"><SearchBar onSearch={() => {}} /></div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {LANGUAGES.map((l) => (
          <LanguageCard key={l.slug} {...l} />
        ))}
      </section>
    </div>
  );
}
