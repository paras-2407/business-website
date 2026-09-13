export const companyProfile = {
  name: 'Urban Keys Infra',
  founded: '2004',
  experienceYears: '20+',
  headquarters: 'Jaipur, Rajasthan',
  regionalOffice: 'Dholera SIR Activation Area & Ahmedabad, Gujarat',
  email: 'urbankeysinfra@gmail.com',
  phone: '+91 98281 59175 | +91 93520 94325 | +91 70149 22260',
  tagline: '20+ Years Real Estate Consultancy • Jaipur • Gujarat Growth Corridors',
  mission: 'Helping clients choose their favorite property, whether investing in high-growth residential land or strategic commercial land with absolute title security and regulatory due diligence.',
  stats: [
    { value: '20+ Years', label: 'Consultancy Excellence' },
    { value: 'Jaipur', label: 'Headquarters' },
    { value: 'Residential & Commercial', label: 'Land Specialization' },
    { value: '100% Verified', label: 'Title Due Diligence' }
  ]
};

export const destinations = {
  dholera: {
    label: 'Dholera SIR',
    eyebrow: 'INDIA’S 1ST GREENFIELD INDUSTRIAL SMART CITY',
    title: "Dholera Special Investment Region",
    tagline: 'A 920 sq. km planned global manufacturing, logistics and clean-tech powerhouse.',
    description: 'Dholera SIR is India’s largest planned greenfield smart city, twice the size of Mumbai and six times the size of Shanghai’s masterplan area. Developed under the Delhi-Mumbai Industrial Corridor (DMIC) and Gujarat Special Investment Region Act, Dholera features plug-and-play trunk infrastructure, central SCADA automated command networks, 4,400 MW ultra-mega solar power, and India’s premier semiconductor hub.',
    hero: '/assets/hero-dholera.png',
    badge: 'DSIRDA Approved Masterplan',
    stats: [
      { label: 'Total Planned Area', value: '920 sq. km' },
      { label: 'Phase 1 Activation', value: '22.5 sq. km' },
      { label: 'Solar Park Capacity', value: '4,400 MW' },
      { label: 'Key Fab Investment', value: '$11B / ₹91k Cr' }
    ],
    landTitle: 'Strategic Land Zones in Dholera SIR',
    landSubtitle: 'Explore pre-zoned industrial, commercial, residential and high-access corridor plots with clear titles and TP scheme compliance.',
    lands: [
      {
        id: 'dh-ind',
        title: 'Industrial & High-Tech Manufacturing',
        category: 'Industrial',
        desc: 'Plug-and-play plots in TP2 Activation Area with 55m/100m road access, pre-laid subterranean power, recycled water, and direct connectivity to expressways.',
        img: 'dholera-industrial.jpg',
        specs: { tpScheme: 'TP 2 (Zone A/B)', roadWidth: '55m - 100m', fsi: '1.5 - 2.0', idealFor: 'Semiconductors, Electronics, Heavy Engineering, Warehousing' }
      },
      {
        id: 'dh-com',
        title: 'Commercial & High-Access Corridor',
        category: 'Commercial',
        desc: 'Prime frontage plots along the Central Spine and ABCD administrative building zone for corporate offices, trade centers, financial services and hotels.',
        img: 'hero-dholera.png',
        specs: { tpScheme: 'TP 1 & TP 2', roadWidth: '70m Central Spine', fsi: '2.5 - 3.5', idealFor: 'Corporate Towers, Tech Parks, Retail Malls, Luxury Hotels' }
      },
      {
        id: 'dh-res',
        title: 'Residential & Integrated Townships',
        category: 'Residential',
        desc: 'Planned residential sectors adjacent to green corridors, community healthcare, international schools and social infrastructure with smart civic utilities.',
        img: 'dholera-airport.jpg',
        specs: { tpScheme: 'TP 1 (Sub-zone 1)', roadWidth: '18m - 30m', fsi: '1.8 - 2.2', idealFor: 'Gated Townships, Executive Villas, High-density Apartments' }
      },
      {
        id: 'dh-agr',
        title: 'Agricultural & Agro-Tech Buffer Lands',
        category: 'Agricultural',
        desc: 'Productive arable land parcels in the peripheral influence zone suited for modern agro-processing, farm retreats, and strategic long-term capital appreciation.',
        img: 'dholera-solar.jpg',
        specs: { tpScheme: 'Non-TP Peripheral Belt', roadWidth: '12m - 24m Village Link', fsi: 'Subject to NA', idealFor: 'Organic Farming, Solar Installations, Agro-processing Hubs' }
      }
    ],
    highlights: [
      {
        title: 'Tata Electronics Semiconductor Fab',
        detail: 'India’s first commercial semiconductor fabrication facility in partnership with PSMC (Taiwan) with an outlay of ₹91,000 Crore ($11 Billion).'
      },
      {
        title: 'Ahmedabad-Dholera Expressway (NH-751)',
        detail: '109 km 6-lane access-controlled greenfield expressway reducing transit time from Ahmedabad to Dholera to under 50 minutes.'
      },
      {
        title: 'Dholera International Airport (DIACL)',
        detail: 'Greenfield international airport with a 3,200m runway capable of landing 4E category wide-body passenger aircraft and global cargo freighters.'
      },
      {
        title: 'Subterranean Utility Ducts',
        detail: 'Zero road-digging design: 100% underground potable water, recycled water, automated SCADA sewage, fiber optics, gas grid, and 66kV power.'
      }
    ]
  },
  lothal: {
    label: 'Lothal Heritage Corridor',
    eyebrow: 'WORLD’S OLDEST MARITIME DOCKYARD & NMHC',
    title: "Lothal Maritime Heritage Hub",
    tagline: 'Ancient Harappan maritime glory revitalized by the ₹4,500+ Cr National Maritime Heritage Complex.',
    description: 'Lothal preserves India’s 4,500-year-old seafaring legacy. Recognized by UNESCO’s tentative list as the world’s earliest known tidal dockyard, Lothal was an international commercial nexus trading carnelian beads, copper, and textiles with ancient Mesopotamia and Egypt. Today, the Government of India is constructing the monumental National Maritime Heritage Complex (NMHC), transforming the region into an international coastal tourism and hospitality destination.',
    hero: '/assets/lothal.png',
    badge: 'Ministry of Ports & Shipping Project',
    stats: [
      { label: 'Harappan Heritage', value: '4,500+ Years' },
      { label: 'NMHC Masterplan', value: '400 Acres' },
      { label: 'Total Investment', value: '₹4,500+ Cr' },
      { label: 'Lighthouse Museum', value: '77m Height' }
    ],
    landTitle: 'Land Opportunities Around Lothal Corridor',
    landSubtitle: 'Strategically located plots for luxury heritage resorts, eco-tourism, cultural hospitality, retail, and institutional campuses.',
    lands: [
      {
        id: 'lo-her',
        title: 'Heritage & Luxury Tourism Resorts',
        category: 'Tourism & Hospitality',
        desc: 'Plots positioned within easy access to NMHC and the archaeological park, ideal for 4-star/5-star theme resorts, wellness retreats, and eco-lodges.',
        img: 'lothal.png',
        specs: { tpScheme: 'Tourism Corridor Belt', roadWidth: '24m - 45m', fsi: '1.2 - 1.8', idealFor: 'Experiential Resorts, Heritage Hotels, Ayurvedic Spas' }
      },
      {
        id: 'lo-com',
        title: 'Commercial & Visitor Hospitality Hubs',
        category: 'Commercial',
        desc: 'High-footfall roadside parcels on the Lothal-Bhurkhi corridor suited for handicraft emporiums, tourist plazas, restaurants, and convenience retail.',
        img: 'lothal-museum.jpg',
        specs: { tpScheme: 'Commercial Zone (Lothal)', roadWidth: '30m Main Road', fsi: '2.0 - 2.5', idealFor: 'Visitor Plazas, Artisan Markets, Restaurants, Fuel Stations' }
      },
      {
        id: 'lo-res',
        title: 'Residential Estates & Peaceful Living',
        category: 'Residential',
        desc: 'Quiet rural-urban transition plots with lush surroundings, clean air, and close proximity to both Lothal heritage attractions and Dholera employment centers.',
        img: 'lothal-ancient-dockyard.jpg',
        specs: { tpScheme: 'Lothal-Saragwala Gram', roadWidth: '15m - 20m', fsi: '1.5 - 2.0', idealFor: 'Weekend Villas, Senior Living, Boutique Farmhouses' }
      },
      {
        id: 'lo-ins',
        title: 'Institutional & Research Campuses',
        category: 'Institutional',
        desc: 'Substantial acreage for maritime research academies, archaeological centers, vocational colleges, and cultural exhibition grounds.',
        img: 'hero-lothal-hq.jpg',
        specs: { tpScheme: 'Institutional Reserve', roadWidth: '30m Link Road', fsi: '1.5 - 2.2', idealFor: 'Maritime Academies, Cultural Foundations, Research Institutes' }
      }
    ],
    highlights: [
      {
        title: 'National Maritime Heritage Complex (NMHC)',
        detail: 'A ₹4,500+ Cr monumental project by the Ministry of Ports, Shipping and Waterways featuring 14 galleries, India’s coastal state pavilions, and water theme park.'
      },
      {
        title: 'World’s Highest Lighthouse Museum',
        detail: '77-meter tall coastal observation and lighthouse museum offering 360-degree panoramic views across the Gulf of Khambhat and archaeological landscape.'
      },
      {
        title: 'Ancient Tidal Basin & Bead Factory',
        detail: 'Preserved Harappan brick basin with sluice gate engineering from 2400 BCE demonstrating ancient mathematical and hydraulic precision.'
      },
      {
        title: 'Seamless Regional Access',
        detail: 'Located just 35 km from Dholera SIR and 80 km from Ahmedabad via newly widened high-speed highway corridors.'
      }
    ]
  }
};

