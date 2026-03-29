import { useState } from 'react';

const navLinks = [
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education',  label: 'Education' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'Projects' },
  { id: 'contact',    label: 'Contact' },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function MobileNav({ activeSection }) {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <>
      <nav className="mobile-nav">
        <span className="mobile-nav__brand">Md. Kamrul Hasan</span>
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
            <a
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={activeSection === link.id ? 'active' : ''}
              style={{ cursor: 'pointer' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
