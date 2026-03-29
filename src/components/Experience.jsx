import { FiBriefcase } from 'react-icons/fi';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <div className="resume-section">
      <h2 className="section-heading">
        <FiBriefcase className="section-icon" />
        Experience
      </h2>

      {experiences.map((exp) => (
        <div key={exp.id} className="exp-item">
          <div className="exp-item__left">
            <div className="exp-item__role">{exp.role}</div>
            <div className="exp-item__company">
              {exp.website ? (
                <a href={exp.website} target="_blank" rel="noreferrer">
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
            </div>
            <div className="exp-item__location">📍 {exp.location}</div>
            <p className="exp-item__desc">{exp.description}</p>
            <div className="exp-item__tags">
              {exp.tags.map((t) => (
                <span key={t} className="resume-tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="exp-item__period">{exp.period}</div>
        </div>
      ))}
    </div>
  );
}
