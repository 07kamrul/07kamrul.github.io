import { useNavigate } from 'react-router-dom';
import { FiCalendar, FiCode } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

const monthOrder = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

const parseDateToken = (token) => {
  const value = token.trim();

  if (value === 'Present') {
    return Number.POSITIVE_INFINITY;
  }

  const monthYearMatch = value.match(/^([A-Za-z]{3})\s+(\d{4})$/);
  if (monthYearMatch) {
    const [, month, year] = monthYearMatch;
    return new Date(Number(year), monthOrder[month] ?? 0, 1).getTime();
  }

  const yearMatch = value.match(/^(\d{4})$/);
  if (yearMatch) {
    return new Date(Number(yearMatch[1]), 0, 1).getTime();
  }

  return 0;
};

const getProjectSortValue = (period) => {
  const [start = '', end = ''] = period.split('-').map((item) => item.trim());
  const endValue = parseDateToken(end || start);
  const startValue = parseDateToken(start);

  return { endValue, startValue };
};

export default function Projects() {
  const navigate = useNavigate();
  const sortedProjects = [...projects].sort((a, b) => {
    const aDate = getProjectSortValue(a.period);
    const bDate = getProjectSortValue(b.period);

    if (aDate.endValue !== bDate.endValue) {
      return bDate.endValue - aDate.endValue;
    }

    if (aDate.startValue !== bDate.startValue) {
      return bDate.startValue - aDate.startValue;
    }

    return b.id - a.id;
  });

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="resume-section">
      <h2 className="section-heading">
        <FiCode className="section-icon" />
        Projects
      </h2>

      <div className="projects-list">
        {sortedProjects.map((project) => (
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
            <div className="project-item__period"><FiCalendar /> {project.period}</div>
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
