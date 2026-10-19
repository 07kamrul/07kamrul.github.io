import { FiGithub, FiLinkedin, FiMail, FiPhone, FiSend, FiBriefcase } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const [firstName, ...restName] = personalInfo.name.split(' ');
  const lastName = restName.join(' ');

  return (
    <div className="resume-section">
      {/* Large name block */}
      <div className="about-name">
        {firstName}<span> {lastName}</span>
      </div>

      <p className="about-status"><span className="about-status__dot" aria-hidden="true" />Open to new opportunities</p>

      <div className="about-subtitle">{personalInfo.title}</div>

      <ul className="about-roles" aria-label="Areas of expertise">
        {personalInfo.titles.map((t) => <li key={t}>{t}</li>)}
      </ul>

      <div className="about-location">
        {personalInfo.location} &middot;{' '}
        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
      </div>

      <p className="about-bio">{personalInfo.about}</p>

      <div className="about-cta">
        <Link to="/?section=contact" className="btn btn--primary"><FiSend /> Get in touch</Link>
        <Link to="/?section=projects" className="btn btn--ghost"><FiBriefcase /> View projects</Link>
      </div>

      <dl className="about-stats">
        {personalInfo.stats.map((st) => (
          <div key={st.label} className="about-stat">
            <dd>{st.value}{st.suffix}</dd>
            <dt>{st.label}</dt>
          </div>
        ))}
      </dl>

      {/* Social icon buttons */}
      <div className="about-socials">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="about-social-btn"
          title="GitHub"
          aria-label="GitHub"
        >
          <FiGithub />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          className="about-social-btn"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <FiLinkedin />
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="about-social-btn"
          title="Email"
          aria-label="Email"
        >
          <FiMail />
        </a>
        <a
          href={`tel:${personalInfo.phone}`}
          className="about-social-btn"
          title="Phone"
          aria-label="Phone"
        >
          <FiPhone />
        </a>
      </div>
    </div>
  );
}
