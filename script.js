/* ═══════════════════════════════════════════════════════════════
   AHMED ALI WAJDAN — PORTFOLIO JAVASCRIPT
   ═══════════════════════════════════════════════════════════════

   HOW TO CONFIGURE YOUR PORTFOLIO
   ═══════════════════════════════
   Edit the CONFIG object below to set your personal details.
   All placeholder text and links in the site are driven by this
   single configuration object — no need to touch the HTML.

   ADDING A PHOTO:
     1. Place your photo at:  assets/images/ahmed.jpg
     2. Open index.html and find the two comment blocks labelled
        "Uncomment when you have a real photo" — uncomment them.

   ADDING PROJECTS:
     Add objects to CONFIG.projects following the existing format.
     Each project needs: title, category, desc, tags, demoUrl,
     githubUrl, and optionally imgSrc.

   ADDING CERTIFICATES:
     Add objects to CONFIG.certificates. Each needs: title, org,
     date, imgSrc (path to cert image), and optionally viewUrl.

   CONTACT FORM:
     The form currently shows a notice that a backend is required.
     To activate it, replace the submitForm() function body with
     a real fetch() call to Formspree, EmailJS, or your own API.
     Example Formspree endpoint:
       fetch('https://formspree.io/f/YOUR_FORM_ID', { method:'POST', ... })

   ═══════════════════════════════════════════════════════════════ */

