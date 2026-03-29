import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Discover Your Next Dream Destination with TravelX</h1>
            <p>
              Curated tours, seamless bookings, and unforgettable experiences across the globe.
            </p>
            <div className="hero-actions">
              <Button onClick={() => navigate('/contact')}>Book Your Trip</Button>
              <Button variant="ghost" onClick={() => navigate('/packages')}>
                View Packages
              </Button>
            </div>
            <div className="hero-stats">
              <div>
                <h3>10k+</h3>
                <p>Happy Travelers</p>
              </div>
              <div>
                <h3>120+</h3>
                <p>Destinations</p>
              </div>
              <div>
                <h3>4.9★</h3>
                <p>Customer Rating</p>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg"
              alt="Travelers enjoying a scenic view"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Popular Destinations</h2>
          <p className="section-subtitle">
            Hand-picked places loved by our travelers.
          </p>
          <div className="grid grid-3">
            <Card
              image="https://images.pexels.com/photos/3584435/pexels-photo-3584435.jpeg"
              title="Santorini, Greece"
              subtitle="Romantic sunsets and white-washed cliffs."
            />
            <Card
              image="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg"
              title="Bali, Indonesia"
              subtitle="Tropical beaches and lush rice terraces."
            />
            <Card
              image="https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg"
              title="Paris, France"
              subtitle="Iconic landmarks and hidden cafés."
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Featured Packages</h2>
          <div className="grid grid-3">
            <Card
              image="https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg"
              title="European Explorer"
              subtitle="10 days • 4 countries"
              price="$1,499"
              duration="10 Days"
              tag="Best Seller"
            >
              <Button>Book Now</Button>
            </Card>
            <Card
              image="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg"
              title="Tropical Escape"
              subtitle="7 days all-inclusive in Bali"
              price="$999"
              duration="7 Days"
              tag="Limited Offer"
            >
              <Button>Book Now</Button>
            </Card>
            <Card
              image="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg"
              title="Alpine Adventure"
              subtitle="5 days in the Swiss Alps"
              price="$1,199"
              duration="5 Days"
            >
              <Button>Book Now</Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="grid grid-4">
            <div className="feature">
              <span className="feature-icon">🧭</span>
              <h3>Expert Guides</h3>
              <p>Local experts ensure authentic experiences everywhere you go.</p>
            </div>
            <div className="feature">
              <span className="feature-icon">💳</span>
              <h3>Secure Payments</h3>
              <p>Safe and flexible payment options for peace of mind.</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🕒</span>
              <h3>24/7 Support</h3>
              <p>We’re here for you before, during, and after your trip.</p>
            </div>
            <div className="feature">
              <span className="feature-icon">⭐</span>
              <h3>Curated Packages</h3>
              <p>Thoughtfully designed tours for every travel style.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container stats-grid">
          <div>
            <h2 className="section-title">Travel Stats</h2>
            <p className="section-subtitle">
              Our numbers speak for the trust travelers place in us.
            </p>
          </div>
          <div className="stats">
            <div className="stat">
              <h3>10k+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>Trips Completed</p>
            </div>
            <div className="stat">
              <h3>80%</h3>
              <p>Repeat Bookings</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Expert Guides</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">What Our Travelers Say</h2>
          <div className="grid grid-3">
            <div className="testimonial">
              <p>
                “TravelX made our honeymoon absolutely unforgettable. Every detail was flawless.”
              </p>
              <h4>Emily &amp; James</h4>
              <span>Santorini Escape</span>
            </div>
            <div className="testimonial">
              <p>
                “The team listened to our needs and crafted the perfect family vacation.”
              </p>
              <h4>Rahul &amp; Family</h4>
              <span>Bali Adventures</span>
            </div>
            <div className="testimonial">
              <p>
                “From booking to boarding, everything was smooth and stress-free.”
              </p>
              <h4>Sarah K.</h4>
              <span>Paris City Break</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>
            Tell us where you want to go and we’ll handle the rest.
          </p>
          <Button onClick={() => navigate('/contact')}>Start Planning</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
