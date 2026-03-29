import React from 'react';

const About = () => {
  const timeline = [
    { year: '2015', text: 'TravelX was founded with a mission to make travel effortless.' },
    { year: '2017', text: 'Reached 1,000+ happy travelers across 20 destinations.' },
    { year: '2020', text: 'Expanded to curated luxury and family packages worldwide.' },
    { year: '2024', text: 'Launched our fully digital booking platform and mobile app.' }
  ];

  return (
    <div>
      <section className="page-banner about-banner">
        <div className="container">
          <h1>About TravelX</h1>
          <p>We design journeys that feel effortless, immersive, and unforgettable.</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <h2 className="section-title">Our Story</h2>
            <p>
              TravelX started as a small team of travel enthusiasts who believed that planning a
              trip should be as enjoyable as the journey itself. From our first curated trip to our
              latest global packages, our focus has always been on personalization and comfort.
            </p>
            <p>
              Today, we partner with trusted local experts around the world to deliver experiences
              that go beyond typical tours—immersive, culturally rich, and tailored to you.
            </p>
          </div>
          <div>
            <h2 className="section-title">Mission &amp; Vision</h2>
            <p>
              <strong>Mission:</strong> To make world travel easy, accessible, and memorable for
              every kind of traveler.
            </p>
            <p>
              <strong>Vision:</strong> To be the most loved travel companion, connecting people
              with places in meaningful ways.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Meet the Team</h2>
          <div className="grid grid-3">
            <div className="team-card">
              <img
                src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg"
                alt="Founder"
              />
              <h3>Alex Carter</h3>
              <p>Founder &amp; CEO</p>
            </div>
            <div className="team-card">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Head of Operations"
              />
              <h3>Maria Gomez</h3>
              <p>Head of Operations</p>
            </div>
            <div className="team-card">
              <img
                src="https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg"
                alt="Lead Travel Designer"
              />
              <h3>Ravi Singh</h3>
              <p>Lead Travel Designer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container achievements-grid">
          <div>
            <h2 className="section-title">Travel Achievements</h2>
            <ul className="achievements-list">
              <li>Recognized as a top emerging travel brand in 2022.</li>
              <li>Partnered with 100+ local travel operators worldwide.</li>
              <li>Maintained an average customer satisfaction score of 4.9/5.</li>
              <li>Enabled sustainable and responsible tourism initiatives in key destinations.</li>
            </ul>
          </div>
          <div>
            <h2 className="section-title">Our Journey</h2>
            <ul className="timeline">
              {timeline.map((item) => (
                <li key={item.year}>
                  <span className="timeline-year">{item.year}</span>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
