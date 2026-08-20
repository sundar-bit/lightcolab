/* =============================================================================
   LIGHT COLAB — PROJECT DATA
   Single source of truth for BOTH the Sectors gallery (section 4) and the
   Featured Projects rows (section 5).

   TO ADD A PROJECT: copy one block, fill it in, done. It appears in the gallery
   automatically. To also promote it into a Featured row, set  featured: true
   and fill in  summary  and  tags.

   FIELDS
   ------
   name      (required)  Project name.
   sector    (required)  ONE of the 8 consolidated sectors (must match a
                         filter button's data-f in index.html):
                           commercial    | hospitality (incl. convention/banquet)
                           retail         | residential
                           healthcare     | institutional (institution + public + community)
                           spiritual (spiritual + heritage)
                           facade (facade + landscape + sports / stadium / urban)
   location  (required)  City / place shown under the name. Where the client
                         named the interior designer, it follows the city:
                         "Bangalore · Gensler".
   image     (optional)  Path to the hero image, e.g. "img/oberoi-hero.jpg".
                         Leave as "" to show a labelled placeholder tile.
   area      (optional)  Built-up area as the client states it, e.g. "10L sft".
   status    (optional)  "Ongoing" for live projects. Omit when complete.
   wide      (optional)  true = this tile spans two columns in the "All" view,
                         for visual rhythm. The "All" view is 8 tiles on a
                         3-column grid, so exactly ONE wide tile fills the grid
                         evenly (8 + 1 = 9) — and it has to be the FOURTH
                         representative, so it starts a fresh row. Currently
                         that is retail · Kala Loka.
   featured  (optional)  true = also render this as a Featured Projects row.
   feature_name (optional) Heading to use on the Featured row when the client
                         titles it differently from the gallery card.
   summary   (featured)  1-2 lines on the brief / lighting intent.
   tags      (featured)  Array of short tags, e.g. ["Architectural","Scene control"].

   ORDER MATTERS
   -------------
   The "All" view shows ONE representative project per sector — the FIRST entry
   of each sector in this array. Keep each sector's strongest project first.
   Featured rows also render in this array's order, so the sector blocks below
   follow the client deck's own sequence (commercial, residential, hospitality,
   retail, ... ) — that makes the Featured section read in the deck's order.

   Content below is per the client deck "Light Colab Website Inputs_18Aug2026.pptx"
   (18 Aug 2026). Projects the client struck through in that deck have been
   removed: Azure Residence, Zoho, Hamleys, GRT Jewellery, 57 Poes, GKS Helix,
   Doha Oasis.
============================================================================= */

