import { personalInfo } from '../data/portfolioData';

export default function ResumeFooter() {
  return (
    <footer className="resume-footer">
      <p>
        &copy; {new Date().getFullYear()} {personalInfo.name} &middot; {personalInfo.location} &middot;{' '}
        <a href="https://github.com/07kamrul" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>
    </footer>
  );
}