export const transformationMilestones = [
  {
    year: '2007',
    phase: 'Phase 01',
    badge: 'Foundations & Vision',
    title: 'Regional Masterplanning & Legal Framework',
    description: 'The Government of Gujarat envisioned Dholera as India’s premier greenfield industrial metropolis under the Delhi-Mumbai Industrial Corridor (DMIC). The landmark Gujarat Special Investment Region Act of 2009 established DSIRDA.',
    metrics: [
      { label: 'Delineated Area', value: '920 sq. km' },
      { label: 'Villages Covered', value: '22 Villages' },
      { label: 'Master Planner', value: 'Halcrow / AECOM' }
    ],
    image: '/assets/hero-dholera.png',
    keyTakeaway: 'Established legally secure Town Planning Schemes (TP 1 through 6) ensuring 100% litigation-free title distribution.'
  },
  {
    year: '2016',
    phase: 'Phase 02',
    badge: 'Execution & Groundwork',
    title: 'Trunk Infrastructure & Activation Area Development',
    description: 'Ground execution commenced in the 22.5 sq. km Activation Area (TP2). Ground contracts were awarded for underground subterranean utility tunnels, water treatment plants, 66kV electrical substations, and the ABCD building.',
    metrics: [
      { label: 'Activation Area', value: '22.5 sq. km' },
      { label: 'Central Command', value: 'ABCD Building' },
      { label: 'Initial Tranche', value: '₹3,000+ Cr' }
    ],
    image: '/assets/dholera-industrial.jpg',
    keyTakeaway: 'Pioneered zero-road-digging smart infrastructure with automated SCADA city operations.'
  },
  {
    year: '2024–2026',
    phase: 'Phase 03',
    badge: 'Industrial Activation',
    title: 'Semiconductor Megafabs & Multimodal Transit',
    description: 'Tata Electronics broke ground on India’s $11 Billion commercial semiconductor fab. The NH-751 6-lane access-controlled expressway reached completion, and Dholera International Airport runway construction progressed for 2026 initial flights.',
    metrics: [
      { label: 'Expressway (NH-751)', value: '109 km (Active)' },
      { label: 'Airport Runway', value: '3,200m (4E Cat)' },
      { label: 'Semiconductor Outlay', value: '₹91,000 Cr' },
      { label: 'NMHC Lothal', value: '₹4,500+ Cr' }
    ],
    image: '/assets/dholera-expressway.jpg',
    keyTakeaway: 'The transformation from planning to operational manufacturing hub is actively underway with high-speed highway connectivity.'
  },
  {
    year: '2030+',
    phase: 'Phase 04',
    badge: 'Global Horizon',
    title: 'Global Smart Metrolink & International Maritime Capital',
    description: 'Full commercial operations of the High-Speed MRTS rail connecting Ahmedabad to Dholera, Phase 2 expansion of Dholera International Airport, international cruise and maritime tourism at NMHC Lothal, and sustainable smart living for 2 million citizens.',
    metrics: [
      { label: 'Projected Population', value: '2.0 Million' },
      { label: 'Target Employment', value: '800,000+ Jobs' },
      { label: 'Clean Energy Share', value: '100% RE Base' }
    ],
    image: '/assets/dholera-airport.jpg',
    keyTakeaway: 'India’s benchmark for self-sustaining, carbon-neutral, export-oriented smart urbanism.'
  }
];

