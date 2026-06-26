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
  /* --- Featured rows (also appear in the gallery) --- */
  {
    name: 'Apollo Proton Cancer Centre',
    sector: 'healthcare',
    location: 'Chennai',
    image: 'img/sectors/healthcare.jpg',
    wide: true,
    featured: true,
    summary: 'Lighting for one of the region’s leading cancer-care facilities — meeting strict healthcare standards while bringing the feel-good warmth of a well-curated hospitality space, with controls supporting comfort and therapeutic care.',
    tags: ['Healthcare', 'Lighting controls', 'Therapeutic'],
  },
  {
    name: 'JPMC',
    sector: 'commercial',
    location: 'Bangalore · Gensler',
    image: 'img/sectors/commercial.jpg',
    featured: true,
    summary: 'A 10-lakh-sq-ft workplace delivered with Gensler — state-of-the-art lighting and lighting controls designed for employee comfort and productivity across a large, technology-led office floorplate.',
    tags: ['Workplace', 'Daylight integration', 'Energy'],
  },
  {
    name: 'Swarved Mahamandir Dham',
    sector: 'spiritual',
    location: 'Varanasi',
    image: 'img/sectors/spiritual.jpg',
    featured: true,
    summary: 'Architectural and decorative lighting for a monumental spiritual centre — carrying warmth and divinity through the space so the light contributes to its positive energy and sense of calm.',
    tags: ['Spiritual', 'Architectural', 'Decorative'],
  },

  /* --- Gallery projects (one or more per sector) --- */
  /* commercial */
  { name: 'Google', sector: 'commercial', location: 'Hyderabad', image: '' },
  { name: 'Zoho', sector: 'commercial', location: 'Chennai · Pencil & Monk', image: '' },
  { name: 'Wipro', sector: 'commercial', location: 'Bangalore · Ostraca', image: '' },

  /* hospitality */
  { name: 'Radisson Blu', sector: 'hospitality', location: 'Chennai Airport', image: 'img/sectors/hospitality.jpg', wide: true },
  { name: 'Hyatt Centric', sector: 'hospitality', location: 'Dubai', image: '' },
  { name: 'The Residency Towers', sector: 'hospitality', location: 'Chennai', image: 'img/sectors/convention.jpg' },

  /* retail */
  { name: 'Tiffara', sector: 'retail', location: 'Chennai', image: 'img/sectors/retail.jpg' },
  { name: 'Hamleys', sector: 'retail', location: 'Mumbai', image: '' },
  { name: 'GRT Jewellery', sector: 'retail', location: 'Vishakapatnam', image: '' },

  /* residential */
  { name: 'Private Residence', sector: 'residential', location: 'Chennai', image: 'img/sectors/residential.jpg' },
  { name: 'Private Villa', sector: 'residential', location: 'Bangalore', image: '' },

  /* healthcare */
  { name: 'MGM Health Care', sector: 'healthcare', location: 'Chennai', image: '' },

  /* institutional (institution + public + community) */
  { name: 'Babaji Vidhyashram', sector: 'institutional', location: 'Chennai', image: 'img/sectors/institution.jpg' },
  { name: 'International Village School', sector: 'institutional', location: 'Chennai', image: 'img/sectors/community.jpg' },
  { name: 'Vice Regal Lodge', sector: 'institutional', location: 'Shimla', image: 'img/sectors/public.jpg' },

  /* spiritual */
  { name: 'Sree Kanakadurga Temple', sector: 'spiritual', location: 'Vijayawada', image: '' },
  { name: 'St. Joseph Cathedral', sector: 'spiritual', location: 'Chengalpattu', image: '' },

  /* facade (facade + sports / urban) */
  { name: '57 Poes', sector: 'facade', location: 'Chennai', image: 'img/sectors/facade.jpg', wide: true },
  { name: 'GKS Helix', sector: 'facade', location: 'Chennai', image: 'img/sectors/sports.jpg' },
  { name: 'Doha Oasis', sector: 'facade', location: 'Qatar', image: '' },
];
