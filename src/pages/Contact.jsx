import React, { useState } from 'react';
import Button from '../components/Button.jsx';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <div>
      <section className="page-banner contact-banner">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Have questions or ready to plan your next trip? We’d love to hear from you.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <h2 className="section-title">Send Us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </label>
              <Button type="submit">Send Message</Button>
              {submitted && (
                <p className="form-success">
                  Thank you! We&apos;ll get back to you shortly.
                </p>
              )}
            </form>
          </div>

          <div>
            <h2 className="section-title">Contact Details</h2>
            <p>Email: support@travelx.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Wanderlust Avenue, Adventure City</p>

            <div className="map-placeholder">
              <p>Google Map Placeholder</p>
            </div>

            <div className="social-links contact-social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


