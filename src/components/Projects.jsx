import { FiCode } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

export default function Projects() {

  const handleProjectClick = (projectId) => {
    const targetUrl = `${window.location.origin}/projects/${projectId}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="resume-section">
      <h2 className="section-heading">
        <FiCode className="section-icon" />
        Projects
      </h2>

      <div className="projects-list">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item"
            onClick={() => handleProjectClick(project.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleProjectClick(project.id);
              }
            }}
            title="Click to view full project details"
          >
            <div className="project-item__header">
              <div className="project-item__title">
                {project.icon} {project.title}
              </div>
              <div className="project-item__company">{project.company}</div>
            </div>
            <div className="project-item__period">📅 {project.period}</div>
            <p className="project-item__desc">{project.description}</p>
            <div className="exp-item__tags">
              {project.tags.map((t) => (
                <span key={t} className="resume-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
