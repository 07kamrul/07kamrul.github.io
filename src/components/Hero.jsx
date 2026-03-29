import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const profileImage = `${import.meta.env.BASE_URL}profile.jpg`;

const useTypewriter = (words, speed = 80, pause = 1800) => {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const delay = deleting
      ? speed / 2
      : charIdx === current.length ? pause : speed;

    const timer = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setDisplay(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else if (deleting && charIdx > 0) {
        setDisplay(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, words, wordIdx, speed, pause]);

  return display;
};

export default function Hero() {
  const typed = useTypewriter(personalInfo.titles);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="hero">
      <div className="container hero__inner">
        {/* Text column */}
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="hero__greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="greeting-wave">👋</span> Hello, I'm
          </motion.div>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Md. Kamrul
            <span className="gradient-text"> Hasan</span>
          </motion.h1>

          <motion.div
            className="hero__typewriter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="typewriter-text">{typed}</span>
            <span className="typewriter-cursor">|</span>
          </motion.div>

          <motion.p
            className="hero__bio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {personalInfo.about.slice(0, 160)}...
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <button className="btn btn-primary" onClick={() => scrollTo('contact')}>
              <FiMail /> Hire Me
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('projects')}>
              View Projects
            </button>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-icon" title="GitHub">
              <FiGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="social-icon" title="Email">
              <FiMail />
            </a>
            <div className="social-divider" />
            <span className="social-location">📍 {personalInfo.location}</span>
          </motion.div>
        </motion.div>

        {/* Photo column */}
        <motion.div
          className="hero__photo-wrap"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="hero__photo-ring hero__photo-ring--outer" />
          <div className="hero__photo-ring hero__photo-ring--inner" />
          <div className="hero__photo-container">
            <img
              src={profileImage}
              alt="Md. Kamrul Hasan"
              className="hero__photo"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
            />
            <div className="hero__photo-fallback">KH</div>
          </div>

          {/* Floating badges */}
          <motion.div
            className="hero__badge hero__badge--tl"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            <span>6+</span> Years Exp
          </motion.div>
          <motion.div
            className="hero__badge hero__badge--br"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
          >
            🚀 Open to Work
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        className="hero__scroll-cue"
        onClick={() => scrollTo('about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FiChevronDown size={24} />
      </motion.button>
    </div>
  );
}
