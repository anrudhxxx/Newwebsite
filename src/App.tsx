import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import LanguageHubPage from './pages/LanguageHubPage';
import LessonPage from './pages/LessonPage';
import AddLessonPage from './pages/AddLessonPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/languages/:language" element={<LanguageHubPage />} />
        <Route path="/lesson/:language/:slug" element={<LessonPage />} />
        <Route path="/admin/add-lesson" element={<AddLessonPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
