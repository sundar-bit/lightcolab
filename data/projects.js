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
                           facade (facade + sports / stadium / urban)
   location  (required)  City / place shown under the name.
   image     (optional)  Path to the hero image, e.g. "img/oberoi-hero.jpg".
                         Leave as "" to show a labelled placeholder tile.
   wide      (optional)  true = this tile spans two columns in the "All" view,
                         for visual rhythm. Use sparingly (every 4-5 tiles).
   featured  (optional)  true = also render this as a Featured Projects row.
   summary   (featured)  1-2 lines on the brief / lighting intent.
   tags      (featured)  Array of short tags, e.g. ["Architectural","Scene control"].

   NOTE: keep `image` paths relative (img/...). All copy in [brackets] is a
   placeholder awaiting client content — grep "[" to find what's outstanding.
============================================================================= */

const LC_PROJECTS = [
  /* residential  (client HD photos — shown first in the All view) */
  { name: 'Bashyam Residence',       sector: 'residential', location: '[city]',  image: 'img/residential/bashyam.jpg' },
  { name: 'Ramesh Residence',        sector: 'residential', location: '[city]',  image: 'img/residential/ramesh.jpg' },
  { name: 'Azure Residence',         sector: 'residential', location: '[city]',  image: 'img/residential/azure.jpg' },
  { name: 'Suresh Krishna Residence',sector: 'residential', location: '[city]',  image: 'img/residential/suresh-krishna.jpg' },
  { name: 'JK Residence',            sector: 'residential', location: '[city]',  image: 'img/residential/jk.jpg' },
  { name: 'Kerala Residence',        sector: 'residential', location: 'Kerala',  image: 'img/residential/kerala.jpg' },
  { name: 'Sidharth Residence',      sector: 'residential', location: '[city]',  image: 'img/residential/sidharth.jpg' },

  /* --- Featured rows (also appear in the gallery) --- */
  {
    name: 'Apollo Proton Cancer Centre',
    sector: 'healthcare',
    location: 'Chennai',
    image: 'img/healthcare/apollo.jpg',
    wide: true,
    featured: true,
    summary: 'Lighting for one of the region’s leading cancer-care facilities — meeting strict healthcare standards while bringing the feel-good warmth of a well-curated hospitality space, with controls supporting comfort and therapeutic care.',
    tags: ['Healthcare', 'Lighting controls', 'Therapeutic'],
  },
  {
    name: 'JPMC',
    sector: 'commercial',
    location: 'Bangalore · Gensler',
    image: 'img/commercial/jpmc.jpg',
    featured: true,
    summary: 'A 10-lakh-sq-ft workplace delivered with Gensler — state-of-the-art lighting and lighting controls designed for employee comfort and productivity across a large, technology-led office floorplate.',
    tags: ['Workplace', 'Daylight integration', 'Energy'],
  },
  {
    name: 'Swarved Mahamandir Dham',
    sector: 'spiritual',
    location: 'Varanasi',
    image: 'img/spiritual/swarved.jpg',
    featured: true,
    summary: 'Architectural and decorative lighting for a monumental spiritual centre — carrying warmth and divinity through the space so the light contributes to its positive energy and sense of calm.',
    tags: ['Spiritual', 'Architectural', 'Decorative'],
  },

  /* --- Gallery projects (one or more per sector) --- */
  /* commercial  (photos from client Commercial portfolio deck) */
  { name: 'Wipro', sector: 'commercial', location: 'Bangalore · Ostraca', image: 'img/commercial/wipro.jpg' },
  { name: 'Zoho', sector: 'commercial', location: 'Chennai · Pencil & Monk', image: 'img/commercial/zoho.jpg' },
  { name: 'Uber', sector: 'commercial', location: 'Bangalore · Adrianse', image: 'img/commercial/uber.jpg' },
  { name: 'British Petroleum', sector: 'commercial', location: 'Pune · Adrianse', image: 'img/commercial/bp.jpg' },
  { name: 'Aptiv', sector: 'commercial', location: 'Chennai · DWP Interics', image: 'img/commercial/aptiv.jpg' },
  { name: 'UST Global', sector: 'commercial', location: 'Trivandrum', image: 'img/commercial/ust-global.jpg' },

  /* hospitality  (photos from client Hospitality portfolio) */
  { name: 'Radisson Blu Resort', sector: 'hospitality', location: 'Pondicherry', image: 'img/hospitality/radisson-blu-resort.jpg' },
  { name: 'The Bier Library', sector: 'hospitality', location: 'Bangalore', image: 'img/hospitality/bier-library.jpg' },
  { name: 'Lemon Tree', sector: 'hospitality', location: 'Vijayawada', image: 'img/hospitality/lemon-tree.jpg' },
  { name: 'Radisson Blu', sector: 'hospitality', location: 'Chennai Airport', image: 'img/hospitality/radisson-blu.jpg' },
  { name: 'The Residency Towers', sector: 'hospitality', location: 'Pondicherry', image: 'img/hospitality/residency-towers.jpg' },
  { name: 'Hyatt Place', sector: 'hospitality', location: 'Kathmandu', image: 'img/hospitality/hyatt-place.jpg' },
  { name: 'Hotel Residency', sector: 'hospitality', location: 'Coimbatore', image: 'img/hospitality/hotel-residency.jpg' },
  { name: 'Park Inn by Radisson', sector: 'hospitality', location: 'Vellore', image: 'img/hospitality/parkinn-radisson.jpg' },

  /* retail */
  { name: 'Tiffara', sector: 'retail', location: 'Chennai', image: 'img/retail/tiffara.jpg' },
  { name: 'Hamleys', sector: 'retail', location: 'Mumbai', image: '' },
  { name: 'GRT Jewellery', sector: 'retail', location: 'Vishakapatnam', image: '' },

  /* healthcare */
  { name: 'MGM Health Care', sector: 'healthcare', location: 'Chennai', image: '' },

  /* institutional (institution + public + community) */
  { name: 'Babaji Vidhyashram', sector: 'institutional', location: 'Chennai', image: 'img/institutional/babaji.jpg' },
  { name: 'International Village School', sector: 'institutional', location: 'Chennai', image: '' },
  { name: 'Vice Regal Lodge', sector: 'institutional', location: 'Shimla', image: '' },

  /* spiritual */
  { name: 'Sree Kanakadurga Temple', sector: 'spiritual', location: 'Vijayawada', image: '' },
  { name: 'St. Joseph Cathedral', sector: 'spiritual', location: 'Chengalpattu', image: '' },

  /* facade (facade + sports / urban) */
  { name: '57 Poes', sector: 'facade', location: 'Chennai', image: 'img/facade/57poes.jpg', wide: true },
  { name: 'GKS Helix', sector: 'facade', location: 'Chennai', image: 'img/facade/gks-helix.jpg' },
  { name: 'Doha Oasis', sector: 'facade', location: 'Qatar', image: '' },
];
