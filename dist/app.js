const query = new URLSearchParams(window.location.search);
if (query.toString()) {
  for (const link of document.querySelectorAll('[data-forward-query]')) {
    const target = new URL(link.href);
    for (const [key, value] of query) target.searchParams.append(key, value);
    link.href = target.toString();
  }
}

// Content remains visible if the motion library cannot load.
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    gsap.from('.hero-copy > *', {y:18, opacity:0, duration:.8, stagger:.1, ease:'power2.out'});
    gsap.from('.hero-photo img', {scale:1.08, duration:1.3, ease:'power2.out'});
    for (const section of document.querySelectorAll('.section')) {
      gsap.from(section, {y:22, opacity:.4, duration:.7, ease:'power2.out', scrollTrigger:{trigger:section,start:'top 90%',once:true}});
    }
    gsap.fromTo('.thought > p', {opacity:.45}, {opacity:1, scrollTrigger:{trigger:'.thought',start:'top 85%',end:'top 45%',scrub:true}});
  });
}
