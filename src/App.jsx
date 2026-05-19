import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { LangProvider } from './context/LangContext';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatCta from './components/FloatCta';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

export default function App() {
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
        <SpeedInsights />
      </BrowserRouter>
    </LangProvider>
  );
}
