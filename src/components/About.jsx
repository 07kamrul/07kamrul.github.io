import { FiGithub, FiLinkedin, FiMail, FiPhone, FiYoutube, FiTwitter } from 'react-icons/fi';
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

      <div className="about-subtitle">{personalInfo.title}</div>

      <div className="about-location">
        {personalInfo.location} &middot;{' '}
        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
      </div>

      <p className="about-bio">{personalInfo.about}</p>

      {/* Social icon buttons */}
      <div className="about-socials">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="about-social-btn"
          title="GitHub"
        >
          <FiGithub />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          className="about-social-btn"
          title="LinkedIn"
        >
          <FiLinkedin />
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="about-social-btn"
          title="Email"
        >
          <FiMail />
        </a>
        <a
          href={`tel:${personalInfo.phone}`}
          className="about-social-btn"
          title="Phone"
        >
          <FiPhone />
        </a>
      </div>
    </div>
  );
}
