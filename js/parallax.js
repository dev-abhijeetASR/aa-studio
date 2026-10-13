(function(){
'use strict';
if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;

/* pointer parallax on the hero product composition */
var stage=document.querySelector('.hero-stage');
if(stage&&matchMedia('(hover:hover)').matches){
  stage.querySelectorAll('[data-depth]').forEach(function(el){el.style.setProperty('--d',el.dataset.depth);});
  var host=stage.closest('.hero');
  host.addEventListener('pointermove',function(e){
    var r=host.getBoundingClientRect();
    stage.style.setProperty('--mx',(((e.clientX-r.left)/r.width)-.5)*-2);
    stage.style.setProperty('--my',(((e.clientY-r.top)/r.height)-.5)*-2);
  });
  host.addEventListener('pointerleave',function(){stage.style.setProperty('--mx',0);stage.style.setProperty('--my',0);});
}

/* scroll parallax on selected devices */
var items=Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
if(!items.length||!('IntersectionObserver' in window))return;
var live=new Set(),ticking=false;
function update(){
  ticking=false;
  var vh=innerHeight;
  live.forEach(function(el){
    var r=el.getBoundingClientRect(),c=r.top+r.height/2-vh/2,k=parseFloat(el.dataset.parallax)||0;
    el.style.setProperty('--py',Math.max(-90,Math.min(90,c*k)).toFixed(1)+'px');
  });
}
function req(){if(!ticking){ticking=true;requestAnimationFrame(update);}}
var io=new IntersectionObserver(function(es){es.forEach(function(e){
  if(e.isIntersecting)live.add(e.target);else live.delete(e.target);
});req();},{rootMargin:'120px 0px'});
items.forEach(function(el){io.observe(el);});
addEventListener('scroll',req,{passive:true});
addEventListener('resize',req);
})();
