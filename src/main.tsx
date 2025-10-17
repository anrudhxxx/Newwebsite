import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import HomePage from './pages/HomePage';
import LanguageHubPage from './pages/LanguageHubPage';
import LessonPage from './pages/LessonPage';
import AdminPage from './pages/AdminPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'languages/:lang', element: <LanguageHubPage /> },
      { path: 'lesson/:lang/:slug', element: <LessonPage /> },
      { path: 'admin', element: <AdminPage /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
