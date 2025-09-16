import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({name: "", email: "", subject: "",messge: ""})
  const [loading, setLoading] = useState(false);
  const handleChange = ({target: {name, value}}) => {
    setForm({...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        'service_wu6vub2',
        "template_h786g96",
        {
          name: form.name,
          email: form.email,
          title: form.subject,
          message: form.message
        },
        'dmR033TUxG2lPWFbG'
      )

      setLoading(false);

      alert ( ' Your message hase been sent!');

    } catch (error) {
      setLoading(false);

      console.log(error);

      alert ('Something went wrong.');
    }
  }

  return (
    <section className='c-space my-20' id="contact">
      <h3 className='head-text'>Contact Me</h3>
      <div className='relative min-h-screen flex items-center justify-center flex-col'>
        <img src="/assets/form-background.jpg" alt="form background" className='absolute inset-0 min-h-screen'/>
        <div className='contact-container'>
          <h3 className='head-text'>Let's Talk</h3>
          <p className='text-lg text-white-600 mt-3'>If you are looking for someone to make your ideas into actual application for mobile, desktop, and web, I am more than ready to help you! I also offer tutoring services for computer science courses. Feel free to contact me through the form below.</p>

          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
            <label className='space-y-3'>
              <span className='field-label'>Full Name</span>
              <input name="name" type="text" value={form.name} onChange={handleChange} required className='field-input' placeholder='Juan Dela Cruz'/>
            </label>

            <label className='space-y-3'>
              <span className='field-label'>Email</span>
              <input name="email" type="email" value={form.email} onChange={handleChange} required className='field-input' placeholder='juandelacruz@gmail.com'/>
            </label>

            <label className='space-y-3'>
              <span className='field-label'>Subject</span>
              <input name="subject" type="text" value={form.subject} onChange={handleChange} required className='field-input' placeholder='Re: Hire you'/>
            </label>

            <label className='space-y-3'>
              <span className='field-label'>Your Message</span>
              <textarea name="message" value={form.message} onChange={handleChange} required={5} cols={50} className='field-input' placeholder='Hello! I would like to...'/>
            </label>

            <button className='field-btn' type='submit' disabled={loading} >
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow.png" alt="arrow" className='w-4 h-4' />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;