// Replace the empty strings below with your real public URLs before publishing.
const REPS_LINKS = {
  appStore: '', // e.g. https://apps.apple.com/au/app/your-app/id123456789
  youtube: 'https://www.youtube.com/channel/UCZ26pVyEe-yMoI_5SZRLh7A' // Official channel
};
document.querySelectorAll('[data-link]').forEach(link => {
  const type=link.dataset.link;
  const url=REPS_LINKS[type];
  if(url && /^https:\/\//.test(url)) { link.href=url;link.target='_blank';link.rel='noopener noreferrer'; }
  else {link.addEventListener('click',event=>{event.preventDefault();const note=document.querySelector('#link-status');if(note){note.textContent=`${type==='appStore'?'App Store':'YouTube'} link will be added before launch.`;note.scrollIntoView({behavior:'smooth',block:'center'});}else{alert('This link will be added before launch.');}});}
});
const y=document.querySelector('#year'); if(y)y.textContent=new Date().getFullYear();

// Subtle on-scroll reveals; never hide content for reduced-motion users.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
 const targets = document.querySelectorAll('.section-head, .feature-card, .pro-feature, .membership-panel, .contact-layout, .gallery figure, .cta-inner');
 const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
   if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target);}
 }),{threshold:0.09,rootMargin:'0px 0px 28px 0px'});
 targets.forEach(el=>{el.classList.add('reveal-ready');observer.observe(el);});
}
