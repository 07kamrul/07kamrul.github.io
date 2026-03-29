import { useRef, useState, useEffect } from 'react';
import { FiStar } from 'react-icons/fi';
import { skills, topSkills } from '../data/portfolioData';

function AnimatedBar({ level, inView }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setWidth(level), 100);
      return () => clearTimeout(t);
    }
  }, [inView, level]);
  return (
    <div className="skill-bar-track">
      <div className="skill-bar-fill" style={{ width: `${width}%` }} />
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="resume-section" ref={ref}>
      <h2 className="section-heading">
        <FiStar className="section-icon" />
        Skills
      </h2>

      {/* Proficiency Bars */}
      <div className="skill-bars">
        <h3 className="skill-group__name" style={{ marginBottom: '1rem' }}>Core Proficiencies</h3>
        {topSkills.map((skill) => (
          <div key={skill.name} className="skill-bar-item">
            <div className="skill-bar-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <AnimatedBar level={skill.level} inView={inView} />
          </div>
        ))}
      </div>

      {/* Skill categories grid */}
      <div className="skills-grid">
        {skills.map((cat) => (
          <div key={cat.category}>
            <div className="skill-group__name">{cat.category}</div>
            <div className="skill-list">
              {cat.items.map((item) => (
                <span key={item} className="resume-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
