import { FiBook } from 'react-icons/fi';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <div className="resume-section">
      <h2 className="section-heading">
        <FiBook className="section-icon" />
        Education
      </h2>

      {education.map((edu) => (
        <div key={edu.id} className="edu-item">
          <div className="edu-item__left">
            <div className="edu-item__degree">{edu.degree}</div>
            <div className="edu-item__field">{edu.field}</div>
            <div className="edu-item__institution">
              {edu.website ? (
                <a href={edu.website} target="_blank" rel="noreferrer">
                  {edu.institution}
                </a>
              ) : (
                edu.institution
              )}
            </div>
            <div className="edu-item__meta">{edu.location}</div>
            {edu.grade && (
              <div className="edu-item__detail">
                <strong>Grade:</strong> {edu.grade}
              </div>
            )}
            {edu.credits && (
              <div className="edu-item__detail">
                <strong>Credits:</strong> {edu.credits}
              </div>
            )}
            {edu.thesis && (
              <div className="edu-item__detail">
                <strong>Thesis:</strong> {edu.thesis}
              </div>
            )}
          </div>
          <div className="edu-item__period">{edu.period}</div>
        </div>
      ))}
    </div>
  );
}
