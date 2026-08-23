/* Portfolio renderer. All content lives in js/data.js — edit that, not this. */
(function () {
  'use strict';
  const D = window.PORTFOLIO;
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const el = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };

  /* ---------- Theme ---------- */
  const root = document.documentElement;
  const store = { get(k) { try { return localStorage.getItem(k); } catch { return null; } },
                  set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage blocked */ } } };
  const applyTheme = (t) => { root.dataset.theme = t; store.set('theme', t); };
  applyTheme(store.get('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  $('#theme-toggle').addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  /* ---------- Mobile nav ---------- */
  const burger = $('#nav-burger'), links = $('.nav__links');
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', (e) => { if (e.target.tagName === 'A') links.classList.remove('open'); });

  /* ---------- Profile / hero ---------- */
  const P = D.profile;
  document.title = `${P.name} — ${P.siteTitle || 'Portfolio'}`;
  $('#nav-name').textContent = P.name;
  $('#nav-resume').href = P.resume;
  $('#exp-resume-link').href = P.resume;
  $('#hero-eyebrow').textContent = P.eyebrow;
  $('#hero-name').textContent = P.name;
  $('#hero-tagline').textContent = P.tagline;
  $('#hero-blurb').textContent = P.blurb;
  $('#hero-cta').innerHTML = P.cta.map((c, i) =>
    `<a class="btn ${i === 0 ? 'btn--accent' : 'btn--ghost'}" href="${esc(c.href)}" ${c.external ? 'target="_blank" rel="noopener"' : ''}>${esc(c.label)}</a>`
  ).join('');
  $('#hero-stats').innerHTML = P.stats.map((s) => `<li><b>${esc(s.value)}</b><span>${esc(s.label)}</span></li>`).join('');
  $('#contact-blurb').textContent = P.contactBlurb;
  $('#contact-links').innerHTML = P.links.map((l) =>
    `<a class="btn btn--ghost" href="${esc(l.href)}" ${l.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${esc(l.label)}</a>`
  ).join('');
  $('#footer-copy').textContent = `© ${new Date().getFullYear()} ${P.name}. Built by hand — no frameworks.`;

  /* ---------- Projects ---------- */
  const projects = D.projects;
  const grid = $('#project-grid');
  const filters = $('#filters');
  const categories = ['All', ...new Set(projects.flatMap((p) => p.categories))];
  let active = 'All';

  filters.innerHTML = categories.map((c) =>
    `<button type="button" aria-pressed="${c === 'All'}" data-cat="${esc(c)}">${esc(c)}</button>`
  ).join('');
  filters.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    active = b.dataset.cat;
    filters.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    grid.querySelectorAll('.card').forEach((card) => {
      const p = projects[+card.dataset.i];
      card.classList.toggle('hidden', active !== 'All' && !p.categories.includes(active));
    });
  });

  const heroImg = (p) => p.images && p.images.length ? (p.images[p.cardImage ?? 0] || p.images[0]) : null;
  grid.innerHTML = projects.map((p, i) => {
    const h = heroImg(p);
    return `<button class="card reveal" data-i="${i}" aria-haspopup="dialog">
      <div class="card__media ${h ? '' : 'card__media--empty'}">
        ${h ? `<img src="${esc(h.src)}" alt="${esc(h.alt || p.title)}" loading="lazy" class="${h.fit === 'contain' ? 'fit-contain' : ''}">` : '<span>photos coming soon</span>'}
        ${p.featured ? '<span class="card__featured">Featured</span>' : ''}
      </div>
      <div class="card__body">
        <span class="card__meta">${esc(p.date)}${p.role ? ' · ' + esc(p.role) : ''}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        <div class="card__tags">${p.tags.slice(0, 4).map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      </div>
    </button>`;
  }).join('');

  /* ---------- Modal ---------- */
  const modal = $('#modal'), body = $('#modal-body');
  let current = -1;

  function renderProject(i, syncHash = true) {
    const p = projects[i]; current = i;
    const h = heroImg(p);
    const facts = (p.facts || []).map((f) => `<div><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`).join('');
    const sections = (p.sections || []).map((s) => `
      <div class="modal__section">
        <h3>${esc(s.heading)}</h3>
        ${s.text ? `<p>${esc(s.text)}</p>` : ''}
        ${s.bullets ? `<ul>${s.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}
      </div>`).join('');
    const gallery = p.images && p.images.length > 1 ? `
      <div class="modal__section">
        <h3>Gallery</h3>
        <div class="modal__gallery">${p.images.map((im, k) => `
          <figure data-lb="${k}"><img src="${esc(im.src)}" alt="${esc(im.alt || '')}" loading="lazy"><figcaption>${esc(im.caption || im.alt || '')}</figcaption></figure>`).join('')}
        </div>
      </div>` : '';
    const linksHtml = (p.links || []).map((l) =>
      `<a class="btn btn--ghost btn--sm" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('');
    const prev = (i - 1 + projects.length) % projects.length, next = (i + 1) % projects.length;

    body.innerHTML = `
      <div class="modal__hero ${h ? '' : 'modal__hero--empty'}" ${h ? `data-lb="${p.cardImage ?? 0}"` : ''}>
        ${h ? `<img src="${esc(h.src)}" alt="${esc(h.alt || p.title)}" class="${h.fit === 'contain' ? 'fit-contain' : ''}">` : '<span>photos coming soon</span>'}
      </div>
      <div class="modal__content">
        <span class="eyebrow">${esc(p.categories.join(' · '))}</span>
        <h2 id="modal-title">${esc(p.title)}</h2>
        <p class="modal__lede">${esc(p.summary)}</p>
        ${facts ? `<dl class="modal__facts">${facts}</dl>` : ''}
        ${sections}
        ${gallery}
        ${linksHtml ? `<div class="modal__links">${linksHtml}</div>` : ''}
        <div class="modal__tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
        <div class="modal__navrow">
          <button data-nav="${prev}">← ${esc(projects[prev].title)}</button>
          <button data-nav="${next}">${esc(projects[next].title)} →</button>
        </div>
      </div>`;
    $('.modal__panel').scrollTop = 0;
    if (syncHash && !modal.hidden) history.replaceState({ project: p.id }, '', '#' + p.id);
  }

  let lastFocus = null;
  function openProject(i, push = true) {
    lastFocus = document.activeElement;
    modal.hidden = false;
    renderProject(i, false);
    document.body.classList.add('no-scroll');
    if (push) history.pushState({ project: projects[i].id }, '', '#' + projects[i].id);
    $('.modal__close').focus();
  }
  function closeModal(pop = false) {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('no-scroll');
    if (!pop && history.state && history.state.project) history.back();
    else if (!pop) history.replaceState(null, '', location.pathname + location.search + '#projects');
    if (lastFocus && lastFocus.isConnected) lastFocus.focus();
    lastFocus = null;
  }
  window.addEventListener('popstate', () => {
    const id = location.hash.slice(1);
    const i = projects.findIndex((p) => p.id === id);
    if (i >= 0) { if (modal.hidden) openProject(i, false); else renderProject(i, false); }
    else closeModal(true);
  });

  grid.addEventListener('click', (e) => { const c = e.target.closest('.card'); if (c) openProject(+c.dataset.i); });
  modal.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) return closeModal();
    const nav = e.target.closest('[data-nav]'); if (nav) return renderProject(+nav.dataset.nav);
    const lb = e.target.closest('[data-lb]'); if (lb) openLightbox(projects[current].images, +lb.dataset.lb);
  });

  /* ---------- Lightbox ---------- */
  const lightbox = $('#lightbox'), lbImg = $('#lightbox-img'), lbCap = $('#lightbox-cap');
  let lbSet = [], lbIdx = 0;
  function showLb() {
    const im = lbSet[lbIdx];
    lbImg.src = im.src; lbImg.alt = im.alt || '';
    lbCap.textContent = im.caption || im.alt || '';
    lightbox.querySelectorAll('.lightbox__nav').forEach((b) => { b.style.visibility = lbSet.length > 1 ? '' : 'hidden'; });
  }
  function openLightbox(set, idx) { lbSet = set; lbIdx = idx; showLb(); lightbox.hidden = false; document.body.classList.add('no-scroll'); }
  function closeLightbox() { lightbox.hidden = true; if (modal.hidden) document.body.classList.remove('no-scroll'); }
  lightbox.addEventListener('click', (e) => {
    if (e.target.closest('[data-lb-close]') || e.target === lightbox) return closeLightbox();
    if (e.target.closest('[data-lb-prev]')) { lbIdx = (lbIdx - 1 + lbSet.length) % lbSet.length; showLb(); }
    if (e.target.closest('[data-lb-next]')) { lbIdx = (lbIdx + 1) % lbSet.length; showLb(); }
  });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.hidden) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') { lbIdx = (lbIdx - 1 + lbSet.length) % lbSet.length; showLb(); }
      if (e.key === 'ArrowRight') { lbIdx = (lbIdx + 1) % lbSet.length; showLb(); }
      return;
    }
    if (modal.hidden) return;
    if (e.key === 'Escape') return closeModal();
    if (e.key !== 'Tab') return;
    const f = [...modal.querySelectorAll('a[href], button, [tabindex]:not([tabindex="-1"])')].filter((n) => n.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  /* ---------- CAD gallery ---------- */
  const galleryItems = D.gallery.map((g) => {
    if (g.project) { // pull from a project by id + image index
      const p = projects.find((x) => x.id === g.project);
      const im = p && p.images[g.index ?? 0];
      return im ? { src: im.src, alt: im.alt, caption: g.caption || im.caption || im.alt, tool: g.tool, projectId: p.id } : null;
    }
    return g;
  }).filter(Boolean);
  $('#gallery').innerHTML = galleryItems.map((g, i) => `
    <figure class="reveal" data-g="${i}">
      <img src="${esc(g.src)}" alt="${esc(g.alt || g.caption || '')}" loading="lazy" decoding="async">
      <figcaption>${esc(g.caption || '')}${g.tool ? `<small>${esc(g.tool)}</small>` : ''}</figcaption>
    </figure>`).join('');
  $('#gallery').addEventListener('click', (e) => {
    const f = e.target.closest('[data-g]'); if (f) openLightbox(galleryItems, +f.dataset.g);
  });

  /* ---------- Experience ---------- */
  $('#timeline').innerHTML = D.experience.map((x) => `
    <li class="reveal">
      <div class="timeline__head">
        <h3>${esc(x.role)}</h3>
        <span class="timeline__org">${x.url ? `<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.org)}</a>` : esc(x.org)}</span>
        <span class="timeline__date">${esc(x.date)}</span>
      </div>
      <ul>${x.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
    </li>`).join('');

  /* ---------- Skills ---------- */
  $('#skills-grid').innerHTML = D.skills.map((g) => `
    <div class="skills__group reveal">
      <h3>${esc(g.group)}</h3>
      <div class="tags">${g.items.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
    </div>`).join('');

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((n) => io.observe(n));

  /* ---------- Deep link (#project-id) ---------- */
  function fromHash() {
    const id = location.hash.slice(1);
    const i = projects.findIndex((p) => p.id === id);
    if (i >= 0) openProject(i, false);
  }
  window.addEventListener('hashchange', fromHash);
  fromHash();
})();