export const transport = [
  {
    mode: 'Air',
    title: 'Dholera International Airport (DIACL)',
    route: 'Navagam / Dholera (15 km from SIR)',
    desc: 'Joint venture between AAI, Govt of Gujarat, and DMICDC. Features a 3,200m initial runway designed to handle 4E category wide-body aircraft (Boeing 777, Airbus A350) and dedicated air cargo logistics for semiconductor and electronics exports.',
    status: 'Operational Target 2026',
    iconName: 'Plane'
  },
  {
    mode: 'Road',
    title: 'Ahmedabad–Dholera Expressway (NH-751)',
    route: '109 km 6-lane access-controlled link',
    desc: 'Reduces commute time between SP Ring Road Ahmedabad and Dholera SIR to just 45-50 minutes. Features intelligent traffic management systems (ITMS), dedicated industrial lane segregation, and toll plazas.',
    status: 'Phase 1 Fully Connected',
    iconName: 'Route'
  },
  {
    mode: 'High-Speed Rail',
    title: 'Ahmedabad–Dholera MRTS / Metro',
    route: 'Parallel alignment along NH-751 corridor',
    desc: 'Planned fast passenger transit system linking Ahmedabad Metro Line to Dholera Central Spine and Dholera International Airport, facilitating high-frequency executive commuting.',
    status: 'Detailed Project Report (DPR) Stage',
    iconName: 'TrainFront'
  },
  {
    mode: 'Sea & Ports',
    title: 'Bhavnagar & Pipavav Maritime Corridors',
    route: 'Western Seaboard & Gulf of Khambhat',
    desc: 'Strategic proximity to Bhavnagar Port (70 km) and APM Terminals Pipavav provides direct ocean container routes for industrial exporters in Dholera SIR to European, Middle Eastern, and Asian markets.',
    status: 'Active Deep-Sea Gateway',
    iconName: 'Ship'
  },
  {
    mode: 'Sea Link & Rail',
    title: 'Western Dedicated Freight Corridor (DFC)',
    route: 'Direct feeder line connecting to DFC',
    desc: 'Broad-gauge freight rail link connecting Dholera industrial park directly to the Western DFC, enabling non-stop container freight trains to JNPT Mumbai and Mundra ports within 18 hours.',
    status: 'Under Active Implementation',
    iconName: 'Waves'
  }
];

