import React from 'react';

const Terms = () => {
  return (
    <div>
      <section className="page-banner about-banner">
        <div className="container">
          <h1>Terms & Conditions</h1>
          <p>Please read these terms carefully before using our services.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="terms-content">
            <h2 className="section-title">Booking Terms</h2>
            <p>
              All bookings are subject to availability and confirmation. Payment must be received 
              in full before travel documents are issued.
            </p>
            
            <h2 className="section-title">Cancellation Policy</h2>
            <p>
              Cancellations made 30+ days before departure receive a full refund minus a $50 processing fee. 
              Cancellations made 15-29 days before departure receive a 50% refund. 
              Cancellations made less than 15 days before departure are non-refundable.
            </p>
            
            <h2 className="section-title">Travel Insurance</h2>
            <p>
              We strongly recommend purchasing travel insurance to protect against unexpected events, 
              including trip cancellation, medical emergencies, and lost luggage.
            </p>
            
            <h2 className="section-title">Passport & Visa Requirements</h2>
            <p>
              It is the traveler's responsibility to ensure they have valid passports and 
              any necessary visas for their destination. TravelX is not responsible for 
              denied entry due to improper documentation.
            </p>
            
            <h2 className="section-title">Limitation of Liability</h2>
            <p>
              TravelX acts as an intermediary between travelers and service providers. 
              We are not liable for any injury, death, damage, loss, delay, or irregularity 
              that may occur due to acts of third parties.
            </p>
            
            <h2 className="section-title">Changes to Itinerary</h2>
            <p>
              While we strive to operate tours as planned, we reserve the right to modify 
              itineraries when necessary for the safety and comfort of our clients.
            </p>
            
            <h2 className="section-title">Contact Information</h2>
            <p>
              For questions about these terms and conditions, please contact us at 
              legal@travelx.com or call +1 (555) 123-4567.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
