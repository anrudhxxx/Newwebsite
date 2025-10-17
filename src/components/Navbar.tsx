import { Link, NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
      <div className="container max-w-6xl flex items-center justify-between py-3 px-4">
        <Link to="/" className="inline-flex items-center gap-2">
          <img src="/favicon.svg" alt="Logo" className="h-7 w-7" />
          <span className="font-semibold">Learn Programming</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/languages/python" className={({ isActive }) => isActive ? 'text-brand-700' : 'text-gray-700 hover:text-gray-900'}>Python</NavLink>
          <NavLink to="/languages/javascript" className={({ isActive }) => isActive ? 'text-brand-700' : 'text-gray-700 hover:text-gray-900'}>JavaScript</NavLink>
          <NavLink to="/languages/java" className={({ isActive }) => isActive ? 'text-brand-700' : 'text-gray-700 hover:text-gray-900'}>Java</NavLink>
          <NavLink to="/languages/c" className={({ isActive }) => isActive ? 'text-brand-700' : 'text-gray-700 hover:text-gray-900'}>C</NavLink>
          <NavLink to="/languages/cpp" className={({ isActive }) => isActive ? 'text-brand-700' : 'text-gray-700 hover:text-gray-900'}>C++</NavLink>
          <NavLink to="/languages/html-css" className={({ isActive }) => isActive ? 'text-brand-700' : 'text-gray-700 hover:text-gray-900'}>HTML/CSS</NavLink>
          <NavLink to="/admin/add-lesson" className={({ isActive }) => isActive ? 'text-brand-700' : 'text-gray-700 hover:text-gray-900'}>Add Lesson</NavLink>
        </nav>
      </div>
    </header>
  );
}
