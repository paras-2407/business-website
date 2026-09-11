import React, { useState } from 'react';
import { Filter, ZoomIn, ShieldCheck, Camera, Layers } from 'lucide-react';
import { galleryItems } from '../data/siteData';
import GalleryModal from '../components/GalleryModal';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'dholera', label: 'Dholera Smart City' },
    { id: 'lothal', label: 'Lothal NMHC & Heritage' },
    { id: 'infra', label: 'Infrastructure & Transit' },
    { id: 'green', label: 'Clean Energy & Industry' }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="gallery-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="eyebrow green">VISUAL ARCHIVES &bull; HIGH-RESOLUTION ASSETS</span>
            <h1>High-Definition Visual Gallery</h1>
            <p className="page-hero-lead">
              Explore high-resolution photographs, architectural blueprints, and conservation documentation sourced from DSIRDA, the Ministry of Ports &amp; Shipping, and the Archaeological Survey of India (ASI).
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-bar center">
            <div className="filter-pills">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={selectedCategory === cat.id ? 'active' : ''}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase Grid */}
      <section className="section">
        <div className="container">
          <div className="gallery-masonry-grid">
            {filteredItems.map((item) => (
              <div 
                className="gallery-item-card" 
                key={item.id}
                onClick={() => setSelectedMedia(item)}
              >
                <div className="gallery-img-wrap">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="gallery-hover-overlay">
                    <div className="zoom-circle">
                      <ZoomIn size={22} />
                    </div>
                    <span className="gallery-hover-text">Click to View High-Res &amp; Details</span>
                  </div>
                </div>

                <div className="gallery-card-info">
                  <div className="g-cat-row">
                    <span className="badge-pill sm">{item.category.toUpperCase()}</span>
                    <span className="g-source-tag"><ShieldCheck size={12} /> {item.source}</span>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal (Issue 7) */}
      <GalleryModal
        item={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
    </div>
  );
}
