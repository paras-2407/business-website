import React, { useEffect } from 'react';
import { X, ExternalLink, Calendar, Clock, User, Bookmark, CheckCircle2 } from 'lucide-react';

export default function ArticleReaderModal({ article, onClose }) {
  useEffect(() => {
    if (!article) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close article">
          <X size={22} />
        </button>

        <article className="modal-article">
          <div className="modal-article-header">
            <span className="badge-pill">{article.category}</span>
            <h2>{article.title}</h2>
            <div className="article-meta-row">
              <span className="meta-item"><Calendar size={14} /> {article.date}</span>
              <span className="meta-item"><Clock size={14} /> {article.readTime}</span>
              <span className="meta-item"><User size={14} /> {article.author}</span>
            </div>
          </div>

          <div className="modal-hero-img-wrap">
            <img 
              src={`/assets/${article.image}`} 
              alt={article.title} 
              className="modal-hero-img"
              onError={(e) => { e.target.src = '/assets/hero-dholera.png'; }}
            />
          </div>

          {article.takeaways && article.takeaways.length > 0 && (
            <div className="takeaways-box">
              <h4><CheckCircle2 size={18} /> Executive Summary &amp; Key Highlights</h4>
              <ul>
                {article.takeaways.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-article-content">
            {article.sections && article.sections.map((sec, idx) => (
              <section key={idx} className="article-body-section">
                <h3>{sec.heading}</h3>
                <p>{sec.body}</p>
              </section>
            ))}
          </div>

          {article.citations && article.citations.length > 0 && (
            <div className="citations-box">
              <div className="citations-head">
                <Bookmark size={18} />
                <h4>Credible Sources &amp; Official References</h4>
              </div>
              <p className="citations-note">
                Information cited in this article is verified against published government notifications, archaeological excavation reports, and statutory authority disclosures:
              </p>
              <ul className="citations-list">
                {article.citations.map((cite, idx) => (
                  <li key={idx}>
                    <a 
                      href={cite.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="citation-link"
                    >
                      <span>{cite.title}</span>
                      <ExternalLink size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-footer-cta">
            <div>
              <strong>Interested in opportunities discussed in this article?</strong>
              <p>Connect with our research advisors for land feasibility and plot shortlisting.</p>
            </div>
            <button 
              className="btn primary" 
              onClick={() => {
                onClose();
                window.location.href = '/contact';
              }}
            >
              Consult Advisory Desk
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
