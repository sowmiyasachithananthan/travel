import React, { useState } from 'react';
import Card from '../components/Card.jsx';

const destinationsData = [
  {
    id: 1,
    name: 'Maldives',
    category: 'Beach',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    description: 'Crystal clear waters, white sand beaches, and luxury resorts.'
  },
  {
    id: 2,
    name: 'Swiss Alps',
    category: 'Mountains',
    image: 'https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg',
    description: 'Snow-capped peaks, scenic trains, and cozy chalets.'
  },
  {
    id: 3,
    name: 'New York City',
    category: 'City',
    image: 'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg',
    description: 'Iconic skyline, Broadway shows, and world-class dining.'
  },
  {
    id: 4,
    name: 'Phuket',
    category: 'Beach',
    image: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg',
    description: 'Vibrant nightlife, turquoise seas, and island hopping.'
  },
  {
    id: 5,
    name: 'Kyoto',
    category: 'City',
    image: 'https://images.pexels.com/photos/2086748/pexels-photo-2086748.jpeg',
    description: 'Historic temples, cherry blossoms, and traditional culture.'
  },
  {
    id: 6,
    name: 'Himalayas',
    category: 'Mountains',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    description: 'Trekking routes, spiritual retreats, and breathtaking views.'
  }
];

const categories = ['All', 'Beach', 'Mountains', 'City'];

const Destinations = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? destinationsData
    : destinationsData.filter((d) => d.category === activeCategory);

  return (
    <div>
      <section className="page-banner destinations-banner">
        <div className="container">
          <h1>Explore Destinations</h1>
          <p>Find your perfect escape across beaches, mountains, and vibrant cities.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((cat) => (
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
            {filtered.map((dest) => (
              <Card
                key={dest.id}
                image={dest.image}
                title={dest.name}
                subtitle={dest.category}
                description={dest.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;