export const blogs = [
  {
    id: 'dholera-sir-2026-ground-reality',
    slug: 'dholera-sir-2026-ground-reality',
    title: 'Dholera SIR 2026: Ground Reality, Infrastructure Milestones & Industrial Activation',
    category: 'Development & Infrastructure',
    date: 'February 2026',
    readTime: '6 min read',
    author: 'Regional Advisory Research Desk',
    image: 'dholera-industrial.jpg',
    excerpt: 'An authoritative report on what exists on the ground in Dholera SIR today: the 22.5 sq. km Activation Area, subterranean utility networks, and the ₹91,000 Cr Tata Semiconductor Fab.',
    takeaways: [
      'TP2 Activation Area (22.5 sq. km) features 100% completed underground utility networks.',
      'Tata Electronics ₹91,000 Cr chip fabrication facility anchors the Dholera High-Tech Electronics Zone.',
      'Automated SCADA centralized operations run from the LEED Gold-certified ABCD complex.'
    ],
    sections: [
      {
        heading: '1. Moving Beyond Conceptual Plans to Physical Reality',
        body: 'For years, Dholera SIR was discussed primarily through visionary masterplans. In 2026, the on-ground scenario in Dholera Special Investment Region (SIR) has evolved decisively. The 22.5 square kilometer Activation Area (located within Town Planning Scheme 2) is fully operational with complete trunk infrastructure. Roads spanning up to 100 meters in width with integrated subterranean utility corridors ensure that no road will ever need to be excavated for pipe repairs, cable installations, or gas lines.'
      },
      {
        heading: '2. The Tata Semiconductor Mega-Anchor',
        body: 'The most decisive catalyst in Dholera’s industrial trajectory is the establishment of India’s first commercial semiconductor wafer fabrication plant by Tata Electronics in partnership with Powerchip Semiconductor Manufacturing Corporation (PSMC) of Taiwan. With a cumulative capital expenditure of ₹91,000 Crore ($11 Billion), the fab will manufacture chips across 28nm, 40nm, 55nm, and 90nm nodes for automotive, computing, and communications sectors. Ancillary suppliers in cleanroom gases, ultra-pure chemicals, and semiconductor packaging are already acquiring surrounding land parcels.'
      },
      {
        heading: '3. Plug-and-Play Utilities & SCADA Monitoring',
        body: 'Every allotted plot in the Activation Area includes ready-to-tap connections: 24/7 potable water from the Narmada canal and sea-water desalination plants, tertiary recycled water for industrial cooling, underground high-voltage power conduits, city gas distribution pipelines, and dual high-speed fiber cables. All operations are continuously orchestrated by the Administrative and Business Centre for Dholera (ABCD Building) using automated SCADA telemetry.'
      }
    ],
    citations: [
      { title: 'Dholera Special Investment Region Development Authority (DSIRDA)', url: 'https://dholera.gujarat.gov.in' },
      { title: 'Press Information Bureau (PIB) – Cabinet Approves Semiconductor Unit in Dholera', url: 'https://pib.gov.in/PressReleasePage.aspx?PRID=2010188' },
      { title: 'Delhi Mumbai Industrial Corridor Development Corporation (NICDC)', url: 'https://www.nicdc.in' }
    ]
  },
  {
    id: 'lothal-nmhc-national-maritime-complex',
    slug: 'lothal-nmhc-national-maritime-complex',
    title: 'National Maritime Heritage Complex (NMHC) Lothal: India’s ₹4,500+ Cr Coastal Monument',
    category: 'Heritage & Tourism',
    date: 'January 2026',
    readTime: '7 min read',
    author: 'Cultural Heritage Advisory Team',
    image: 'lothal.png',
    excerpt: 'Explore the masterplan and construction progress of the 400-acre National Maritime Heritage Complex at Lothal, featuring 14 galleries, the world’s highest lighthouse museum, and coastal pavilions.',
    takeaways: [
      'NMHC is an initiative of the Ministry of Ports, Shipping and Waterways, Government of India.',
      'Spanning 400 acres with an investment of ₹4,500+ Crore to showcase 5,000 years of seafaring history.',
      'Includes the world’s tallest lighthouse museum (77m), underwater museum, and Harappan theme park.'
    ],
    sections: [
      {
        heading: '1. A Tribute to India’s Maritime Civilizational Genius',
        body: 'Situated directly adjacent to the Archaeological Survey of India (ASI) protected Harappan excavation site at Lothal, the National Maritime Heritage Complex (NMHC) is conceived as an international destination on par with global icons such as Alexandria or the Greenwich Maritime Museum. Initiated under the Sagarmala Programme by the Ministry of Ports, Shipping and Waterways, the project integrates experiential tourism, advanced museology, and archaeological research.'
      },
      {
        heading: '2. Signature Attractions of NMHC',
        body: 'The complex features the National Maritime Museum with 14 specialized exhibition galleries, documenting ancient trade routes from Meluhha (Indus Valley) to Mesopotamia, the Chola naval expeditions, the Maratha navy under Kanhoji Angre, and the modern Indian Navy. Rising 77 meters above the Gulf horizon is the World’s Highest Lighthouse Museum, housing sky lounges, historical optic lenses, and observation decks. Visitors will also experience an underwater gallery recreating shipwreck archaeological sites.'
      },
      {
        heading: '3. Real Estate and Hospitality Impact in Lothal-Saragwala',
        body: 'The arrival of an anticipated 3 to 5 million annual domestic and international visitors is driving demand for hospitality, luxury resorts, boutique homestays, and retail infrastructure in the surrounding Lothal, Saragwala, and Bhurkhi revenue villages. Private hospitality investors are prioritizing land acquisition outside the 300m ASI regulated buffer zone to construct experiential heritage resorts.'
      }
    ],
    citations: [
      { title: 'Ministry of Ports, Shipping and Waterways – NMHC Project Overview', url: 'https://shipmin.gov.in' },
      { title: 'Sagarmala National Portal – National Maritime Heritage Complex at Lothal', url: 'https://sagarmala.gov.in' },
      { title: 'Press Information Bureau (PIB) – Review of NMHC Lothal Construction Progress', url: 'https://pib.gov.in/PressReleasePage.aspx?PRID=1968875' }
    ]
  },
  {
    id: 'ahmedabad-dholera-expressway-airport',
    slug: 'ahmedabad-dholera-expressway-airport',
    title: 'Ahmedabad–Dholera Expressway (NH-751) & International Airport: Fast-Tracking Regional Transit',
    category: 'Connectivity & Logistics',
    date: 'February 2026',
    readTime: '5 min read',
    author: 'Infrastructure Research Desk',
    image: 'dholera-expressway.jpg',
    excerpt: 'How the 109 km NH-751 6-lane expressway and the Dholera Greenfield International Airport are unlocking rapid transit between Ahmedabad and the SIR.',
    takeaways: [
      'NH-751 cuts travel time between Ahmedabad and Dholera from 2.5 hours down to 45 minutes.',
      'Dholera International Airport (DIACL) will operate as an alternate international passenger and cargo hub.',
      'Direct multimodal integration with high-speed railway corridor and the Western DFC.'
    ],
    sections: [
      {
        heading: '1. NH-751: The 109 km Lifeline',
        body: 'Constructed by the National Highways Authority of India (NHAI) under the Bharatmala Pariyojana, National Highway 751 is a 6-lane access-controlled concrete expressway expandable to 8 lanes. Originating at the Sardar Patel Ring Road near Sarkhej (Ahmedabad) and terminating at the Dholera SIR Central Spine, it eliminates regional bottleneck intersections and facilitates commercial goods transit at design speeds of 120 km/h.'
      },
      {
        heading: '2. Dholera International Airport (DIACL)',
        body: 'Located at Navagam village, approximately 15 kilometers north of Dholera SIR, Dholera International Airport covers over 1,426 hectares. Incorporated as Dholera International Airport Company Limited (DIACL) with equity participation from AAI (51%), Govt of Gujarat (33%), and NICDIT (16%), the Phase 1 terminal handles both domestic flights and intercontinental air freighters, relieving congestion at Ahmedabad’s SVPI Airport.'
      },
      {
        heading: '3. Commercial Real Estate Along the Corridor',
        body: 'Land parcels located at the designated interchange ramps of NH-751, such as the Dholera North, Bavla, and Fedra interchanges, have emerged as hotbeds for logistics parks, warehousing, truck terminals, and commercial hospitality developments.'
      }
    ],
    citations: [
      { title: 'National Highways Authority of India (NHAI) – NH-751 Bharatmala Alignment', url: 'https://nhai.gov.in' },
      { title: 'Airports Authority of India (AAI) – Dholera Greenfield Airport Project', url: 'https://aai.aero' },
      { title: 'Dholera International Airport Company Ltd (DIACL)', url: 'https://diacl.gujarat.gov.in' }
    ]
  },
  {
    id: 'lothal-ancient-dockyard-engineering',
    slug: 'lothal-ancient-dockyard-engineering',
    title: 'Lothal Ancient Dockyard: Engineering Marvel of the Harappan Civilization',
    category: 'Archaeology & History',
    date: 'January 2026',
    readTime: '8 min read',
    author: 'Archaeological Research Desk',
    image: 'lothal-ancient-dockyard.jpg',
    excerpt: 'A deep archaeological analysis into the world’s earliest known tidal dockyard at Lothal, its sophisticated sluice gates, and its thriving 2400 BCE global maritime trade.',
    takeaways: [
      'Excavated by Dr. S.R. Rao of the Archaeological Survey of India between 1955 and 1962.',
      'Trapezoidal kiln-burnt brick basin measuring 214m x 36m with hydraulic sluice-gate control.',
      'Nominated to the UNESCO World Heritage Tentative List under Criterion (v).'
    ],
    sections: [
      {
        heading: '1. Discovery and Hydraulic Marvel',
        body: 'Lothal (literally meaning "Mound of the Dead" in Gujarati) was discovered in 1954 and excavated systematically by the Archaeological Survey of India (ASI) under renowned archaeologist Dr. S.R. Rao. The site revealed a meticulously engineered trapezoidal brick basin measuring 214 meters in length and 36 meters in width, flanked by embankments of kiln-fired bricks that withstood centuries of saline tidal water.'
      },
      {
        heading: '2. Sluice Gate and Tidal Flotation Engineering',
        body: 'Harappan hydraulic engineers connected the dockyard basin to an inlet channel fed by the Sabarmati River and tidal surges from the Gulf of Khambhat. A wooden sluice gate inserted into vertical brick grooves allowed dockmasters to maintain water levels during low tide, keeping merchant ships afloat while cargo was unloaded onto the adjacent 240-meter-long brick wharf.'
      },
      {
        heading: '3. International Commerce with Mesopotamia & Egypt',
        body: 'Excavations yielded circular Persian Gulf seals, terracotta scale models of Egyptian mummies, lapis lazuli beads from Badakhshan, and carnelian bead-making workshops. Lothal was the industrial gemstone and textile export capital of the Bronze Age world, proving India’s indigenous seafaring sophistication over 4,400 years ago.'
      }
    ],
    citations: [
      { title: 'Archaeological Survey of India (ASI) – Lothal Ancient Excavation Site', url: 'https://asi.nic.in' },
      { title: 'UNESCO World Heritage Convention – Archaeological Remains of Lothal (Tentative List)', url: 'https://whc.unesco.org/en/tentativelists/5918/' },
      { title: 'Dr. S.R. Rao, "Lothal: A Harappan Port Town", ASI Memoirs No. 78', url: 'https://asi.nic.in/publications' }
    ]
  },
  {
    id: 'strategic-land-acquisition-zoning',
    slug: 'strategic-land-acquisition-zoning',
    title: 'Strategic Land Acquisition & Zoning in Dholera SIR: A Practical Investor’s Due Diligence Guide',
    category: 'Investment & Legal Advisory',
    date: 'February 2026',
    readTime: '6 min read',
    author: 'Legal & Land Due Diligence Cell',
    image: 'hero-dholera-hq.jpg',
    excerpt: 'Essential due diligence parameters for acquiring land in Dholera SIR: Town Planning (TP) Schemes, NA conversion, FSI rules, 7/12 title clearances, and DSIRDA approvals.',
    takeaways: [
      'Dholera is governed by Town Planning Schemes (TP 1 to TP 6) with final reconstituted plots (FP).',
      'Always verify Form 7/12, Form 6 mutation register, and 30-year non-encumbrance certificate.',
      'Industrial and commercial plots within TP Schemes receive fast-track single-window approvals.'
    ],
    sections: [
      {
        heading: '1. Understanding the Town Planning (TP) Mechanism in Dholera',
        body: 'Unlike conventional unorganized agricultural land, Dholera SIR is administered through Town Planning Schemes formulated by DSIRDA under the Gujarat Town Planning and Urban Development Act. Original land parcels (OP - Original Plots) are pooled, reconstituted, and redistributed as Final Plots (FP) with approximately 50% retained by the authority for public roads, green spaces, and social infrastructure. Investors must ensure whether they are acquiring OP land or approved FP reconstituted plots.'
      },
      {
        heading: '2. Five Mandatory Documents for Title Verification',
        body: 'Before signing any agreement or transferring token funds, buyers must procure: (1) Certified 7/12 and 8-A revenue records; (2) Village Form 6 (Mutation Entry Register) detailing ownership transitions over 30 years; (3) Non-Agricultural (NA) permission order or TP allotment letter; (4) Zone Certificate issued by DSIRDA confirming intended land-use compliance; and (5) Non-Encumbrance Certificate (Search Report) from the sub-registrar.'
      },
      {
        heading: '3. FSI, Setbacks and Regulatory Compliance',
        body: 'Development regulations in Dholera provide Base FSI ranging from 1.5 to 2.5, with Chargeable Premium FSI extending up to 4.0 along designated High-Density Corridors and Central Spine. Ensure your architectural design conforms to DSIRDA Comprehensive General Development Control Regulations (CGDCR).'
      }
    ],
    citations: [
      { title: 'DSIRDA Development Regulations & Master Plan 2040', url: 'https://dholera.gujarat.gov.in/policies' },
      { title: 'Revenue Department, Government of Gujarat – AnyROR 7/12 Portal', url: 'https://anyror.gujarat.gov.in' },
      { title: 'Gujarat Real Estate Regulatory Authority (GujRERA)', url: 'https://gujrera.gujarat.gov.in' }
    ]
  },
  {
    id: 'dholera-solar-park-green-transition',
    slug: 'dholera-solar-park-green-transition',
    title: 'Dholera Ultra Mega Solar Park (4,400 MW): Powering India’s Green Industrial Transition',
    category: 'Clean Energy & Sustainability',
    date: 'February 2026',
    readTime: '5 min read',
    author: 'Clean Tech Advisory Desk',
    image: 'dholera-solar.jpg',
    excerpt: 'An overview of the 4,400 MW Dholera Solar Park situated along the Gulf of Khambhat, providing ultra-low carbon renewable electricity to zero-emission industries.',
    takeaways: [
      'Planned capacity of 4,400 MW across 11,000 hectares along the Gulf of Khambhat mudflats.',
      'Developed by Gujarat Power Corporation Limited (GPCL) under the National Solar Mission.',
      'Provides green power tariffs enabling export manufacturers to comply with EU CBAM carbon rules.'
    ],
    sections: [
      {
        heading: '1. Scale and Geographical Footprint',
        body: 'The Dholera Ultra Mega Solar Park is one of the largest single-location renewable energy parks in the world. Spanning over 11,000 hectares of CRZ-cleared mudflats along the Gulf of Khambhat coastline, the project harnesses Gujarat’s intense solar irradiance (exceeding 5.8 kWh/m²/day) to generate clean electricity without consuming valuable agricultural soils.'
      },
      {
        heading: '2. Competitive Advantage for Global Exporters',
        body: 'With global trade regulations increasingly penalizing carbon-intensive manufacturing (such as the European Union’s Carbon Border Adjustment Mechanism - CBAM), industrial units established in Dholera SIR have direct access to dedicated green energy wheeling tariffs, allowing semiconductor fabs and auto manufacturers to claim 100% renewable energy certification.'
      },
      {
        heading: '3. Advanced Battery Storage Integration',
        body: 'Phase 1 of the solar park is already feeding 300 MW into the GETCO state grid. Subsequent phases incorporate Battery Energy Storage Systems (BESS) and green hydrogen generation to ensure continuous baseload supply to critical smart city operations.'
      }
    ],
    citations: [
      { title: 'Gujarat Power Corporation Limited (GPCL) – Dholera Solar Park Overview', url: 'https://gpcl.gujarat.gov.in' },
      { title: 'Ministry of New and Renewable Energy (MNRE) – Ultra Mega Renewable Energy Parks', url: 'https://mnre.gov.in' },
      { title: 'Gujarat Energy Transmission Corporation Limited (GETCO)', url: 'https://getcogujarat.com' }
    ]
  }
];

