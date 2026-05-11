import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer__line" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <button className="footer__logo" onClick={scrollTop}>
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">KH</span>
            <span className="logo-bracket">/&gt;</span>
          </button>
          <p className="footer__tagline">Building scalable software with passion.</p>
        </div>

        <div className="footer__nav">
          {navLinks.map((link) => (
            <button key={link.id} className="footer__nav-link" onClick={() => scrollTo(link.id)}>
              {link.label}
            </button>
          ))}
        </div>

        <div className="footer__socials">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-icon">
            <FiGithub />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-icon">
            <FiLinkedin />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="social-icon">
            <FiMail />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} {personalInfo.name} &middot; {personalInfo.location}
        </p>
        <motion.button
          className="footer__top-btn"
          onClick={scrollTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowUp />
        </motion.button>
      </div>
    </footer>
  );
}
