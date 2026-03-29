import Sidebar from './Sidebar';
import MobileNav from './MobileNav';

export default function ResumeShell({ activeSection = 'about', children }) {
  return (
    <div className="resume-layout">
      <Sidebar activeSection={activeSection} />
      <MobileNav activeSection={activeSection} />
      <main className="content-area">{children}</main>
    </div>
  );
}
