import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
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

const profileImage = `${import.meta.env.BASE_URL}profile.jpg`;

export default function Sidebar({ activeSection }) {
  const [firstName, ...restName] = personalInfo.name.split(' ');
  const lastName = restName.join(' ');

  return (
    <aside className="sidebar">
      {/* Profile photo */}
      <img
        src={profileImage}
        alt={personalInfo.name}
        className="sidebar__photo"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div className="sidebar__photo-placeholder" style={{ display: 'none' }}>KH</div>

      {/* Name */}
      <div className="sidebar__name">
        <span>{firstName} </span>{lastName}
      </div>
      <div className="sidebar__title">{personalInfo.title}</div>

      {/* Nav */}
      <nav className="sidebar__nav" aria-label="Primary">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            to={`/?section=${link.id}`}
            className={activeSection === link.id ? 'active' : ''}
            aria-current={activeSection === link.id ? 'true' : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Social icons */}
      <div className="sidebar__socials">
        <a href={personalInfo.github} target="_blank" rel="noreferrer" title="GitHub" aria-label="GitHub">
          <FiGithub />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" aria-label="LinkedIn">
          <FiLinkedin />
        </a>
        <a href={`mailto:${personalInfo.email}`} title="Email" aria-label="Email">
          <FiMail />
        </a>
        <a href={`tel:${personalInfo.phone}`} title="Phone" aria-label="Phone">
          <FiPhone />
        </a>
      </div>
      <ThemeToggle className="theme-toggle--sidebar" />
    </aside>
  );
}
