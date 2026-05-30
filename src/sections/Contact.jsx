import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'service_wu6vub2',
        'template_h786g96',
        { name: form.name, email: form.email, title: form.subject, message: form.message },
        'dmR033TUxG2lPWFbG'
      );
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch (error) {
      setLoading(false);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg">
        <img src="/assets/form-background.jpg" alt="background" className="contact-bg-img" />
        <div className="contact-bg-overlay" />
      </div>

      <div className="contact-content">
        <div className="section-header">
          <span className="section-tag">Say Hello</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-wrapper">
          {/* Left info */}
          <div className="contact-info">
            <h3 className="contact-info-title">Let's Build Something Together</h3>
            <p className="contact-info-text">
              Looking for someone to bring your ideas to life — mobile, desktop, or web? 
              I also offer tutoring for computer science courses.
            </p>

            <div className="contact-links">
              <a
                href="https://github.com/emanestares"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <img src="/assets/github.png" alt="github" className="contact-link-icon" />
                <div>
                  <p className="contact-link-label">GitHub</p>
                  <p className="contact-link-value">@emanestares</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/frederick-emmanuel-estares-566820245/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <img src="/assets/linkedin.png" alt="linkedin" className="contact-link-icon" />
                <div>
                  <p className="contact-link-label">LinkedIn</p>
                  <p className="contact-link-value">Frederick Emmanuel Estares</p>
                </div>
              </a>
            </div>

            <a
              href="/assets/cv.pdf"
              download="Emmanuel_Estares_CV.pdf"
              className="resume-download-btn mt-6 inline-flex"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Download Resume
            </a>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {sent && (
              <div className="form-success">
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-field">
                  <label className="field-label">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="Juan Dela Cruz"
                  />
                </div>
                <div className="form-field">
                  <label className="field-label">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="juan@email.com"
                  />
                </div>
              </div>
              <div className="form-field">
                <label className="field-label">Subject</label>
                <input
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="Re: Hire you"
                />
              </div>
              <div className="form-field">
                <label className="field-label">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="field-input"
                  placeholder="Hello! I would like to..."
                />
              </div>
              <button className="form-submit-btn" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <img src="/assets/arrow.png" alt="arrow" className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
