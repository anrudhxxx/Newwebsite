import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-soft z-10">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between" aria-label="Main">
          <Link to="/" className="text-xl font-semibold">CodePath</Link>
          <div className="flex items-center gap-4">
            <Link className="hover:underline" to="/languages/python">Python</Link>
            <Link className="hover:underline" to="/languages/javascript">JavaScript</Link>
            <Link className="hover:underline" to="/languages/java">Java</Link>
            <Link className="hover:underline" to="/languages/c">C</Link>
            <Link className="hover:underline" to="/languages/cpp">C++</Link>
            <Link className="hover:underline" to="/languages/html-css">HTML/CSS</Link>
            <Link className="rounded-lg bg-black text-white px-3 py-1" to="/admin">Admin</Link>
          </div>
        </nav>
      </header>

      <motion.main key={location.pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="flex-1">
        <Outlet />
      </motion.main>

      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} CodePath. All rights reserved.</p>
          <div className="flex gap-3">
            <a className="hover:underline" href="#" aria-label="Privacy">Privacy</a>
            <a className="hover:underline" href="#" aria-label="Terms">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