export const galleryItems = [
  {
    id: 'gal-1',
    category: 'dholera',
    title: 'Dholera Central Spine & Smart Boulevards',
    subtitle: 'Integrated multi-tier smart road infrastructure',
    image: '/assets/hero-dholera.png',
    source: 'Dholera SIR Development Authority (DSIRDA)',
    description: 'Panoramic view of the planned arterial boulevard with underground utility corridors, dedicated bicycle tracks, and landscaped medians.'
  },
  {
    id: 'gal-2',
    category: 'lothal',
    title: 'National Maritime Heritage Complex (NMHC)',
    subtitle: 'Architectural masterplan & lighthouse museum',
    image: '/assets/lothal.png',
    source: 'Ministry of Ports, Shipping and Waterways (MoPSW)',
    description: 'Grand aerial view of the 400-acre NMHC project showing the water canal network, Harappan pavilions, and the 77m lighthouse museum tower.'
  },
  {
    id: 'gal-3',
    category: 'infra',
    title: 'Dholera Greenfield International Airport',
    subtitle: 'Passenger terminal & 3,200m runway',
    image: '/assets/dholera-airport.jpg',
    source: 'Dholera International Airport Company Ltd (DIACL / AAI)',
    description: 'Modern aerodynamic terminal design with 4E wide-body aircraft aprons and dedicated air cargo processing facility.'
  },
  {
    id: 'gal-4',
    category: 'lothal',
    title: 'Ancient Harappan Dockyard Basin (2400 BCE)',
    subtitle: 'Archaeological Survey of India conservation site',
    image: '/assets/lothal-ancient-dockyard.jpg',
    source: 'Archaeological Survey of India (ASI)',
    description: 'Kiln-burnt brick masonry dockyard basin at Lothal featuring ancient tidal lock-gate channels that connected to the Gulf of Khambhat.'
  },
  {
    id: 'gal-5',
    category: 'infra',
    title: 'Ahmedabad–Dholera Expressway (NH-751)',
    subtitle: '109 km 6-lane access-controlled transit artery',
    image: '/assets/dholera-expressway.jpg',
    source: 'National Highways Authority of India (NHAI)',
    description: 'High-speed concrete expressway corridor connecting Ahmedabad Ring Road to Dholera SIR in under 50 minutes.'
  },
  {
    id: 'gal-6',
    category: 'green',
    title: 'Dholera Ultra Mega Solar Park (4,400 MW)',
    subtitle: 'Clean energy transition along the Gulf of Khambhat',
    image: '/assets/dholera-solar.jpg',
    source: 'Gujarat Power Corporation Limited (GPCL)',
    description: 'Photovoltaic arrays stretching across 11,000 hectares providing clean, zero-emission green electricity to Dholera industrial units.'
  },
  {
    id: 'gal-7',
    category: 'dholera',
    title: 'High-Tech Semiconductor Complex & Logistics',
    subtitle: 'Tata Electronics Mega Fab & Activation Area',
    image: '/assets/dholera-industrial.jpg',
    source: 'DICDL Industrial Investment Registry',
    description: 'High-tech electronics cluster with cleanroom facilities, advanced logistics bays, and automated supply-chain depots.'
  },
  {
    id: 'gal-8',
    category: 'lothal',
    title: 'National Maritime Museum Exhibition Galleries',
    subtitle: '5,000 years of Indian maritime legacy on display',
    image: '/assets/lothal-museum.jpg',
    source: 'Sagarmala NMHC Curatorial Archives',
    description: 'Interior exhibition gallery showcasing illuminated models of ancient Indus Valley trade vessels and Harappan navigation artifacts.'
  },
  {
    id: 'gal-9',
    category: 'lothal',
    title: 'National Maritime Heritage Complex Official Masterplan',
    subtitle: '400-acre comprehensive development plan across coastal zones',
    image: '/assets/nmhc-official-masterplan.webp',
    source: 'National Maritime Heritage Complex (Official: nmhc.in)',
    description: 'Official masterplan from the Ministry of Ports, Shipping and Waterways detailing the coastal village zones, state pavilions, 14 museum galleries, and research institute.'
  },
  {
    id: 'gal-10',
    category: 'lothal',
    title: 'NMHC Lothal Maritime Museum Campus Aerial',
    subtitle: 'Monumental architectural complex on coastal lagoons',
    image: '/assets/nmhc-museum-aerial.webp',
    source: 'National Maritime Heritage Complex (Official: nmhc.in)',
    description: 'Official aerial perspective of the world-class museum complex with surrounding navigable water canals echoing Lothal’s ancient Harappan dock basin.'
  },
  {
    id: 'gal-11',
    category: 'lothal',
    title: 'World’s Highest Lighthouse Museum (77m)',
    subtitle: 'Iconic coastal lighthouse & sky observation decks',
    image: '/assets/nmhc-lighthouse-concept.png',
    source: 'MoPSW / Sagarmala NMHC Archives (nmhc.in)',
    description: 'State-of-the-art 77-meter lighthouse tower housing heritage optic galleries and 360-degree views over the Gulf of Khambhat and Lothal archaeological site.'
  },
  {
    id: 'gal-12',
    category: 'dholera',
    title: 'ABCD Building (Command & Control Centre)',
    subtitle: 'Administrative & Business Centre for Dholera (LEED Gold)',
    image: '/assets/dholera-abcd-building.jpg',
    source: 'Dholera SIRDA Official Portal (dholera.gujarat.gov.in)',
    description: 'The iconic glass-facade administrative headquarters housing Dholera’s Central Command & Control Centre (CCCC) orchestrating SCADA, traffic, water, and smart city services.'
  },
  {
    id: 'gal-13',
    category: 'infra',
    title: 'Central Canal Corridor & Smart Utility Ducts',
    subtitle: 'Plug-and-play subterranean city infrastructure',
    image: '/assets/dholera-canal-infra.jpg',
    source: 'Dholera SIRDA Official Portal (dholera.gujarat.gov.in)',
    description: 'Landscaped central canal front alongside trunk utility corridors accommodating subterranean storm water, treated water, power conduits, and fiber networks with zero road digging.'
  }
];

