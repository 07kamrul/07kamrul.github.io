import { useState } from 'react';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin, FiSend, FiMessageSquare } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const contactDetails = [
  { icon: <FiMail />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: <FiPhone />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: <FiGithub />, label: 'GitHub', value: 'github.com/07kamrul', href: personalInfo.github },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/07kamrul', href: personalInfo.linkedin },
  { icon: <FiMapPin />, label: 'Location', value: personalInfo.location, href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="resume-section">
      <h2 className="section-heading">
        <FiMessageSquare className="section-icon" />
        Contact
      </h2>

      <div className="contact-grid">
        {/* Info */}
        <div className="contact-info">
          <h3>Let's Build Something Together</h3>
          <p>
            I'm open to full-time opportunities, freelance projects, or just a good conversation about tech.
            Reach out anytime!
          </p>

          {contactDetails.map((item) => (
            <div key={item.label} className="contact-detail">
              {item.icon}
              <span className="contact-label">{item.label}</span>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer">{item.value}</a>
              ) : (
                <span>{item.value}</span>
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                className="form-input"
                type="text"
                placeholder="What's it about?"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-input form-textarea"
                placeholder="Tell me about your project or opportunity..."
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-submit">
              {sent ? (
                '✅ Opening email client...'
              ) : (
                <><FiSend /> Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
