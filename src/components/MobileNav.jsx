import { useState } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';

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

  return (
    <>
      <nav className="mobile-nav">
        <span className="mobile-nav__brand">{personalInfo.name}</span>
        <button
          className={`mobile-nav__hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={`/?section=${link.id}`}
              onClick={handleNav}
              className={activeSection === link.id ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
