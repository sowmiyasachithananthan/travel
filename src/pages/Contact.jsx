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
            <p>Phone: +91 9876543210</p>
            <p>Address: Random Gadgets, 7, Twenty Star Complex, 2nd line, 2nd Line Beach Rd, Parry's, George Town, Chennai, Tamil Nadu 600001</p>

            <div className="map-placeholder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1996444.9763197561!2d77.79511951536207!3d12.227507886014322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d11.3803264!2d77.938688!4m5!1s0x3a526f5485ab7f33%3A0x7f5478378a66314b!2sRandom%20Gadgets%2C%207%2C%20Twenty%20Star%20Complex%2C%202nd%20line%2C%202nd%20Line%20Beach%20Rd%2C%20Parry's%2C%20George%20Town%2C%20Chennai%2C%20Tamil%20Nadu%20600001!3m2!1d13.0919689!2d80.29067309999999!5e0!3m2!1sen!2sin!4v1774871749837!5m2!1sen!2sin"
                style={{ border: 0, width: "100%", height: "200px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