/* ─── CONFIGURATION ──────────────────────────────────────────────── */
const CONFIG = {
  /* ── Identity ─────────────────────────────────────────────── */
  name:       'Ahmed Ali Wajdan',
  shortName:  'Ahmed',
  role:       'Web Developer',
  tagline:    'Building modern, responsive, and interactive digital experiences.',

  /* ── Contact ──────────────────────────────────────────────── */
  // Replace these with your real details
  email:       'aliwajdanbangash@gmail.com',
  githubUrl:   'https://github.com/aliwajdanbangash-spec',
  linkedinUrl: null,                   // e.g. 'https://linkedin.com/in/yourprofile'
  whatsapp:    '03139764213',
  instagramUrl:'https://instagram.com/ahmed_ali_wajdan',

  /* ── Projects ────────────────────────────────────────────── */
  // Replace placeholder URLs with your real repository / demo URLs.
  // imgSrc: path relative to index.html, e.g. 'assets/images/project1.jpg'
  //         Leave null to show a styled placeholder.
  projects: [
    {
      title:     'Personal Developer Portfolio',
      category:  'Portfolio Website',
      desc:      'A premium, animated personal portfolio built with HTML, CSS, and vanilla JavaScript — featuring cinematic design, smooth transitions, and a dark interface.',
      tags:      ['HTML5', 'CSS3', 'JavaScript'],
      imgSrc:    null,
      demoUrl:   null,   // Replace with your live URL
      githubUrl: null,   // Replace with your repository URL
    },
    {
      title:     'Business Website',
      category:  'Commercial Website',
      desc:      'A professional multi-page business website with responsive layout, contact form integration, and modern UI components.',
      tags:      ['HTML5', 'CSS3', 'JavaScript'],
      imgSrc:    null,
      demoUrl:   null,
      githubUrl: null,
    },
    {
      title:     'Transport Company Website',
      category:  'Industry Website',
      desc:      'A clean, informational website for a transport and logistics company — featuring service listings, a fleet gallery, and a booking enquiry section.',
      tags:      ['HTML5', 'CSS3', 'JavaScript'],
      imgSrc:    null,
      demoUrl:   null,
      githubUrl: null,
    },
    {
      title:     'JavaScript Interactive Project',
      category:  'Interactive Application',
      desc:      'A dynamic, interactive web application demonstrating core JavaScript concepts including DOM manipulation, event handling, and API integration.',
      tags:      ['JavaScript', 'HTML5', 'CSS3'],
      imgSrc:    null,
      demoUrl:   null,
      githubUrl: null,
    },
  ],

  /* ── Certificates ────────────────────────────────────────── */
  // imgSrc: path to certificate image, e.g. 'assets/images/cert-html.jpg'
  //         Leave null to show a styled placeholder.
  // viewUrl: external verification link (or null)
  certificates: [
    {
      title:   'Claude Code 101',
      org:     'Claude Academy',
      date:    'October 2026',
      imgSrc:  'assets/images/cert-claude-code.png',
      viewUrl: null,
    },
    {
      title:   'ReactJS for Beginners',
      org:     'Simplilearn SkillUP',
      date:    'September 2026',
      imgSrc:  'assets/images/cert-simplilearn-reactjs.png',
      viewUrl: null,
    },
    {
      title:   'Conversion Optimization Certification',
      org:     'Conversion Optimization',
      date:    'September 2026',
      imgSrc:  'assets/images/cert-conversion-optimization.png',
      viewUrl: null,
    },
    {
      title:   'Full-Stack Development 101',
      org:     'Simplilearn SkillUP',
      date:    'September 2026',
      imgSrc:  'assets/images/cert-fullstack-simplilearn.png',
      viewUrl: null,
    },
    {
      title:   '1 Million Prompters — Prompt Engineering',
      org:     'Dubai Future Foundation',
      date:    '2026',
      imgSrc:  'assets/images/cert-dubai-1million-prompters.png',
      viewUrl: null,
    },
    {
      title:   'Artificial Intelligence using Python',
      org:     'DigiSkills.pk (Ministry of IT & Telecom)',
      date:    'July 2026',
      imgSrc:  'assets/images/cert-digiskills-ai-python.png',
      viewUrl: 'https://digiskills.pk/verify',
    },
    {
      title:   'Freelancing',
      org:     'DigiSkills.pk (Ministry of IT & Telecom)',
      date:    'July 2026',
      imgSrc:  'assets/images/cert-digiskills-freelancing.png',
      viewUrl: 'https://digiskills.pk/verify',
    },
    {
      title:   'Personal Branding for Career Success',
      org:     'Deloitte WorldClass',
      date:    'September 2026',
      imgSrc:  'assets/images/cert-deloitte-personal-branding.png',
      viewUrl: null,
    },
    {
      title:   'Digital Literacy',
      org:     'Deloitte WorldClass',
      date:    'September 2026',
      imgSrc:  'assets/images/cert-deloitte-digital-literacy.png',
      viewUrl: null,
    },
    {
      title:   'Soft Skills Training',
      org:     'OEC & ICMPD',
      date:    'September 2026',
      imgSrc:  'assets/images/cert-icmpd-soft-skills.png',
      viewUrl: null,
    },
    {
      title:   'Web Development — JavaScript',
      org:     'Emerging Edge School of Technology',
      date:    'September 2026',
      imgSrc:  'assets/images/cert-javascript-eest.jpg',
      viewUrl: 'https://schoolEmergingedge.tech/verify',
    },
    {
      title:   'Web Development — HTML & CSS',
      org:     'Emerging Edge School of Technology',
      date:    'August 2026',
      imgSrc:  'assets/images/cert-html-css-eest.jpg',
      viewUrl: 'https://schoolEmergingedge.tech/verify',
    },
    {
      title:   'Artificial Intelligence — AI Launchpad',
      org:     'Emerging Edge School of Technology',
      date:    'September 2026',
      imgSrc:  'assets/images/cert-ai-launchpad-eest.jpg',
      viewUrl: 'https://schoolEmergingedge.tech/verify',
    },
  ],
};
/* ─────────────────────────────────────────────────────────────────
   END OF CONFIGURATION — Edit below only if customising behaviour
───────────────────────────────────────────────────────────────── */


/* ══════════════════════════════════════════════════════════════
   LOADING SCREEN
══════════════════════════════════════════════════════════════ */
(function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  const MIN_TIME = 1800; // ms — keep loader visible for at least this long
  const start = Date.now();

  window.addEventListener('load', () => {
    const elapsed = Date.now() - start;
    const remaining = Math.max(0, MIN_TIME - elapsed);

    setTimeout(() => {
      loader.classList.add('hidden');
      // Trigger hero animations after loader hides
      document.querySelectorAll('.reveal-text, .reveal-portrait').forEach(el => {
        el.classList.add('visible');
      });
      startCounters();
    }, remaining);
  });
})();


