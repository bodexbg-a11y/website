import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAnimations } from './hooks/useAnimations';
import { LangProvider } from './context/LangContext';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatCta from './components/FloatCta';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

export default function App() {
  useAnimations();
  return (
    <LangProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
        <FloatCta />
      </BrowserRouter>
    </LangProvider>
  );
}
