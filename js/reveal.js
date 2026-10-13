(function(){
'use strict';
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(reduce||!('IntersectionObserver' in window)){document.documentElement.classList.remove('js');return;}
var sel='.stat,.card,.mini,.pstep,.chip-group,.tech-grid>div,.tablewrap,.row,section h2,section .lead,.eng h3';
var items=document.querySelectorAll(sel);
var io=new IntersectionObserver(function(es){es.forEach(function(e){
  if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}
});},{threshold:.15,rootMargin:'0px 0px -6% 0px'});
items.forEach(function(el){
  if(el.closest('.hero'))return;
  var sibs=el.parentElement?Array.prototype.indexOf.call(el.parentElement.children,el):0;
  el.style.setProperty('--i',Math.min(sibs,6));
  el.classList.add('reveal');io.observe(el);
});
})();
