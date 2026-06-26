/* =============================================================================
   LIGHT COLAB — main.js
   Depends on (loaded before this file):
     data/projects.js  -> const LC_PROJECTS
     data/clients.js   -> const LC_CLIENTS
   Responsibilities:
     - footer year
     - nav: transparent -> blurred on scroll
     - accessible mobile menu (toggle, aria, Esc, click-away)
     - render gallery tiles from LC_PROJECTS + sector filter
     - render featured rows from LC_PROJECTS (featured: true)
     - render client wall from LC_CLIENTS
     - gentle scroll reveals (skipped when prefers-reduced-motion)
   No frameworks, no build step.
============================================================================= */
(function () {
  'use strict';

  /* Small helpers ---------------------------------------------------------- */
  var $  = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  // Escape user/content strings before injecting as HTML.
  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* Footer year ------------------------------------------------------------ */
  var yr = $('#yr');
  if (yr) { yr.textContent = new Date().getFullYear(); }

  /* Nav scroll state ------------------------------------------------------- */
  var nav = $('#nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 40); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Accessible mobile menu ------------------------------------------------- */
  var menuBtn  = $('#menuBtn');
  var navLinks = $('#navLinks');
  if (menuBtn && navLinks) {
    var setMenu = function (open) {
      navLinks.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    menuBtn.addEventListener('click', function () {
      setMenu(!navLinks.classList.contains('open'));
    });
    // Close when a link is chosen.
    $$('a', navLinks).forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
    // Close on Esc.
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { setMenu(false); }
    });
    // Close when clicking outside the open drawer.
    document.addEventListener('click', function (e) {
      if (navLinks.classList.contains('open') &&
          !navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        setMenu(false);
      }
    });
  }

  /* Gallery + filter ------------------------------------------------------- */
  var gallery = $('#gallery');
  var projects = (typeof LC_PROJECTS !== 'undefined') ? LC_PROJECTS : [];

  function tileMarkup(p, allowWide) {
    var media = p.image
      ? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + ' — ' + esc(p.sector) +
        ' lighting project in ' + esc(p.location) + '" loading="lazy" decoding="async">'
      : '<div class="tile-ph" aria-hidden="true">' + esc(p.sector) + '</div>';
    return '<article class="tile' + (p.wide && allowWide ? ' wide' : '') + '" tabindex="0">' +
             media +
             '<div class="tile-info">' +
               '<div class="tile-sector">' + esc(p.sector) + '</div>' +
               '<h3 class="tile-name">' + esc(p.name) + '</h3>' +
               '<div class="tile-loc">' + esc(p.location) + '</div>' +
             '</div>' +
           '</article>';
  }

  function renderTiles(filter) {
    if (!gallery) { return; }
    var list = projects.filter(function (p) { return filter === 'all' || p.sector === filter; });
    if (!list.length) {
      gallery.innerHTML = '<p class="gallery-empty">No projects in this sector yet.</p>';
      return;
    }
    // 'wide' tiles only span columns in the unfiltered "All" view.
    gallery.innerHTML = list.map(function (p) { return tileMarkup(p, filter === 'all'); }).join('');
  }

  if (gallery) {
    renderTiles('all');
    $$('.filter').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var active = $('.filter.active');
        if (active) {
          active.classList.remove('active');
          active.setAttribute('aria-pressed', 'false');
        }
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        renderTiles(btn.dataset.f);
      });
    });
  }

  /* Featured rows ---------------------------------------------------------- */
  var featuredWrap = $('#featured');
  if (featuredWrap) {
    var feats = projects.filter(function (p) { return p.featured; });
    featuredWrap.innerHTML = feats.map(function (p, i) {
      var media = p.image
        ? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + ' — featured ' +
          esc(p.sector) + ' lighting project" loading="lazy" decoding="async">'
        : '<div class="tile-ph" aria-hidden="true">Hero image — Project 0' + (i + 1) + '</div>';
      var tags = (p.tags || []).map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('');
      return '<article class="feat-row reveal">' +
               '<div class="feat-img">' + media + '</div>' +
               '<div class="feat-txt">' +
                 '<span class="eyebrow">' + esc(p.sector) + ' · ' + esc(p.location) + '</span>' +
                 '<h3>' + esc(p.name) + '</h3>' +
                 '<p>' + esc(p.summary || '') + '</p>' +
                 (tags ? '<div class="feat-tags">' + tags + '</div>' : '') +
               '</div>' +
             '</article>';
    }).join('');
  }

  /* Client wall ------------------------------------------------------------ */
  var clientsList = $('#clients-list');
  if (clientsList && typeof LC_CLIENTS !== 'undefined') {
    var clientItems = LC_CLIENTS.map(function (c) {
      return '<span class="marquee-item">' + esc(c) + '</span>';
    }).join('');
    // Duplicate the list so the -50% scroll loops seamlessly.
    clientsList.innerHTML = '<div class="marquee-track">' + clientItems + clientItems + '</div>';
  }

  /* Scroll reveals --------------------------------------------------------- */
  var reduceMotion = window.matchMedia &&
                     window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function observeReveals() {
    var els = $$('.reveal');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el, i) {
      el.style.transitionDelay = (i % 3 * 0.08) + 's';
      io.observe(el);
    });
  }
  // Run after dynamic content (featured/gallery) is in the DOM.
  observeReveals();
})();
