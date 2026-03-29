import React from 'react';

const Privacy = () => {
  return (
    <div>
      <section className="page-banner about-banner">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Your privacy is important to us.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="privacy-content">
            <h2 className="section-title">Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, 
              book a trip, or contact us for support.
            </p>
            
            <h2 className="section-title">How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, 
              process transactions, and communicate with you.
            </p>
            
            <h2 className="section-title">Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>
            
            <h2 className="section-title">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <h2 className="section-title">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at 
              privacy@travelx.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
