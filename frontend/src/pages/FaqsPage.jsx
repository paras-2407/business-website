import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { faqsData } from '../data/siteData';
import { Link } from 'react-router-dom';

export default function FaqsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = faqsData.filter(item => 
    item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faqs-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="eyebrow green">CLARITY &bull; DUE DILIGENCE</span>
            <h1>Frequently Asked Questions</h1>
            <p className="page-hero-lead">
              Clear answers on DSIRDA Town Planning schemes, ASI heritage preservation buffers, land title clearance, and development timelines across Dholera and Lothal.
            </p>
          </div>
        </div>
      </section>

      <section className="filter-section">
        <div className="container narrow">
          <div className="search-input-wrap">
            <Search size={16} />
            <input
              type="text"
              placeholder="Type a question or keyword (e.g. title clearance, ASI buffer, airport, NRI)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          {filteredFaqs.length === 0 ? (
            <div className="empty-results-box">
              <h3>No matching questions found</h3>
              <p>Have a specific question not covered here? Feel free to contact our advisory team directly.</p>
              <Link to="/contact" className="btn primary">
                Ask an Advisor
              </Link>
            </div>
          ) : (
            <div className="faqs-accordion">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className={`faq-card ${isOpen ? 'open' : ''}`}>
                    <button
                      className="faq-question-btn"
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    >
                      <span className="faq-q-text">{faq.q}</span>
                      <ChevronDown className={`faq-chevron ${isOpen ? 'rotate' : ''}`} size={20} />
                    </button>
                    {isOpen && (
                      <div className="faq-answer-body">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          <div className="faq-help-box">
            <HelpCircle size={28} />
            <div>
              <h4>Need personalized property verification?</h4>
              <p>Our land team provides certified revenue 7/12 searches, DSIRDA zoning certificates, and onsite video verifications.</p>
            </div>
            <Link to="/contact" className="btn primary sm">
              Contact Advisory Desk <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
