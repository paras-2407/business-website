import React, { useState } from 'react';
import { 
  Calendar, Clock, User, ArrowRight, Bookmark, 
  ExternalLink, Search, CheckCircle2, FileText 
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
            <span className="eyebrow green">RESEARCH &amp; KNOWLEDGE HUB</span>
            <h1>Authoritative Regional Reports &amp; Legal Insights</h1>
            <p className="page-hero-lead">
              In-depth research papers on Dholera SIR infrastructure, NMHC Lothal maritime heritage, Gujarat TP schemes, and green energy investments. All articles cite verified statutory sources.
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
                placeholder="Search by topic, project (e.g. Tata Fab, NMHC, Expressway, ASI)..."
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
              <p>Click any article to launch the complete unabridged preview with citations.</p>
            </div>
          </div>

          {filteredBlogs.length === 0 ? (
            <div className="empty-results-box">
              <h3>No articles found matching "{searchQuery}"</h3>
              <p>Try clearing your search query or choosing another category.</p>
              <button 
                className="btn primary" 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              >
                Show All 6 Articles
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

                    {/* Citations Preview Tag */}
                    <div className="card-citations-preview">
                      <Bookmark size={13} />
                      <span>{article.citations?.length || 3} Official Sources Cited (PIB, DSIRDA, ASI)</span>
                    </div>

                    <button 
                      className="read-article-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedArticle(article);
                      }}
                    >
                      <span>Read Complete Article</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Sources & Citations Directory */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow green">STATUTORY REPOSITORIES</span>
              <h2>Credible Source Archives &amp; Official Portals</h2>
            </div>
            <p>We source our findings directly from recognized statutory and governmental databases.</p>
          </div>

          <div className="sources-directory-grid">
            <div className="source-dir-card">
              <h4>DSIRDA Development Authority</h4>
              <p>Official master plans, Town Planning scheme gazettes, and general development control regulations (GDCR).</p>
              <a href="https://dholera.gujarat.gov.in" target="_blank" rel="noopener noreferrer" className="ext-link">
                Visit dholera.gujarat.gov.in <ExternalLink size={13} />
              </a>
            </div>

            <div className="source-dir-card">
              <h4>Press Information Bureau (PIB)</h4>
              <p>Official Government of India cabinet approvals for Tata Semiconductor Fab, Expressway funding, and airport sanctions.</p>
              <a href="https://pib.gov.in" target="_blank" rel="noopener noreferrer" className="ext-link">
                Visit pib.gov.in <ExternalLink size={13} />
              </a>
            </div>

            <div className="source-dir-card">
              <h4>Archaeological Survey of India (ASI)</h4>
              <p>Excavation memoirs by Dr. S.R. Rao, site documentation, and UNESCO World Heritage Tentative List dossier for Lothal.</p>
              <a href="https://asi.nic.in" target="_blank" rel="noopener noreferrer" className="ext-link">
                Visit asi.nic.in <ExternalLink size={13} />
              </a>
            </div>

            <div className="source-dir-card">
              <h4>Sagarmala / MoPSW</h4>
              <p>National Maritime Heritage Complex (NMHC) project milestones, tender notices, and museum gallery architectural blueprints.</p>
              <a href="https://shipmin.gov.in" target="_blank" rel="noopener noreferrer" className="ext-link">
                Visit shipmin.gov.in <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Full Article Reader Modal (Issue 8) */}
      <ArticleReaderModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}
