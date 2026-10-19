import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education',  label: 'Education' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'Projects' },
  { id: 'contact',    label: 'Contact' },
];

export default function MobileNav({ activeSection }) {
  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <nav className="mobile-nav" aria-label="Primary">
        <span className="mobile-nav__brand">{personalInfo.name}</span>
        <ThemeToggle className="theme-toggle--mobile" />
        <button
          className={`mobile-nav__hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {open && (
        <div className="mobile-menu" id="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={`/?section=${link.id}`}
              onClick={handleNav}
              className={activeSection === link.id ? 'active' : ''}
              aria-current={activeSection === link.id ? 'true' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
