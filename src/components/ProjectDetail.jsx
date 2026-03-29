import { FiArrowLeft, FiCalendar, FiFolder } from 'react-icons/fi';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import ResumeFooter from './ResumeFooter';
import ResumeShell from './ResumeShell';

export default function ProjectDetail() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const project = useMemo(
    () => projects.find((item) => String(item.id) === projectId),
    [projectId]
  );

  const handleBackClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate('/?section=projects', { replace: true });
  };

  if (!project || !project.title) {
    return (
      <ResumeShell activeSection="projects">
        <section className="resume-section project-detail-shell">
          <div className="project-detail-card project-detail-card--empty">
            <h1 className="section-heading">Project Not Found</h1>
            <p className="project-detail-lead">
              The project you requested could not be found. Return to the projects section to keep exploring.
            </p>
            <button onClick={handleBackClick} className="project-back-button" type="button">
              <FiArrowLeft />
              Back to Projects
            </button>
          </div>
        </section>
        <ResumeFooter />
      </ResumeShell>
    );
  }

  return (
    <ResumeShell activeSection="projects">
      <section className="resume-section project-detail-shell">
        <button onClick={handleBackClick} className="project-back-button" type="button">
          <FiArrowLeft />
          Back to Projects
        </button>

        <article className="project-detail-card">
          <header className="project-detail-hero">
            <div className="project-detail-header">
              <div className="project-detail-icon">{project.icon}</div>
              <div>
                <p className="project-detail-eyebrow">Project Spotlight</p>
                <h1 className="project-detail-title">{project.title}</h1>
              </div>
            </div>

            <div className="project-detail-meta-grid">
              <div className="project-detail-meta-card">
                <FiFolder className="project-detail-meta-icon" />
                <div>
                  <span className="project-detail-meta-label">Company</span>
                  <p className="project-detail-meta-value">{project.company}</p>
                </div>
              </div>
              <div className="project-detail-meta-card">
                <FiCalendar className="project-detail-meta-icon" />
                <div>
                  <span className="project-detail-meta-label">Timeline</span>
                  <p className="project-detail-meta-value">{project.period}</p>
                </div>
              </div>
            </div>
          </header>

          <div className="project-detail-section">
            <h2 className="project-detail-section-title">Overview</h2>
            <p className="project-detail-lead">{project.description}</p>
          </div>

          <div className="project-detail-section">
            <h2 className="project-detail-section-title">Technology Stack</h2>
            <div className="exp-item__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="resume-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="project-detail-section">
            <h2 className="project-detail-section-title">Privacy Policy</h2>
            <p className="project-detail-lead">{project.privacyPolicy?.intro}</p>

            <div className="project-policy-grid">
              {project.privacyPolicy?.sections?.map((section) => (
                <section key={section.title} className="project-policy-card">
                  <h3 className="project-policy-title">{section.title}</h3>
                  <p className="project-policy-summary">{section.summary}</p>
                  <ul className="project-policy-list">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </article>
      </section>
      <ResumeFooter />
    </ResumeShell>
  );
}
