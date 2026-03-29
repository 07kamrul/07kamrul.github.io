import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

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

export default function Sidebar({ activeSection }) {
  return (
    <aside className="sidebar">
      {/* Profile photo */}
      <img
        src="/profile.jpg"
        alt="Md. Kamrul Hasan"
        className="sidebar__photo"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div className="sidebar__photo-placeholder" style={{ display: 'none' }}>KH</div>

      {/* Name */}
      <div className="sidebar__name">
        <span>Md. Kamrul </span>Hasan
      </div>
      <div className="sidebar__title">{personalInfo.title}</div>

      {/* Nav */}
      <nav className="sidebar__nav">
        {navLinks.map((link) => (
          <a
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className={activeSection === link.id ? 'active' : ''}
            style={{ cursor: 'pointer' }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Social icons */}
      <div className="sidebar__socials">
        <a href={personalInfo.github} target="_blank" rel="noreferrer" title="GitHub">
          <FiGithub />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
          <FiLinkedin />
        </a>
        <a href={`mailto:${personalInfo.email}`} title="Email">
          <FiMail />
        </a>
        <a href={`tel:${personalInfo.phone}`} title="Phone">
          <FiPhone />
        </a>
      </div>
    </aside>
  );
}
