import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import "./ProductJourney.css";

const ProductJourney = () => {
  const productCategories = [
    {
      name: "Handwoven",
      description:
        "Woven by hand on traditional looms, these fabrics carry warmth, heritage, and soul.",
      icon: "🧵",
      benefits: [
        "Only 5% platform fee (vs. 15-30% elsewhere)",
        "Direct payments to weavers within 3 days",
        "Free professional product photography",
        "Dedicated account manager for each artisan group",
      ],
    },
    {
      name: "Embroidery",
      description:
        "Fine needlework crafted with passion, showcasing detailed traditional artistry.",
      icon: "🪡",
      benefits: [
        "Zero listing fees for embroidery artisans",
        "Skill development workshops sponsored by us",
        "Fair trade certification assistance",
        "Bulk order discounts passed directly to artisans",
      ],
    },
    {
      name: "Terracotta",
      description:
        "Earthy, hand-molded clay creations inspired by rural traditions.",
      icon: "🏺",
      benefits: [
        "Clay sourcing assistance at wholesale rates",
        "Free kiln firing facility in partnership centers",
        "No middlemen - artisans keep 92% of sale price",
        "Damage protection during shipping",
      ],
    },
    {
      name: "Beadwork",
      description:
        "Delicate patterns built bead by bead, blending color, culture, and care.",
      icon: "🔮",
      benefits: [
        "Bead material subsidies for registered artisans",
        "Featured placement in seasonal collections",
        "Workshops on contemporary design trends",
        "Secure packaging solutions provided free",
      ],
    },
    {
      name: "Block Printing",
      description:
        "Hand-pressed block prints using natural dyes and carved wooden stamps.",
      icon: "🎨",
      benefits: [
        "Natural dye sourcing network",
        "Block carving tool reimbursement program",
        "15% higher earnings than market average",
        "International shipping facilitation",
      ],
    },
    {
      name: "Bamboo Craft",
      description:
        "Eco-friendly and beautifully crafted from locally sourced bamboo.",
      icon: "🎋",
      benefits: [
        "Sustainable material certification support",
        "Export documentation assistance",
        'Featured in our "Green Crafts" collection',
        "Tool maintenance workshops",
      ],
    },
    {
      name: "Stone Carving",
      description:
        "Sculpted with precision to preserve ancient motifs in modern forms.",
      icon: "🗿",
      benefits: [
        "Heavy item shipping at 50% subsidized rates",
        "Stone sourcing from ethical quarries",
        "Artisan safety equipment provided",
        "Commission-free custom orders",
      ],
    },
    {
      name: "Woodwork",
      description:
        "Hand-carved wood turned into timeless home and utility pieces.",
      icon: "🪵",
      benefits: [
        "Seasonal wood treatment workshops",
        'Featured in our "Heritage Home" collection',
        "No hidden fees - transparent pricing",
        "Quality certification assistance",
      ],
    },
    {
      name: "Metalwork",
      description:
        "Crafted metal pieces blending strength with ornamental finesse.",
      icon: "⚒️",
      benefits: [
        "Metal sourcing at wholesale prices",
        "Tool sharpening and maintenance services",
        "Patina and finishing technique workshops",
        "Direct client connections for large projects",
      ],
    },
    {
      name: "Leather Craft",
      description:
        "Hand-stitched leather goods with traditional tooling and finish.",
      icon: "🧶",
      benefits: [
        "Ethical leather sourcing program",
        "Pattern-making software training",
        "No listing fees for first 20 products",
        'Featured in "Luxury Handmade" category',
      ],
    },
    {
      name: "Loom Weaving",
      description:
        "Traditional loom work producing rich textures and vibrant patterns.",
      icon: "🧶",
      benefits: [
        "Loom maintenance support",
        "Yarn sourcing collective discounts",
        "Design collaboration opportunities",
        "0% interest equipment loans",
      ],
    },
    {
      name: "Madhubani Painting",
      description:
        "Folk art from Bihar using natural dyes and mythological themes.",
      icon: "🖌️",
      benefits: [
        "Natural pigment sourcing network",
        "Digitization services for original artworks",
        "Artist residency programs",
        "Global exhibition opportunities",
      ],
    },
  ];

  return (
    <div className="product-journey-container">
      <div className="journey-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="page-title">The Artisan's Journey</h1>
          <p className="hero-subtitle">From skilled hands to your home</p>
        </div>
      </div>

      <section className="journey-intro">
        <div className="container">
          <div className="intro-text">
            <h2>Our Craftsmanship Story</h2>
            <p>
              Each product begins its journey with ethical sourcing and passes
              through the hands of master artisans. From weaving and carving to
              painting and stitching, every item reflects heritage,
              craftsmanship, and the care of generations of skilled makers.
            </p>
          </div>
          <div className="intro-image">
            <img src={assets.artisan_working} alt="Artisan at work" />
          </div>
        </div>
      </section>

      <section className="craft-benefits">
        <div className="section-header">
          <h2>Why Artisans Choose Our Platform</h2>
          <p>
            We're committed to empowering traditional crafts with fair
            opportunities
          </p>
        </div>

        <div className="benefits-grid">
          {productCategories.map((category, index) => (
            <div key={index} className="benefit-card">
              <div className="card-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-name">{category.name}</h3>
              </div>
              <p className="category-description">{category.description}</p>
              <div className="benefits-list">
                <h4>Our Support for {category.name} Artisans:</h4>
                <ul>
                  {category.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="process-timeline">
        <h2>Our Artisan Empowerment Process</h2>
        <adiv className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker">1</div>
            <div className="timeline-content">
              <h3>Discover Local Artisans</h3>
              <p>
                We travel to rural communities to identify skilled artisans
                practicing traditional crafts
              </p>
              <div className="timeline-icon">🔍</div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">2</div>
            <div className="timeline-content">
              <h3>Skill Enhancement Workshops</h3>
              <p>
                Conduct free training on quality standards, contemporary
                designs, and sustainable practices
              </p>
              <div className="timeline-icon">🎓</div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">3</div>
            <div className="timeline-content">
              <h3>Product Creation</h3>
              <p>
                Artisans craft products using their traditional skills with our
                material support
              </p>
              <div className="timeline-icon">✋</div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">4</div>
            <div className="timeline-content">
              <h3>Direct Collection</h3>
              <p>
                We collect finished products directly from artisans' workshops
              </p>
              <div className="timeline-icon">🚚</div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">5</div>
            <div className="timeline-content">
              <h3>Quality Assurance</h3>
              <p>
                Each piece undergoes careful inspection while preserving
                handmade uniqueness
              </p>
              <div className="timeline-icon">✅</div>
            </div>
          </div>
        </adiv>
      </section>

      <section className="platform-advantages">
        <div className="advantages-content">
          <h2>Our Platform Advantages</h2>
          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">💸</div>
              <h3>Lowest Fees</h3>
              <p>
                Only 5-10% platform fee compared to 15-30% at other marketplaces
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">⚡</div>
              <h3>Fast Payments</h3>
              <p>
                Artisans receive payments within 3 business days after delivery
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">🌱</div>
              <h3>Sustainable Focus</h3>
              <p>Premium placement for eco-friendly and traditional crafts</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">📦</div>
              <h3>Logistics Support</h3>
              <p>Heavily discounted shipping rates and packaging assistance</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">📚</div>
              <h3>Skill Development</h3>
              <p>Free workshops on modern techniques and business skills</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">🌍</div>
              <h3>Global Reach</h3>
              <p>
                Access to international markets with our export facilitation
              </p>
            </div>
          </div>
        </div>
        <div className="advantages-image">
          <img src={assets.artisan_local} alt="Group of artisans working" />
        </div>
      </section>

      <section className="artisan-spotlight">
        <div className="spotlight-image">
          <img src={assets.featured_artisan} alt="Featured Artisan" />
        </div>
        <div className="spotlight-content">
          <h2>Meet the Makers</h2>
          <p className="artisan-quote">
            "We don't just make products, we keep traditions alive. Each stitch
            tells a story of our heritage and each piece carries the soul of its
            maker."
          </p>
          <p className="artisan-name">— Rajeshwari, Master Weaver</p>
          <button className="meet-artisans-btn">
            Discover More Artisan Stories
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductJourney;
