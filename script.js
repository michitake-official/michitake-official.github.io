// Hamburger
  const hb = document.getElementById('hamburger');
  const mm = document.getElementById('mobileMenu');
  hb.addEventListener('click', () => {
    hb.classList.toggle('open');
    mm.classList.toggle('open');
    document.body.style.overflow = mm.classList.contains('open') ? 'hidden' : '';
  });
  mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    hb.classList.remove('open'); mm.classList.remove('open'); document.body.style.overflow = '';
  }));

  // Reveal on scroll
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));