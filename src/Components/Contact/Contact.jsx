import React, { useState } from 'react';
import './Contact.css';
import one from './1.png';
import two from './2.png';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const res = await fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        await res.json();
        setSubmitMessage('Form Submitted');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else throw new Error('Failed');
    } catch {
      setSubmitMessage('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
       <img src={two} className='half-bottom'></img>
        <img src={one} className='half-top'></img>
      <div className="contact-wrapper">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <p className="left-text">
            Whether you have an idea, a question, or simply want to explore how V can work together,
            V're just a message away.
          </p>
          <p className="left-text coffee">Let's catch up over coffee</p>
          <p className="left-text">
            Great stories always begin with a good conversation.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
         
          <h3 className="join-title">Join the Story</h3>
          <p className="join-subtitle">
            Ready to bring your vision to life? Let's talk.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your name*"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}

            <input
              type="email"
              name="email"
              placeholder="Your email*"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}

            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && <span className="error-msg">{errors.phone}</span>}

            <textarea
              name="message"
              placeholder="Your message*"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
            />
            {errors.message && (
              <span className="error-msg">{errors.message}</span>
            )}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting…' : 'Submit'}
            </button>

            {submitMessage && (
              <div
                className={`submit-msg ${
                  submitMessage.includes('Form Submitted') ? 'success' : 'fail'
                }`}
              >
                {submitMessage}
              </div>
            )}
          </form>

          <div className="contact-footer">
            <a href="mailto:vernita@varmanfilms.co.in" className="contact-link email">
              vernita@varmanfilms.co.in
            </a>
            <span className="separator">|</span>
            <a href="tel:+919873684567" className="contact-link phone">
              +91 98736 84567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;