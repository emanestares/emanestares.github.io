import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  // Fixed: was { messge: "" } (typo) — now correctly "message"
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
        {
          name: form.name,
          email: form.email,
          title: form.subject,
          message: form.message,
        },
        'dmR033TUxG2lPWFbG'
      );

      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {/* Background */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <img
            src="/assets/form-background.jpg"
            alt="form background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black" />
        </div>

        {/* Section header */}
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="head-text">Contact Me</h2>
        </div>

        <div className="contact-container">
          <h3 className="contact-title">Let's Talk</h3>
          <p className="contact-description">
            Looking for someone to bring your ideas to life — mobile, desktop, or web?
            I'm ready to help. I also offer tutoring for computer science courses.
          </p>

          {/* Success banner */}
          {sent && (
            <div className="success-banner">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Message sent! I'll get back to you soon.
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
            <div className="form-row">
              <label className="form-field">
                <span className="field-label">Full Name</span>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="Juan Dela Cruz"
                />
              </label>
              <label className="form-field">
                <span className="field-label">Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="juandelacruz@gmail.com"
                />
              </label>
            </div>

            <label className="form-field">
              <span className="field-label">Subject</span>
              <input
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Re: Hire you"
              />
            </label>

            <label className="form-field">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                className="field-input resize-none"
                placeholder="Hello! I would like to..."
              />
            </label>

            <button className="submit-btn" type="submit" disabled={loading}>
              {loading ? (
                <span className="flex items-center gap-2 justify-center">
                  <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2 justify-center">
                  Send Message
                  <img src="/assets/arrow.png" alt="arrow" className="w-5 h-5" />
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
