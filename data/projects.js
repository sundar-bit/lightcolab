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
   sector    (required)  ONE of: commercial | residential | hospitality |
                         retail | facade | healthcare | institution
                         (must match a filter button in index.html)
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
  {
    name: '[Featured Project One]',
    sector: 'hospitality',
    location: '[Location]',
    image: '',
    wide: true,
    featured: true,
    summary: '[One or two lines on the brief, the lighting intent, and what made the result distinctive. Replace with project copy.]',
    tags: ['Architectural', 'Scene control', 'Facade'],
  },
  {
    name: '[Featured Project Two]',
    sector: 'commercial',
    location: '[Location]',
    image: '',
    featured: true,
    summary: '[One or two lines on the brief, the lighting intent, and what made the result distinctive. Replace with project copy.]',
    tags: ['Workplace', 'Daylight integration', 'Energy'],
  },
  {
    name: '[Featured Project Three]',
    sector: 'residential',
    location: '[Location]',
    image: '',
    featured: true,
    summary: '[One or two lines on the brief, the lighting intent, and what made the result distinctive. Replace with project copy.]',
    tags: ['Interior', 'Warm dimming', 'Bespoke'],
  },

  /* --- Gallery-only projects (set featured:true above to promote any of these) --- */
  { name: '[Project Name]', sector: 'retail',      location: '[Location]', image: '' },
  { name: '[Project Name]', sector: 'facade',      location: '[Location]', image: '', wide: true },
  { name: '[Project Name]', sector: 'healthcare',  location: '[Location]', image: '' },
  { name: '[Project Name]', sector: 'institution', location: '[Location]', image: '' },
  { name: '[Project Name]', sector: 'commercial',  location: '[Location]', image: '' },
  { name: '[Project Name]', sector: 'hospitality', location: '[Location]', image: '' },
];
