import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';

const packagesData = [
  {
    id: 1,
    name: 'Budget Europe Escape',
    category: 'Budget',
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
    price: '$799',
    duration: '7 Days',
    description: 'Affordable Europe highlights with comfortable stays.'
  },
  {
    id: 2,
    name: 'Luxury Maldives Retreat',
    category: 'Luxury',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    price: '$2,499',
    duration: '5 Days',
    description: 'Overwater villas, private dinners, and spa experiences.'
  },
  {
    id: 3,
    name: 'Family Thailand Fun',
    category: 'Family',
    image: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg',
    price: '$1,299',
    duration: '8 Days',
    description: 'Activities for all ages with family-friendly hotels.'
  },
  {
    id: 4,
    name: 'Luxury Alpine Escape',
    category: 'Luxury',
    image: 'https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg',
    price: '$2,099',
    duration: '6 Days',
    description: 'Ski passes, gourmet dining, and mountain spa access.'
  },
  {
    id: 5,
    name: 'Budget City Hoppers',
    category: 'Budget',
    image: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg',
    price: '$599',
    duration: '5 Days',
    description: 'Discover major cities on a tight budget.'
  },
  {
    id: 6,
    name: 'Family Euro Discovery',
    category: 'Family',
    image: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg',
    price: '$1,899',
    duration: '9 Days',
    description: 'Family-friendly itinerary with guided tours.'
  }
];

const packageCategories = ['All', 'Budget', 'Luxury', 'Family'];

const Packages = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const filtered = activeCategory === 'All'
    ? packagesData
    : packagesData.filter((p) => p.category === activeCategory);

  return (
    <div>
      <section className="page-banner packages-banner">
        <div className="container">
          <h1>Travel Packages</h1>
          <p>Choose from budget-friendly, luxury, and family packages tailored to you.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-tabs">
            {packageCategories.map((cat) => (
              <button
                key={cat}
                className={cat === activeCategory ? 'filter-tab active' : 'filter-tab'}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-3">
            {filtered.map((pkg) => (
              <Card
                key={pkg.id}
                image={pkg.image}
                title={pkg.name}
                subtitle={pkg.category}
                description={pkg.description}
                price={pkg.price}
                duration={pkg.duration}
                tag={pkg.category}
              >
                <Button onClick={() => navigate('/contact')}>Book Now</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container offers">
          <h2 className="section-title">Special Offers &amp; Discounts</h2>
          <p className="section-subtitle">
            Book early and save more on your next adventure.
          </p>
          <div className="grid grid-3">
            <div className="offer-card">
              <h3>Early Bird 15% Off</h3>
              <p>Book 60 days in advance and enjoy exclusive discounts.</p>
            </div>
            <div className="offer-card">
              <h3>Family &amp; Friends</h3>
              <p>Save when you travel in a group of 4 or more.</p>
            </div>
            <div className="offer-card">
              <h3>Last Minute Deals</h3>
              <p>Grab limited-time offers on selected destinations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;


