import { useState, useEffect } from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
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

  return (
    <div className="resume-layout">
      <Sidebar activeSection={activeSection} />
      <MobileNav activeSection={activeSection} />

      <main className="content-area">
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>

        <footer className="resume-footer">
          <p>
            © {new Date().getFullYear()} Md. Kamrul Hasan &middot; Dhaka, Bangladesh &middot;{' '}
            <a href="https://github.com/07kamrul" target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
