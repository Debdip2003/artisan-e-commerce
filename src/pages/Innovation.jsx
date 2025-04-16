import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
import './Innovation.css';

const Innovation = () => {
  const tutorials = [
    {
      id: 1,
      title: "Natural Dye Extraction",
      description: "Learn how artisans create vibrant colors using plants, flowers, and minerals instead of synthetic dyes. This ancient technique produces no chemical runoff and creates unique, earth-friendly hues.",
      videoId: "d9B6NTPCOjA",
      benefits: [
        "100% biodegradable materials",
        "No toxic chemicals in water systems",
        "Supports local plant biodiversity",
        "Creates unique, seasonal colors"
      ],
      materials: [
        "Turmeric (yellow)",
        "Indigo leaves (blue)",
        "Pomegranate rinds (gold)",
        "Madder root (red)"
      ]
    },
    {
      id: 2,
      title: "Handmade Paper from Agricultural Waste",
      description: "Discover how crop residues are transformed into beautiful, sturdy paper. This process gives new life to materials that would otherwise be burned, reducing air pollution.",
      videoId: "FOb34_s-K1M",
      benefits: [
        "Utilizes rice straw, banana stems, and cotton rags",
        "Zero chemical bleaching process",
        "Saves trees by using agricultural byproducts",
        "Biodegradable and compostable"
      ],
      materials: [
        "Rice straw",
        "Banana plant stems",
        "Cotton fabric scraps",
        "Natural binders like starch"
      ]
    },
    {
      id: 3,
      title: "Terracotta Without Kiln Firing",
      description: "Traditional sun-baked clay techniques that eliminate the need for fuel-intensive kilns. These methods have been used for centuries to create durable pottery with minimal environmental impact.",
      videoId: "qgRNWLxIEz0",
      benefits: [
        "No fossil fuels required",
        "Uses locally-sourced clay",
        "Natural cooling process",
        "Creates porous vessels ideal for water cooling"
      ],
      materials: [
        "Local clay deposits",
        "Rice husk for tempering",
        "Natural polishing stones",
        "Plant-based sealants"
      ]
    }
  ];

  return (
    <div className="innovation-container">
      <div className="innovation-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Green Craft Innovations</h1>
          <p>Traditional techniques for a sustainable future</p>
        </div>
      </div>

      <section className="innovation-intro">
        <div className="container">
          <h2>Eco-Conscious Artisanry</h2>
          <p>
            For generations, artisans have developed sustainable production methods that work in harmony with nature. 
            These time-tested techniques offer solutions to modern environmental challenges while preserving cultural heritage.
          </p>
        </div>
      </section>

      <section className="tutorials-section">
        <div className="section-header">
          <h2>Sustainable Craft Tutorials</h2>
          <p>Learn from master artisans practicing earth-friendly techniques</p>
        </div>

        <div className="tutorials-grid">
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="tutorial-card">
              <div className="tutorial-media">
                <div className="video-container">
                  <iframe 
                    src={`https://www.youtube.com/embed/${tutorial.videoId}`}
                    title={tutorial.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="tutorial-content">
                <h3>{tutorial.title}</h3>
                <p>{tutorial.description}</p>
                
                <div className="tutorial-details">
                  <div className="details-column">
                    <h4>Environmental Benefits:</h4>
                    <ul>
                      {tutorial.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="details-column">
                    <h4>Natural Materials Used:</h4>
                    <ul>
                      {tutorial.materials.map((material, index) => (
                        <li key={index}>{material}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="impact-section">
        <div className="impact-container">
          <div className="impact-content">
            <h2>Our Environmental Impact</h2>
            <p>
              By supporting these traditional techniques, our artisan partners have collectively:
            </p>
            <div className="impact-stats">
              <div className="stat-item">
                <div className="stat-number">5,200+</div>
                <div className="stat-label">Trees saved annually</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">28,000+</div>
                <div className="stat-label">Liters of clean water preserved</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">0</div>
                <div className="stat-label">Toxic chemicals released</div>
              </div>
            </div>
          </div>
          <div className="impact-image">
            <img src={assets.eco_impact} alt="Environmental impact" />
          </div>
        </div>
      </section>

      <section className="innovation-cta">
        <h2>Join the Sustainable Craft Movement</h2>
        <p>
          Learn these techniques directly from master artisans through our apprenticeship programs
        </p>
        <div className="cta-buttons">
          <button className="primary-btn">Explore Workshops</button>
          <button className="secondary-btn">Support Artisans</button>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