const LC_PROJECTS = [
  /* ----------------------------------------------------------------- COMMERCIAL */
  {
    name: 'Wipro Lab45',
    sector: 'commercial',
    location: 'Bangalore · Ostraca',
    image: 'img/commercial/wipro-lab45.jpg',
    area: '5L sft',
    featured: true,
    feature_name: 'Wipro Innovation Hub',
    summary: 'WIPRO Lab45 is a dedicated innovation hub and research-and-development arm focused on conceptualizing, incubating, and building cutting-edge digital products, platforms, and automation solutions.',
    tags: ['Workplace', 'Innovation hub', 'R&D'],
  },
  { name: 'JPMC',              sector: 'commercial', location: 'Bangalore · Gensler',     image: 'img/commercial/jpmc.jpg',          area: '10L sft' },
  { name: 'JPMC',              sector: 'commercial', location: 'Mumbai · M Moser',        image: 'img/commercial/jpmc-mumbai.jpg',   area: '10L sft' },
  { name: 'Uber',              sector: 'commercial', location: 'Bangalore · Adrianse',    image: 'img/commercial/uber.jpg',          area: '10L sft', status: 'Ongoing' },
  { name: 'British Petroleum', sector: 'commercial', location: 'Pune · Adrianse',         image: 'img/commercial/bp.jpg',            area: '10L sft', status: 'Ongoing' },
  { name: 'Suntec',            sector: 'commercial', location: 'Trivandrum · DWP Interics', image: 'img/commercial/suntec.jpg',      area: '5L sft' },
  { name: 'Wipro',             sector: 'commercial', location: 'Kochi · Ostraca',         image: 'img/commercial/wipro-kochi.jpg',   area: '4L sft', status: 'Ongoing' },
  { name: 'MSD',               sector: 'commercial', location: 'Hyderabad · Adrianse',    image: 'img/commercial/msd.jpg',           area: '1.5L sft' },
  { name: 'Macleods',          sector: 'commercial', location: 'Mumbai · Adrianse',       image: 'img/commercial/macleods.jpg',      area: '1.5L sft', status: 'Ongoing' },
  { name: 'UST Global',        sector: 'commercial', location: 'Trivandrum',              image: 'img/commercial/ust-global.jpg',    area: '1L sft' },
  { name: 'Goldman Sachs',     sector: 'commercial', location: 'Hyderabad · Adrianse',    image: 'img/commercial/goldman-sachs.jpg', area: '< 50K sft' },
  { name: 'Lutron',            sector: 'commercial', location: 'Gurugram · Spacematrix',  image: 'img/commercial/lutron.jpg',        area: '< 50K sft' },
  { name: 'Aptiv',             sector: 'commercial', location: 'Chennai · DWP Interics',  image: 'img/commercial/aptiv.jpg',         area: '< 50K sft' },

  /* ---------------------------------------------------------------- RESIDENTIAL */
  {
    name: 'Ajit Isaac Residence',
    sector: 'residential',
    location: 'Bangalore',
    image: 'img/residential/ajit-isaac.jpg',
    featured: true,
    summary: 'The residence of Ajit Isaac, founder of Quess Corp and entrepreneur, features a refined lighting approach that enhances its architecture, interiors and landscape. Layered illumination creates warmth, depth and visual comfort, while subtly highlighting textures, greenery and architectural details.',
    tags: ['Architecture', 'Interiors', 'Landscape'],
  },
  { name: 'Bashyam Residence',        sector: 'residential', location: 'Chennai',    image: 'img/residential/bashyam.jpg' },
  { name: 'Ramesh Residence',         sector: 'residential', location: 'Chennai',    image: 'img/residential/ramesh.jpg' },
  { name: 'Suresh Krishna Residence', sector: 'residential', location: 'Chennai',    image: 'img/residential/suresh-krishna.jpg' },
  { name: 'Sidharth Residence',       sector: 'residential', location: 'Chennai',    image: 'img/residential/sidharth.jpg' },
  { name: 'JK Residence',             sector: 'residential', location: 'Coimbatore', image: 'img/residential/jk.jpg' },
  { name: 'Kerala Residence',         sector: 'residential', location: 'Kerala',     image: 'img/residential/kerala.jpg' },
  { name: 'Aikaa Villas',             sector: 'residential', location: 'Hyderabad',  image: 'img/residential/aikaa-villas.jpg' },

  /* ---------------------------------------------------------------- HOSPITALITY */
  {
    name: 'Park Inn by Radisson',
    sector: 'hospitality',
    location: 'Vellore',
    image: 'img/hospitality/parkinn-radisson.jpg',
    featured: true,
    summary: 'A contemporary hotel in the heart of Vellore, Park Inn by Radisson combines modern hospitality with a vibrant, welcoming atmosphere. The lighting design complements its architecture and interiors through layered illumination, enhancing guest comfort, ambience, and the overall hotel experience.',
    tags: ['Hospitality', 'Layered illumination', 'Guest comfort'],
  },
  {
    name: 'The Bier Library',
    sector: 'hospitality',
    location: 'Sarjapur Road, Bangalore',
    image: 'img/hospitality/bier-library.jpg',
    featured: true,
    summary: 'The Bier Library on Sarjapur Road is a vibrant brewpub that blends a relaxed social atmosphere with a distinctive industrial character. The lighting design reinforces its warm, inviting identity, using layered illumination to create intimate corners, highlight materials, and energise the dining experience.',
    tags: ['Brewpub', 'Layered illumination', 'Industrial character'],
  },
  { name: 'Raj Park',              sector: 'hospitality', location: 'Coimbatore',      image: 'img/hospitality/raj-park.jpg' },
  { name: 'Holiday Inn Express',   sector: 'hospitality', location: 'Bangalore',       image: 'img/hospitality/holiday-inn-express.jpg' },
  { name: 'Hotel @ Vandalur',      sector: 'hospitality', location: 'Chennai',         image: 'img/hospitality/vandalur.jpg' },
  { name: 'Nature Knots',          sector: 'hospitality', location: 'Bangalore',       image: 'img/hospitality/nature-knots.jpg' },
  { name: 'Radisson Blu Resort',   sector: 'hospitality', location: 'Pondicherry',     image: 'img/hospitality/radisson-blu-resort.jpg' },
  { name: 'Lemon Tree',            sector: 'hospitality', location: 'Vijayawada',      image: 'img/hospitality/lemon-tree.jpg' },
  { name: 'Radisson Blu',          sector: 'hospitality', location: 'Chennai Airport', image: 'img/hospitality/radisson-blu.jpg' },
  { name: 'The Residency Towers',  sector: 'hospitality', location: 'Pondicherry',     image: 'img/hospitality/residency-towers.jpg' },
  { name: 'Hyatt Place',           sector: 'hospitality', location: 'Kathmandu',       image: 'img/hospitality/hyatt-place.jpg' },
  { name: 'Hotel Residency',       sector: 'hospitality', location: 'Coimbatore',      image: 'img/hospitality/hotel-residency.jpg' },

  /* --------------------------------------------------------------------- RETAIL */
  {
    name: 'Kala Loka',
    sector: 'retail',
    location: 'Bangalore',
    image: 'img/retail/kala-loka.jpg',
    wide: true,
    featured: true,
    summary: 'Kala Loka is a contemporary retail destination celebrating Karnataka’s rich craft and cultural heritage through an eclectic collection of handlooms, handicrafts, and GI-tagged products. The lighting design brings warmth and clarity to the experience, thoughtfully highlighting products, textures, and displays while creating an inviting retail environment.',
    tags: ['Retail', 'Craft & heritage', 'Product display'],
  },
  { name: 'Tifara',           sector: 'retail', location: 'Chennai',   image: 'img/retail/tiffara.jpg' },
  { name: 'Gajraj Jewellers', sector: 'retail', location: 'Bangalore', image: 'img/retail/gajraj-jewellers.jpg' },
  { name: 'Trove Tiles',      sector: 'retail', location: 'Bangalore', image: 'img/retail/trove-tiles.jpg' },

  /* ----------------------------------------------------------------- HEALTHCARE */
  {
    name: 'Apollo Proton Cancer Centre',
    sector: 'healthcare',
    location: 'Chennai',
    image: 'img/healthcare/apollo.jpg',
    /* Was a Featured row before the 18 Aug 2026 client deck, which supplied a
       new set of six. Flip `featured` back to true to restore it. */
    summary: 'Lighting for one of the region’s leading cancer-care facilities — meeting strict healthcare standards while bringing the feel-good warmth of a well-curated hospitality space, with controls supporting comfort and therapeutic care.',
    tags: ['Healthcare', 'Lighting controls', 'Therapeutic'],
  },
  { name: 'MGM Health Care', sector: 'healthcare', location: 'Chennai', image: '' },

  /* -------------------------------------------------------------- INSTITUTIONAL */
  {
    name: 'Param History, Science, Innovation and Cultural Centre',
    sector: 'institutional',
    location: 'Bangalore',
    image: 'img/institutional/param.jpg',
    featured: true,
    summary: 'The Param International Experience Centre spans 15 acres and 1.2 million sq. ft., poised to be India’s largest multi-experience hub. A people-powered, public-funded landmark — a platform for Science, Innovation, History, Culture, and Arts under one roof. A visionary space where learning, innovation, and discovery converge to build the India of tomorrow.',
    tags: ['Culture', 'Science & innovation', 'Experience centre'],
  },
  { name: 'Babaji Vidhyashram',           sector: 'institutional', location: 'Chennai', image: 'img/institutional/babaji.jpg' },
  { name: 'International Village School', sector: 'institutional', location: 'Chennai', image: '' },
  { name: 'Vice Regal Lodge',             sector: 'institutional', location: 'Shimla',  image: '' },

  /* ------------------------------------------------------------------ SPIRITUAL */
  {
    name: 'Swarved Mahamandir Dham',
    sector: 'spiritual',
    location: 'Varanasi',
    image: 'img/spiritual/swarved.jpg',
    /* Was a Featured row before the 18 Aug 2026 client deck — see note above. */
    summary: 'Architectural and decorative lighting for a monumental spiritual centre — carrying warmth and divinity through the space so the light contributes to its positive energy and sense of calm.',
    tags: ['Spiritual', 'Architectural', 'Decorative'],
  },
  { name: 'Sree Kanakadurga Temple', sector: 'spiritual', location: 'Vijayawada',   image: '' },
  { name: 'St. Joseph Cathedral',    sector: 'spiritual', location: 'Chengalpattu', image: '' },

  /* --------------------------------------------------------- FACADE & LANDSCAPE */
  { name: 'Baashyaam Damera Gardens', sector: 'facade', location: 'Chennai', image: 'img/facade/baashyaam-damera-gardens.jpg' },
  { name: 'Baashyaam Crown',          sector: 'facade', location: 'Chennai', image: 'img/facade/baashyaam-crown.jpg' },
  { name: 'Baashyaam — The Peak',     sector: 'facade', location: 'Chennai', image: 'img/facade/baashyaam-the-peak.jpg' },
  { name: 'Baashyaam — Plutus',       sector: 'facade', location: 'Chennai', image: 'img/facade/baashyaam-plutus.jpg' },
  { name: 'Arihant Vipassana',        sector: 'facade', location: 'Chennai', image: 'img/facade/arihant-vipassana.jpg' },
  { name: 'Arihant Saraswati',        sector: 'facade', location: 'Chennai', image: 'img/facade/arihant-saraswati.jpg' },
  { name: 'Arihant Aurelia',          sector: 'facade', location: 'Chennai', image: 'img/facade/arihant-aurelia.jpg' },
  { name: 'Arihant Sri Nivas',        sector: 'facade', location: 'Chennai', image: 'img/facade/arihant-sri-nivas.jpg' },
  { name: 'Arihant Chirla',           sector: 'facade', location: 'Chennai', image: 'img/facade/arihant-chirla.jpg' },
  { name: 'Urbanrise Springtide',     sector: 'facade', location: 'Chennai', image: 'img/facade/urbanrise-springtide.jpg' },
  { name: 'Formula 4 Racing',         sector: 'facade', location: 'Chennai', image: 'img/facade/formula-4-racing.jpg' },
];
