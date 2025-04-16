import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
import './Workshop.css';

const Workshop = () => {
  const workshops = [
    {
      id: 1,
      title: "Pottery Making Workshop",
      artisan: "Master Rajesh from Jaipur",
      description: "Learn the ancient art of blue pottery using traditional techniques passed down through generations. Create your own ceramic pieces using natural materials and mineral pigments.",
      image: assets.pottery_workshop,
      date: "15 October 2026",
      duration: "2 days",
      location: "Jaipur, Rajasthan",
     
      skills: ["Clay preparation", "Wheel throwing", "Glazing", "Natural pigment application"]
    },
    {
      id: 2,
      title: "Handloom Weaving Experience",
      artisan: "Weaver's Collective from Varanasi",
      description: "Immerse yourself in the world of Banarasi silk weaving. Work alongside master weavers to create intricate patterns on traditional handlooms.",
      image: assets.weaving_workshop,
      date: "22-24 November 2026",
      duration: "3 days",
      location: "Varanasi, Uttar Pradesh",
   
      skills: ["Thread preparation", "Loom setup", "Pattern designing", "Silk weaving"]
    },
    {
      id: 3,
      title: "Block Printing & Natural Dyeing",
      artisan: "Chippa Family from Bagru",
      description: "Discover the secrets of traditional block printing using vegetable dyes. Create your own fabric designs with hand-carved wooden blocks and organic colors.",
      image: assets.block_print_workshop,
      date: "5 December 2026",
      duration: "1 day",
      location: "Patharprotima, West Bengal",
     
      skills: ["Fabric preparation", "Block carving basics", "Natural dye mixing", "Printing techniques"]
    },
    {
      id: 4,
      title: "Bamboo Craft Intensive",
      artisan: "Tribal Artisans from Assam",
      description: "Learn sustainable bamboo crafting techniques from Northeast India's master craftspeople. Create functional and decorative items from this versatile material.",
      image: assets.bamboo_workshop,
      date: "12-14 January 2026",
      duration: "3 days",
      location: "Guwahati, Assam",
     
      skills: ["Bamboo selection", "Splitting & treatment", "Weaving techniques", "Finishing methods"]
    }
  ];

  return (
    <div className="workshop-page">
  
      <section className="workshop-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Artisan Workshops</h1>
          <p>Learn traditional crafts directly from master artisans</p>
        </div>
      </section>

   
      <section className="workshop-intro">
        <div className="container">
          <h2>Hands-On Cultural Experiences</h2>
          <p>
            Our immersive workshops connect you with India's living craft traditions. 
            Learn authentic techniques from practitioners who have mastered their art 
            through years of dedicated practice.
          </p>
        </div>
      </section>


      <section className="workshop-listings">
        <div className="container">
          <div className="section-header">
            <h2>Upcoming Workshops</h2>
            <p>Book your spot for these unique learning experiences</p>
          </div>

          <div className="workshops-grid">
            {workshops.map((workshop) => (
              <div key={workshop.id} className="workshop-card">
                <div className="workshop-image">
                  <img src={workshop.image} alt={workshop.title} />
                  <div className="price-tag">{workshop.price}</div>
                </div>
                <div className="workshop-content">
                  <div className="workshop-header">
                    <h3>{workshop.title}</h3>
                    <p className="artisan-name">With {workshop.artisan}</p>
                  </div>
                  <p className="workshop-description">{workshop.description}</p>
                  
                  <div className="workshop-details">
                    <div className="detail-item">
                      <span className="detail-icon">📅</span>
                      <span>{workshop.date}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">⏳</span>
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">📍</span>
                      <span>{workshop.location}</span>
                    </div>
                  </div>

                  <div className="skills-section">
                    <h4>You'll Learn:</h4>
                    <div className="skills-list">
                      {workshop.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <button className="book-button">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

 
      <section className="workshop-testimonials">
        <div className="container">
          <h2>What Participants Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                "The pottery workshop transformed how I see handmade objects. Learning directly from Rajesh-ji gave me such appreciation for the skill involved."
              </div>
              <div className="testimonial-author">
                <img src={assets.user1} alt="Participant" />
                <div>
                  <p className="name">Priya M.</p>
                  <p className="workshop-attended">Pottery Workshop, June 2023</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                "As a designer, the block printing workshop gave me invaluable insight into traditional patterns and natural dye techniques I now use in my work."
              </div>
              <div className="testimonial-author">
                <img src={assets.user2} alt="Participant" />
                <div>
                  <p className="name">Arjun S.</p>
                  <p className="workshop-attended">Block Printing, April 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <section className="workshop-cta">
        <div className="container">
          <h2>Ready to Create with Master Artisans?</h2>
          <p>Join our mailing list to be first to know about new workshop dates</p>
          <div className="cta-form">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshop;