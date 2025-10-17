import { PropsWithChildren } from 'react';
import Analytics from './Analytics';
import { Navbar } from './Navbar';

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Analytics />
      <Navbar />
      <main className="container max-w-6xl py-8 px-4">{children}</main>
      <footer className="border-t mt-12 py-8 text-center text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} Learn Programming. Built with React + Tailwind.
        </p>
      </footer>
    </div>
  );
}
