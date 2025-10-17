import { Link } from 'react-router-dom';

export type LessonMeta = {
  title: string;
  slug: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  time: string;
};

export default function LessonList({ lessons }: { lessons: LessonMeta[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {lessons.map((l) => (
        <div key={l.slug} className="card card-hover p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{l.title}</h3>
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full capitalize">{l.difficulty}</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">Estimated time: {l.time}</p>
          <div className="mt-4">
            <Link className="btn btn-outline" to={l.slug}>Open lesson</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
