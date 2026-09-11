import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Building2, Landmark, Filter, Calculator, ShieldCheck, 
  ArrowRight, CheckCircle2, FileText, Compass, Layers, PhoneCall
} from 'lucide-react';
import { allLandOptions } from '../data/siteData';
import EnquiryForm from '../components/EnquiryForm';

export default function LandPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialRegionParam = queryParams.get('region') || 'all';
  const initialCategoryParam = queryParams.get('category') || 'all';

  const [selectedRegion, setSelectedRegion] = useState(initialRegionParam);
  const [selectedCategory, setSelectedCategory] = useState(initialCategoryParam);
  const [selectedPlotForEnquiry, setSelectedPlotForEnquiry] = useState('');

  // Interactive Investment Calculator state
  const [calcPlotSize, setCalcPlotSize] = useState(1500); // sq. yards
  const [calcRatePerSqYd, setCalcRatePerSqYd] = useState(3800); // INR per sq. yd

  useEffect(() => {
    if (queryParams.get('region')) {
      setSelectedRegion(queryParams.get('region'));
    }
    if (queryParams.get('category')) {
      setSelectedCategory(queryParams.get('category'));
    }
  }, [location.search]);

  const categories = [
    'all',
    'Industrial',
    'Commercial',
    'Residential',
    'Tourism & Hospitality',
    'Agricultural',
    'Institutional'
  ];

  const filteredPlots = allLandOptions.filter(plot => {
    const matchesRegion = selectedRegion === 'all' || plot.region === selectedRegion;
    const matchesCategory = selectedCategory === 'all' || plot.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesRegion && matchesCategory;
  });

  const estimatedBudget = calcPlotSize * calcRatePerSqYd;
  const estimatedStampDuty = Math.round(estimatedBudget * 0.059); // ~5.9% Gujarat stamp duty & registration

  return (
    <div className="land-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="eyebrow green">STRATEGIC REAL ESTATE &bull; LAND CATALOG</span>
            <h1>Shortlist Verified Land by Zoning &amp; Purpose</h1>
            <p className="page-hero-lead">
              Pre-zoned industrial plots in Dholera TP2, commercial frontage along the Central Spine, and hospitality resort acreage near Lothal NMHC. Verified titles with complete statutory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Toolbar */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-bar">
            {/* Region Filter */}
            <div className="filter-group">
              <label><Filter size={15} /> Region:</label>
              <div className="filter-pills">
                <button 
                  className={selectedRegion === 'all' ? 'active' : ''} 
                  onClick={() => setSelectedRegion('all')}
                >
                  All Regions
                </button>
                <button 
                  className={selectedRegion === 'dholera' ? 'active' : ''} 
                  onClick={() => setSelectedRegion('dholera')}
                >
                  <Building2 size={14} /> Dholera SIR
                </button>
                <button 
                  className={selectedRegion === 'lothal' ? 'active' : ''} 
                  onClick={() => setSelectedRegion('lothal')}
                >
                  <Landmark size={14} /> Lothal Corridor
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="filter-group">
              <label><Layers size={15} /> Category:</label>
              <div className="filter-pills wrap">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={selectedCategory === cat ? 'active' : ''}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat === 'all' ? 'All Categories' : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Land Catalog Grid */}
      <section className="section">
        <div className="container">
          <div className="section-head compact">
            <div>
              <h2>Available Shortlisted Land Parcels</h2>
              <p>Showing {filteredPlots.length} verified listings matching your selected criteria.</p>
            </div>
          </div>

          {filteredPlots.length === 0 ? (
            <div className="empty-results-box">
              <h3>No plots match this specific filter combination</h3>
              <p>Try resetting filters or contact our land desk for customized off-market allocations.</p>
              <button 
                className="btn primary" 
                onClick={() => { setSelectedRegion('all'); setSelectedCategory('all'); }}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="land-catalog-grid">
              {filteredPlots.map((plot) => (
                <div className="catalog-land-card" key={plot.id}>
                  <div className="c-land-img-wrap">
                    <img src={`/assets/${plot.img}`} alt={plot.title} />
                    <span className="c-region-badge">{plot.regionLabel}</span>
                    <span className="c-status-badge">{plot.badge}</span>
                  </div>

                  <div className="c-land-body">
                    <span className="c-category-tag">{plot.category}</span>
                    <h3>{plot.title}</h3>
                    <span className="c-location"><Compass size={14} /> {plot.location}</span>

                    <div className="c-specs-table">
                      <div className="c-spec-row">
                        <span>Plot Size:</span>
                        <strong>{plot.sizeRange}</strong>
                      </div>
                      <div className="c-spec-row">
                        <span>Road Width:</span>
                        <strong>{plot.roadWidth}</strong>
                      </div>
                      <div className="c-spec-row">
                        <span>Permissible FSI:</span>
                        <strong>{plot.fsi}</strong>
                      </div>
                      <div className="c-spec-row highlight">
                        <span>Indicative Rate:</span>
                        <strong className="rate-val">{plot.priceGuidance}</strong>
                      </div>
                    </div>

                    <ul className="c-highlights-list">
                      {plot.highlights.map((h, i) => (
                        <li key={i}><CheckCircle2 size={13} /> {h}</li>
                      ))}
                    </ul>

                    <div className="c-card-footer">
                      <span className="compliance-tag">
                        <ShieldCheck size={14} /> {plot.compliance}
                      </span>
                      <a
                        href="#enquiry-section"
                        className="btn primary sm full"
                        onClick={() => setSelectedPlotForEnquiry(`[${plot.regionLabel}] ${plot.title} (${plot.location})`)}
                      >
                        Enquire on this Plot <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Interactive Land Investment & Cost Calculator */}
      <section className="section bg-light">
        <div className="container">
          <div className="calculator-box">
            <div className="calc-left">
              <span className="eyebrow green"><Calculator size={15} /> PLANNING TOOL</span>
              <h2>Interactive Land Budget &amp; Stamp Duty Estimator</h2>
              <p>
                Estimate your approximate land acquisition capital requirement, statutory registration fees, and indicative stamp duty in Gujarat.
              </p>

              <div className="calc-controls">
                <div className="calc-slider-group">
                  <div className="calc-label-val">
                    <span>Desired Plot Size:</span>
                    <strong>{calcPlotSize.toLocaleString()} sq. yards ({(calcPlotSize / 4840).toFixed(2)} Acres)</strong>
                  </div>
                  <input
                    type="range"
                    min="300"
                    max="25000"
                    step="100"
                    value={calcPlotSize}
                    onChange={(e) => setCalcPlotSize(Number(e.target.value))}
                    className="range-slider"
                  />
                  <div className="range-limits">
                    <span>300 sq. yd</span>
                    <span>25,000 sq. yd (5+ Acres)</span>
                  </div>
                </div>

                <div className="calc-slider-group">
                  <div className="calc-label-val">
                    <span>Estimated Rate per Sq. Yard:</span>
                    <strong>₹{calcRatePerSqYd.toLocaleString()} / sq. yd</strong>
                  </div>
                  <input
                    type="range"
                    min="1500"
                    max="10000"
                    step="100"
                    value={calcRatePerSqYd}
                    onChange={(e) => setCalcRatePerSqYd(Number(e.target.value))}
                    className="range-slider"
                  />
                  <div className="range-limits">
                    <span>₹1,500 (Agri / Buffer)</span>
                    <span>₹10,000 (Central Spine Commercial)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="calc-summary-card">
              <h4>Estimated Acquisition Outlay</h4>
              <div className="calc-result-metric">
                <span>Estimated Land Cost</span>
                <h3>₹{(estimatedBudget / 100000).toFixed(2)} Lakhs</h3>
                <small>(approx. ₹{(estimatedBudget / 10000000).toFixed(2)} Crore)</small>
              </div>

              <div className="calc-breakdown">
                <div className="breakdown-row">
                  <span>Indicative Stamp Duty &amp; Reg. (approx. 5.9%):</span>
                  <strong>₹{(estimatedStampDuty / 100000).toFixed(2)} Lakhs</strong>
                </div>
                <div className="breakdown-row">
                  <span>Title Search &amp; Due Diligence:</span>
                  <strong>Included in Advisory</strong>
                </div>
                <div className="breakdown-row total">
                  <span>Total Capital Estimate:</span>
                  <strong>₹{((estimatedBudget + estimatedStampDuty) / 100000).toFixed(2)} Lakhs</strong>
                </div>
              </div>

              <a 
                href="#enquiry-section" 
                className="btn primary full"
                onClick={() => setSelectedPlotForEnquiry(`Budget Estimate: ${calcPlotSize} sq. yd at ₹${calcRatePerSqYd}/sq. yd (Total ~₹${(estimatedBudget/100000).toFixed(1)} Lakhs)`)}
              >
                Discuss this Budget Allocation <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Due Diligence Checklist */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow green">LEGAL DUE DILIGENCE</span>
              <h2>Essential Pre-Purchase Checklist</h2>
            </div>
            <p>Every land acquisition in Gujarat requires 5 fundamental statutory clearances.</p>
          </div>

          <div className="checklist-grid">
            <div className="checklist-card">
              <FileText size={24} />
              <h4>1. Revenue 7/12 &amp; 8-A Records</h4>
              <p>Verify ownership names, agricultural liabilities, and village survey numbers via the Gujarat AnyROR revenue portal.</p>
            </div>
            <div className="checklist-card">
              <ShieldCheck size={24} />
              <h4>2. Village Form 6 (Mutation Register)</h4>
              <p>Traces the 30-year chronological chain of title ownership, heir inheritances, and legal transfers.</p>
            </div>
            <div className="checklist-card">
              <Building2 size={24} />
              <h4>3. DSIRDA Zone Certificate</h4>
              <p>Confirms permissible land-use classification (Industrial, Commercial, Residential, Tourism) under Masterplan 2040.</p>
            </div>
            <div className="checklist-card">
              <CheckCircle2 size={24} />
              <h4>4. Non-Agricultural (NA) Status</h4>
              <p>Verifies whether land has received official NA conversion permission or is held under statutory TP Scheme allotment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="section bg-light" id="enquiry-section">
        <div className="container enquiry-strip-container">
          <div>
            <span className="eyebrow green">STRUCTURE YOUR SEARCH</span>
            <h2>Tell Us Your Exact Land Requirements</h2>
            <p>
              Share your target budget, preferred TP Scheme or corridor, required acreage, and planned business use. Our research desk will compile a verified shortlist within 24 hours.
            </p>
          </div>
          <EnquiryForm 
            initialInterest={selectedPlotForEnquiry} 
            formTitle="Request Land Allocation Shortlist" 
          />
        </div>
      </section>
    </div>
  );
}
