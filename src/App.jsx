import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import ResumeFooter from './components/ResumeFooter';
import ResumeShell from './components/ResumeShell';

function Portfolio() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = ['about', 'experience', 'education', 'skills', 'projects', 'contact'];
    const handleScroll = () => {
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionId = new URLSearchParams(location.search).get('section');

    if (!sectionId) {
      return;
    }

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.search]);

  return (
    <ResumeShell activeSection={activeSection}>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
        <ResumeFooter />
    </ResumeShell>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/projects/:projectId" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