/* ══════════════════════════════════════════════════════════════
   CURSOR GLOW ANIMATION
══════════════════════════════════════════════════════════════ */
(function initCursor() {
  const glow = document.getElementById('cursorGlow');
  if (!glow || window.matchMedia('(hover: none)').matches) return;

  let mouseX = -500, mouseY = -500;
  let currentX = -500, currentY = -500;
  let isMoving = false;
  let hasMoved = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!hasMoved) {
      hasMoved = true;
      currentX = mouseX;
      currentY = mouseY;
      glow.style.opacity = '1';
    }

    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(animateCursor);
    }
  });

  document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    if (hasMoved) glow.style.opacity = '1';
  });

  function animateCursor() {
    const dx = mouseX - currentX;
    const dy = mouseY - currentY;
    currentX += dx * 0.14;
    currentY += dy * 0.14;

    glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

    if (Math.abs(dx) > 0.3 || Math.abs(dy) > 0.3) {
      requestAnimationFrame(animateCursor);
    } else {
      isMoving = false;
    }
  }
})();


/* ══════════════════════════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════════════════════════ */
(function initNav() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu= document.getElementById('mobileMenu');
  if (!navbar) return;

  /* Sticky scroll styling */
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Hamburger toggle */
  hamburger?.addEventListener('click', () => {
    const open = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!open));
    hamburger.classList.toggle('open', !open);
    mobileMenu?.classList.toggle('open', !open);
    document.body.style.overflow = !open ? 'hidden' : '';
  });

  /* Close mobile menu on link click */
  document.querySelectorAll('.mobile-link, .mobile-cta').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  function closeMobileMenu() {
    hamburger?.setAttribute('aria-expanded', 'false');
    hamburger?.classList.remove('open');
    mobileMenu?.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* Close mobile menu on Escape */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu();
  });

  /* Active nav link tracking */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(s => sectionObserver.observe(s));
})();


/* ══════════════════════════════════════════════════════════════
   SMOOTH SCROLLING (for all anchor links)
══════════════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 68;
    const top = target.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});


/* ══════════════════════════════════════════════════════════════
   SCROLL-TRIGGERED REVEAL
══════════════════════════════════════════════════════════════ */
(function initScrollReveal() {
  if (!('IntersectionObserver' in window)) {
    // Fallback: make everything visible immediately
    document.querySelectorAll('.scroll-reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // animate once
      }
    });
  }, { rootMargin: '0px 0px -80px 0px', threshold: 0.1 });

  document.querySelectorAll('.scroll-reveal').forEach(el => revealObserver.observe(el));
})();


