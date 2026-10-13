(function(){
'use strict';
var root=document.documentElement;
if(matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver' in window)){root.classList.remove('js');return;}
var extra='.sc-head>div,.intro-grid>div,.sticky-copy,.connect-grid>div:first-child,.gc,.stat,.concept,.contact>div,.two>div,.eyebrow+h2';
document.querySelectorAll(extra).forEach(function(el){
  if(el.closest('.hero')||el.classList.contains('reveal-clip'))return;
  el.classList.add('reveal');
});
var io=new IntersectionObserver(function(es){es.forEach(function(e){
  if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}
});},{threshold:.12,rootMargin:'0px 0px -5% 0px'});
document.querySelectorAll('.reveal,.reveal-clip').forEach(function(el,i){
  var sibs=el.parentElement?Array.prototype.indexOf.call(el.parentElement.children,el):0;
  if(!el.style.getPropertyValue('--i'))el.style.setProperty('--i',Math.min(sibs,5));
  io.observe(el);
});
})();