export const allLandOptions = [
  {
    id: 'land-dh-1',
    region: 'dholera',
    regionLabel: 'Dholera SIR',
    title: 'High-Tech Industrial & Semiconductor Ancillary Zone',
    category: 'Industrial',
    location: 'TP 2 (Zone 2A Activation Area)',
    sizeRange: '2,000 sq. yd to 25 Acres',
    roadWidth: '55m / 70m TP Arterial',
    fsi: '2.0 (Premium up to 3.0)',
    priceGuidance: '₹3,500 – ₹5,800 per sq. yard',
    badge: 'Plug & Play Ready',
    img: 'dholera-industrial.jpg',
    highlights: ['Direct subterranean utility connections', '100% dedicated industrial power substation', 'Dual fiber & piped gas grid ready'],
    compliance: 'DSIRDA Allotment / Clear Title FP'
  },
  {
    id: 'land-dh-2',
    region: 'dholera',
    regionLabel: 'Dholera SIR',
    title: 'Central Spine Commercial & Corporate Hub',
    category: 'Commercial',
    location: 'Central Spine (TP 1 & 2 Intersection)',
    sizeRange: '1,000 sq. yd to 5 Acres',
    roadWidth: '70m Central Spine Corridor',
    fsi: '2.5 (Chargeable up to 4.0)',
    priceGuidance: '₹5,500 – ₹9,200 per sq. yard',
    badge: 'High Density Zone',
    img: 'hero-dholera.png',
    highlights: ['Adjacent to ABCD Administrative Complex', 'Ideal for corporate towers & business hotels', 'Direct access from NH-751 expressway ramp'],
    compliance: 'Commercial Zone / GujRERA compliant'
  },
  {
    id: 'land-dh-3',
    region: 'dholera',
    regionLabel: 'Dholera SIR',
    title: 'Integrated Smart Township Residential Plots',
    category: 'Residential',
    location: 'TP 1 (Sub-Scheme 1 & 2)',
    sizeRange: '250 sq. yd to 1,200 sq. yd',
    roadWidth: '18m - 30m Sector Roads',
    fsi: '1.8',
    priceGuidance: '₹2,200 – ₹3,800 per sq. yard',
    badge: 'Approved Township',
    img: 'dholera-airport.jpg',
    highlights: ['Surrounded by civic parks and schools', '24/7 smart treated water supply', 'Underground stormwater drainage'],
    compliance: 'NA (Non-Agricultural) / Clear Title'
  },
  {
    id: 'land-dh-4',
    region: 'dholera',
    regionLabel: 'Dholera SIR',
    title: 'Greenfield Strategic Agro-Buffer Holdings',
    category: 'Agricultural',
    location: 'Dholera Peripheral Influence Belt',
    sizeRange: '2 Bigha to 50 Bigha',
    roadWidth: '12m - 18m Tar Road Access',
    fsi: 'Subject to NA Conversion',
    priceGuidance: '₹22 Lakh – ₹45 Lakh per Bigha',
    badge: 'Strategic Growth Asset',
    img: 'dholera-solar.jpg',
    highlights: ['Fertile soil with canal proximity', 'Long-term capital value appreciation', 'Suited for solar farms or farmhouses'],
    compliance: '7/12 Single Owner Clear Title'
  },
  {
    id: 'land-lo-1',
    region: 'lothal',
    regionLabel: 'Lothal Corridor',
    title: 'Luxury Heritage & Eco-Tourism Resort Land',
    category: 'Tourism & Hospitality',
    location: 'Lothal-Saragwala NMHC Tourism Zone',
    sizeRange: '1.5 Acres to 15 Acres',
    roadWidth: '30m - 45m Tourism Highway',
    fsi: '1.5',
    priceGuidance: '₹2,800 – ₹4,200 per sq. yard',
    badge: 'Tourism Masterplan Zone',
    img: 'lothal.png',
    highlights: ['Adjacent to ₹4,500 Cr NMHC Complex', 'Approved outside 300m ASI buffer zone', 'Scenic waterfront canal views'],
    compliance: 'Heritage Tourism Zone Approved'
  },
  {
    id: 'land-lo-2',
    region: 'lothal',
    regionLabel: 'Lothal Corridor',
    title: 'Highway Retail & Tourist Plaza Parcels',
    category: 'Commercial',
    location: 'Lothal-Bhurkhi Highway Intersection',
    sizeRange: '800 sq. yd to 3,000 sq. yd',
    roadWidth: '30m Highway Frontage',
    fsi: '2.0',
    priceGuidance: '₹3,200 – ₹4,800 per sq. yard',
    badge: 'High Footfall Corridor',
    img: 'lothal-museum.jpg',
    highlights: ['Ideal for artisan bazaars and food courts', 'Massive tourist bus parking potential', 'Direct connection to Ahmedabad expressway'],
    compliance: 'Commercial NA Permission Granted'
  },
  {
    id: 'land-lo-3',
    region: 'lothal',
    regionLabel: 'Lothal Corridor',
    title: 'Serene Villa Estates & Country Living',
    category: 'Residential',
    location: 'Saragwala Heritage Enclave',
    sizeRange: '300 sq. yd to 1,500 sq. yd',
    roadWidth: '15m Paved Community Road',
    fsi: '1.5',
    priceGuidance: '₹1,600 – ₹2,400 per sq. yard',
    badge: 'Peaceful Living',
    img: 'lothal-ancient-dockyard.jpg',
    highlights: ['Serene rural countryside ambiance', '35 minutes to Dholera SIR employment hub', 'Gated community layout potential'],
    compliance: 'Clear 7/12 & Revenue Search'
  },
  {
    id: 'land-lo-4',
    region: 'lothal',
    regionLabel: 'Lothal Corridor',
    title: 'Institutional & Maritime Academy Campus Parcels',
    category: 'Institutional',
    location: 'Lothal Knowledge Corridor',
    sizeRange: '5 Acres to 30 Acres',
    roadWidth: '30m Link Road',
    fsi: '2.0',
    priceGuidance: '₹1,400 – ₹2,100 per sq. yard',
    badge: 'Institutional Reserve',
    img: 'hero-lothal-hq.jpg',
    highlights: ['Suited for maritime institutes & colleges', 'Government incentives for educational setups', 'Continuous groundwater availability'],
    compliance: 'Institutional Sanction Clearance'
  }
];

