(function(){
  if(matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver' in window))return;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(!e.isIntersecting)return; io.unobserve(e.target);
    var el=e.target,to=+el.dataset.to,t0=performance.now();
    (function f(t){var k=Math.min(1,(t-t0)/1400);el.textContent=Math.round(to*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)})(t0);
  })},{threshold:.4});
  document.querySelectorAll('.n').forEach(function(n){io.observe(n)});
})();