/* ══════════════════════════════════════════════════════════════
   COUNTER ANIMATION (hero stats)
══════════════════════════════════════════════════════════════ */
function startCounters() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    if (prefersReduced) { el.textContent = target; return; }

    const duration = 1500;
    const start = performance.now();
    const easeOut = t => 1 - Math.pow(1 - t, 3);

    function update(now) {
      const t = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(easeOut(t) * target);
      if (t < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}


/* ══════════════════════════════════════════════════════════════
   PARALLAX — Cinematic section
══════════════════════════════════════════════════════════════ */
(function initParallax() {
  const target = document.querySelector('.parallax-target');
  if (!target) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const onScroll = () => {
    const rect = target.closest('.cinematic').getBoundingClientRect();
    const progress = -rect.top / (rect.height + window.innerHeight);
    const offset = progress * 80;
    target.style.transform = `translateY(${offset}px)`;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
})();


/* ══════════════════════════════════════════════════════════════
   BUILD PROJECTS GRID
══════════════════════════════════════════════════════════════ */
(function buildProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  // Update GitHub profile CTA
  const ghLink = document.getElementById('githubProfileLink');
  if (ghLink && CONFIG.githubUrl) {
    ghLink.href = CONFIG.githubUrl;
    ghLink.nextElementSibling?.remove(); // remove warning note
  }

  CONFIG.projects.forEach((project, i) => {
    const num = String(i + 1).padStart(2, '0');
    const card = document.createElement('article');
    card.className = 'project-card scroll-reveal';
    card.style.transitionDelay = `${(i % 3) * 0.1}s`;

    /* Image area */
    let imgHTML = '';
    if (project.imgSrc) {
      imgHTML = `<img src="${escapeAttr(project.imgSrc)}" alt="${escapeAttr(project.title)} screenshot" class="project-img" loading="lazy" />`;
    } else {
      imgHTML = `
        <div class="project-img-placeholder" aria-label="Project placeholder — add screenshot at ${project.imgSrc || 'assets/images/project' + (i + 1) + '.jpg'}">
          <span class="project-img-number">${num}</span>
          <span>ADD SCREENSHOT</span>
        </div>`;
    }

    /* Tags */
    const tagsHTML = project.tags.map(t => `<span class="project-tag">${escapeHTML(t)}</span>`).join('');

    /* Links */
    const demoLink = project.demoUrl
      ? `<a href="${escapeAttr(project.demoUrl)}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="Live demo for ${escapeAttr(project.title)}">LIVE DEMO ↗</a>`
      : `<span class="project-link" style="opacity:0.35;cursor:default;" aria-label="Live demo not yet configured">LIVE DEMO ↗</span>`;

    const repoLink = project.githubUrl
      ? `<a href="${escapeAttr(project.githubUrl)}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository for ${escapeAttr(project.title)}">GITHUB REPO ↗</a>`
      : `<span class="project-link" style="opacity:0.35;cursor:default;" aria-label="Repository not yet configured">GITHUB REPO ↗</span>`;

    card.innerHTML = `
      <div class="project-img-wrap">${imgHTML}</div>
      <div class="project-body">
        <p class="project-category">${escapeHTML(project.category)}</p>
        <h3 class="project-title">${escapeHTML(project.title)}</h3>
        <p class="project-desc">${escapeHTML(project.desc)}</p>
        <div class="project-tags">${tagsHTML}</div>
        <div class="project-links">${demoLink}${repoLink}</div>
      </div>`;

    grid.appendChild(card);
  });

  // Observe newly added cards
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });
    grid.querySelectorAll('.scroll-reveal').forEach(el => obs.observe(el));
  }
})();


