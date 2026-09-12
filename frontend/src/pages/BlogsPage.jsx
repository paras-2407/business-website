import React, { useState } from 'react';
import { 
  Calendar, Clock, ArrowRight, Bookmark, 
  ExternalLink, Search
} from 'lucide-react';
import { blogs } from '../data/siteData';
import ArticleReaderModal from '../components/ArticleReaderModal';

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    'All',
    'Development & Infrastructure',
    'Heritage & Tourism',
    'Connectivity & Logistics',
    'Archaeology & History',
    'Investment & Legal Advisory',
    'Clean Energy & Sustainability'
  ];

  const filteredBlogs = blogs.filter(b => {
    const matchesCategory = selectedCategory === 'All' || b.category === selectedCategory;
    const matchesSearch = 
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="blogs-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="eyebrow green">RESEARCH &bull; REGIONAL BRIEFS</span>
            <h1>Authoritative Regional Insights</h1>
            <p className="page-hero-lead">
              Verified research on Dholera SIR infrastructure, NMHC Lothal heritage, and regional planning with statutory citations.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="filter-section">
        <div className="container">
          <div className="blog-filter-bar">
            <div className="search-input-wrap">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search articles, projects, or citations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="filter-pills wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={selectedCategory === cat ? 'active' : ''}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="section">
        <div className="container">
          <div className="section-head compact">
            <div>
              <h2>Featured Research Articles ({filteredBlogs.length})</h2>
              <p>Click any card to read the complete article with official citations.</p>
            </div>
          </div>

          {filteredBlogs.length === 0 ? (
            <div className="empty-results-box">
              <h3>No articles found</h3>
              <p>Try searching for a different keyword or choose another category.</p>
              <button 
                className="btn primary" 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="blog-grid large">
              {filteredBlogs.map((article) => (
                <article 
                  className="blog-card large interactive" 
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="blog-card-img-wrap">
                    <img 
                      src={`/assets/${article.image}`} 
                      alt={article.title} 
                      onError={(e) => { e.target.src = '/assets/hero-dholera.png'; }}
                    />
                    <span className="blog-cat-badge">{article.category}</span>
                  </div>

                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span><Calendar size={12} /> {article.date}</span>
                      <span>&bull;</span>
                      <span><Clock size={12} /> {article.readTime}</span>
                    </div>

                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>

                    <div className="card-citations-preview">
                      <Bookmark size={13} />
                      <span>{article.citations?.length || 3} Verified Sources Cited</span>
                    </div>

                    <button 
                      className="read-article-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedArticle(article);
                      }}
                    >
                      <span>Read Full Article</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Official Portals Directory */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-head compact">
            <div>
              <span className="eyebrow green">STATUTORY SOURCES</span>
              <h2>Official Portals &amp; Repositories</h2>
            </div>
          </div>

          <div className="sources-directory-grid">
            <div className="source-dir-card">
              <h4>DSIRDA Authority</h4>
              <p>Master plans, TP scheme maps, and GDCR zoning rules.</p>
              <a href="https://dholera.gujarat.gov.in" target="_blank" rel="noopener noreferrer" className="ext-link">
                dholera.gujarat.gov.in <ExternalLink size={13} />
              </a>
            </div>

            <div className="source-dir-card">
              <h4>Press Information Bureau</h4>
              <p>Union Cabinet approvals for Tata Semiconductor Fab and transit corridors.</p>
              <a href="https://pib.gov.in" target="_blank" rel="noopener noreferrer" className="ext-link">
                pib.gov.in <ExternalLink size={13} />
              </a>
            </div>

            <div className="source-dir-card">
              <h4>Archaeological Survey of India</h4>
              <p>Excavation reports and UNESCO tentative dossier for Lothal.</p>
              <a href="https://asi.nic.in" target="_blank" rel="noopener noreferrer" className="ext-link">
                asi.nic.in <ExternalLink size={13} />
              </a>
            </div>

            <div className="source-dir-card">
              <h4>Ministry of Ports &amp; Shipping</h4>
              <p>NMHC Lothal project updates and museum complex milestones.</p>
              <a href="https://shipmin.gov.in" target="_blank" rel="noopener noreferrer" className="ext-link">
                shipmin.gov.in <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Conditionally rendered modal - guarantees no scroll lock on page load */}
      {selectedArticle && (
        <ArticleReaderModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </div>
  );
}
