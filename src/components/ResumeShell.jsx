import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import ScrollHelpers from './ScrollHelpers';

export default function ResumeShell({ activeSection = 'about', children }) {
  return (
    <div className="resume-layout">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Sidebar activeSection={activeSection} />
      <MobileNav activeSection={activeSection} />
      <main id="main-content" className="content-area">{children}</main>
      <ScrollHelpers />
    </div>
  );
}