/* ══════════════════════════════════════════════════════════════
   BUILD CERTIFICATES GRID
══════════════════════════════════════════════════════════════ */
(function buildCertificates() {
  const grid = document.getElementById('certsGrid');
  if (!grid) return;

  CONFIG.certificates.forEach((cert, i) => {
    const card = document.createElement('article');
    card.className = 'cert-card scroll-reveal';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View certificate: ${cert.title}`);
    card.style.transitionDelay = `${(i % 4) * 0.08}s`;

    const imgHTML = cert.imgSrc
      ? `<img src="${escapeAttr(cert.imgSrc)}" alt="Certificate: ${escapeAttr(cert.title)}" class="cert-img" loading="lazy" />`
      : `<div class="cert-img-placeholder" aria-hidden="true">
           <svg viewBox="0 0 80 60" fill="none">
             <rect x="4" y="4" width="72" height="52" rx="4" stroke="#FFD60A" stroke-width="1.5"/>
             <circle cx="40" cy="24" r="10" stroke="#FFD60A" stroke-width="1.5"/>
             <path d="M20 50c0-11 40-11 40 0" stroke="#FFD60A" stroke-width="1.5"/>
             <path d="M32 38l3 3 7-7" stroke="#C8FF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
         </div>`;

    card.innerHTML = `
      <div class="cert-img-wrap">${imgHTML}</div>
      <div class="cert-body">
        <p class="cert-org">${escapeHTML(cert.org)}</p>
        <h3 class="cert-title">${escapeHTML(cert.title)}</h3>
        ${cert.date ? `<p class="cert-date">Completed: ${escapeHTML(cert.date)}</p>` : ''}
        <span class="cert-cta">VIEW CERTIFICATE ↗</span>
      </div>`;

    /* Open modal on click or Enter/Space */
    const openModal = () => openCertModal(cert);
    card.addEventListener('click', openModal);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(); }
    });

    grid.appendChild(card);
  });

  // Observe newly added cards
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });
    grid.querySelectorAll('.scroll-reveal').forEach(el => obs.observe(el));
  }
})();


/* ══════════════════════════════════════════════════════════════
   CERTIFICATE MODAL
══════════════════════════════════════════════════════════════ */
const certModal = document.getElementById('certModal');
const modalClose = document.getElementById('modalClose');

function openCertModal(cert) {
  if (!certModal) return;

  const modalImg         = document.getElementById('modalImg');
  const modalPlaceholder = document.getElementById('modalPlaceholder');
  const modalTitle       = document.getElementById('modalTitle');
  const modalOrg         = document.getElementById('modalOrg');
  const modalDate        = document.getElementById('modalDate');
  const modalLink        = document.getElementById('modalLink');

  // Populate
  if (cert.imgSrc) {
    modalImg.src = cert.imgSrc;
    modalImg.alt = `Certificate: ${cert.title}`;
    modalImg.style.display = 'block';
    modalPlaceholder.style.display = 'none';
  } else {
    modalImg.src = '';
    modalImg.style.display = 'none';
    modalPlaceholder.style.display = 'flex';
  }

  modalTitle.textContent = cert.title;
  modalOrg.textContent   = cert.org;
  modalDate.textContent  = cert.date ? `Completed: ${cert.date}` : '';

  if (cert.viewUrl) {
    modalLink.href = cert.viewUrl;
    modalLink.style.display = 'inline-flex';
  } else {
    modalLink.style.display = 'none';
  }

  certModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  certModal.focus();
}

function closeCertModal() {
  certModal?.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose?.addEventListener('click', closeCertModal);

certModal?.addEventListener('click', (e) => {
  if (e.target === certModal) closeCertModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && certModal?.classList.contains('open')) closeCertModal();
});


/* ══════════════════════════════════════════════════════════════
   BUILD CONTACT SOCIALS + FOOTER SOCIALS
══════════════════════════════════════════════════════════════ */
(function buildSocials() {
  const githubSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`;
  const linkedinSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
  const emailSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;
  const whatsappSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`;
  const instagramSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`;

  const socials = [];

  if (CONFIG.email) {
    socials.push({ href: `mailto:${CONFIG.email}`, label: CONFIG.email, title: 'Email Me', icon: emailSVG });
  }
  if (CONFIG.whatsapp) {
    let waDigits = CONFIG.whatsapp.replace(/\D/g, '');
    if (waDigits.startsWith('0')) waDigits = '92' + waDigits.slice(1);
    else if (!waDigits.startsWith('92')) waDigits = '92' + waDigits;
    socials.push({ href: `https://wa.me/${waDigits}`, label: `WhatsApp: ${CONFIG.whatsapp}`, title: 'WhatsApp', icon: whatsappSVG });
  }
  if (CONFIG.githubUrl) {
    const ghUser = CONFIG.githubUrl.replace(/\/+$/, '').split('/').pop() || 'GitHub';
    socials.push({ href: CONFIG.githubUrl, label: `GitHub: ${ghUser}`, title: 'GitHub Profile', icon: githubSVG });
  }
  if (CONFIG.instagramUrl) {
    socials.push({ href: CONFIG.instagramUrl, label: 'Instagram: @ahmed_ali_wajdan', title: 'Instagram', icon: instagramSVG });
  }
  if (CONFIG.linkedinUrl) {
    socials.push({ href: CONFIG.linkedinUrl, label: 'LinkedIn Profile', title: 'LinkedIn', icon: linkedinSVG });
  }

  /* Placeholder links shown if nothing configured */
  const placeholders = [
    { label: '⚠ Set CONFIG.email in script.js',      icon: emailSVG },
    { label: '⚠ Set CONFIG.githubUrl in script.js',  icon: githubSVG },
  ];

  /* Contact section */
  const contactSocials = document.getElementById('contactSocials');
  if (contactSocials) {
    if (socials.length === 0) {
      placeholders.forEach(p => {
        const el = document.createElement('div');
        el.className = 'social-link';
        el.style.opacity = '0.4';
        el.innerHTML = `${p.icon}<span class="social-label">${p.label}</span>`;
        contactSocials.appendChild(el);
      });
    } else {
      socials.forEach(s => {
        const a = document.createElement('a');
        a.href = s.href;
        a.className = 'social-link';
        a.setAttribute('aria-label', s.title);
        if (!s.href.startsWith('mailto:')) {
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
        }
        a.innerHTML = `${s.icon}<span class="social-label">${escapeHTML(s.label)}</span>`;
        contactSocials.appendChild(a);
      });
    }
  }

  /* Footer social icons */
  const footerSocials = document.getElementById('footerSocials');
  if (footerSocials) {
    const footerItems = socials.length > 0 ? socials : placeholders;
    footerItems.forEach(s => {
      const el = s.href ? document.createElement('a') : document.createElement('span');
      el.className = 'footer-social-icon';
      if (s.href) {
        el.href = s.href;
        el.setAttribute('aria-label', s.title || s.label);
        if (!s.href.startsWith('mailto:')) {
          el.setAttribute('target', '_blank');
          el.setAttribute('rel', 'noopener noreferrer');
        }
      }
      if (!s.href) el.style.opacity = '0.3';
      el.innerHTML = s.icon;
      footerSocials.appendChild(el);
    });
  }
})();


/* ══════════════════════════════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════════════════════════════
   To activate real form submission:
   1. Sign up at https://formspree.io (free tier available)
   2. Create a new form and copy the endpoint URL
   3. Uncomment the fetch block below and replace YOUR_FORM_ID
   4. Remove or hide the .form-notice element in index.html
══════════════════════════════════════════════════════════════ */
(function initContactForm() {
  const form       = document.getElementById('contactForm');
  const submitBtn  = document.getElementById('formSubmit');
  const statusEl   = document.getElementById('formStatus');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;

    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    setStatus('Sending message...', 'info');

    const name = form.querySelector('#formName')?.value.trim() || '';
    const email = form.querySelector('#formEmail')?.value.trim() || '';
    const subject = form.querySelector('#formSubject')?.value.trim() || 'Project Inquiry';
    const message = form.querySelector('#formMessage')?.value.trim() || '';
    const recipient = CONFIG.email || 'aliwajdanbangash@gmail.com';

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: `New Message from ${name}: ${subject}`,
          message: message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok && (!data || data.success === 'true' || data.success === true || data.message)) {
        setStatus('✓ Message sent successfully! I will get back to you soon.', 'success');
        form.reset();
      } else {
        throw new Error(data?.message || 'Submission error');
      }
    } catch (err) {
      console.warn('Form submission encountered an issue, opening mail client fallback:', err);
      // Seamless mailto fallback so client message is never lost
      const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent('Project Inquiry: ' + subject)}&body=${encodeURIComponent(
        `Hi Ahmed,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus('✓ Opening your email client to send message to ' + recipient, 'success');
    } finally {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
    }
  });

  function validateForm(form) {
    let valid = true;
    const fields = form.querySelectorAll('input[required], textarea[required]');
    fields.forEach(field => {
      const err = field.nextElementSibling;
      if (!field.value.trim()) {
        field.classList.add('error');
        if (err) err.textContent = 'This field is required.';
        valid = false;
      } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        field.classList.add('error');
        if (err) err.textContent = 'Please enter a valid email address.';
        valid = false;
      } else {
        field.classList.remove('error');
        if (err) err.textContent = '';
      }
    });
    return valid;
  }

  /* Clear errors on input */
  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.remove('error');
      const err = field.nextElementSibling;
      if (err?.classList.contains('field-error')) err.textContent = '';
    });
  });

  function setStatus(msg, type) {
    statusEl.textContent = msg;
    statusEl.className = 'form-status ' + type;
  }
})();


/* ══════════════════════════════════════════════════════════════
   FOOTER YEAR
══════════════════════════════════════════════════════════════ */
const footerYear = document.getElementById('footerYear');
if (footerYear) footerYear.textContent = new Date().getFullYear();


/* ══════════════════════════════════════════════════════════════
   UTILITY FUNCTIONS
══════════════════════════════════════════════════════════════ */
function escapeHTML(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeAttr(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
