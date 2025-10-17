import { Link } from 'react-router-dom';

type Crumb = { label: string; to?: string };

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="text-sm mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-gray-600">
        {crumbs.map((c, idx) => (
          <li key={idx} className="inline-flex items-center gap-2">
            {c.to ? (
              <Link className="hover:underline" to={c.to}>{c.label}</Link>
            ) : (
              <span aria-current="page" className="text-gray-900">{c.label}</span>
            )}
            {idx < crumbs.length - 1 && <span aria-hidden>›</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