export const faqsData = [
  {
    q: 'What is the key difference between Dholera SIR and Lothal?',
    a: 'Dholera SIR is India’s premier greenfield industrial smart city (920 sq. km) focused on semiconductors, electronics, clean energy, manufacturing, and modern urban planning. Lothal, located just 35 km north, is an ancient Harappan port city (2400 BCE) currently being developed as the National Maritime Heritage Complex (NMHC) — an international heritage and coastal tourism hub. Both regions complement each other as industrial and tourism growth anchors.'
  },
  {
    q: 'How can I verify the legal title and zoning of land in Dholera SIR?',
    a: 'Every property must be evaluated against the DSIRDA Master Plan 2040 and Town Planning (TP) Schemes. Essential documents include the 7/12 extract from AnyROR Gujarat, Village Form 6 (Mutation Register), Zone Certificate from DSIRDA, and Non-Encumbrance Certificate for 30 years from the sub-registrar. Our advisory service conducts rigorous multi-tier title verification.'
  },
  {
    q: 'What are the current transit timelines to Dholera SIR?',
    a: 'With the operational Ahmedabad-Dholera Expressway (NH-751), travel time from Ahmedabad’s SP Ring Road to Dholera SIR is 45 to 50 minutes. The upcoming Dholera International Airport (Navagam) is scheduled for initial flight operations in 2026, offering global air passenger and cargo access.'
  },
  {
    q: 'What types of land are available for private investors and developers?',
    a: 'Opportunities include Commercial plots along high-access corridors, Industrial land in TP2 Activation Area, Residential township parcels in TP1/TP2, Tourism/Hospitality land along the Lothal NMHC belt, and peripheral agricultural land for long-term appreciation or agro-business.'
  },
  {
    q: 'Is development allowed near the ancient Lothal archaeological site?',
    a: 'Under Archaeological Survey of India (ASI) regulations (AMASR Act), there is a 100-meter prohibited buffer zone around the ancient monument where no construction is permitted, and a 200-meter regulated zone requiring National Monuments Authority (NMA) permissions. Commercial and tourism developments are situated outside this 300m perimeter in designated tourism and hospitality zones.'
  },
  {
    q: 'Can Non-Resident Indians (NRIs) and international investors purchase land here?',
    a: 'Yes. Under FEMA guidelines and RBI regulations, NRIs and OCIs can freely acquire commercial and residential real estate in India. Agricultural land has specific acquisition rules, which can be structured through registered Indian business entities where permitted.'
  }
];
