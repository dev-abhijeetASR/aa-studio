(function(){
'use strict';
var btn=document.getElementById('menu-btn'),links=document.getElementById('site-links');
if(btn&&links){
  function set(open){links.dataset.open=open;btn.setAttribute('aria-expanded',open);btn.setAttribute('aria-label',open?'Close menu':'Open menu');}
  btn.addEventListener('click',function(){set(links.dataset.open!=='true');});
  links.addEventListener('click',function(e){if(e.target.closest('a'))set(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&links.dataset.open==='true'){set(false);btn.focus();}});
}
if(!('IntersectionObserver' in window))return;
var anchors={};
document.querySelectorAll('#site-links a').forEach(function(a){anchors[a.getAttribute('href').slice(1)]=a;});
var io=new IntersectionObserver(function(es){es.forEach(function(e){
  if(!e.isIntersecting)return;
  Object.keys(anchors).forEach(function(k){anchors[k].removeAttribute('aria-current');});
  var a=anchors[e.target.id];if(a)a.setAttribute('aria-current','true');
});},{rootMargin:'-45% 0px -50% 0px'});
Object.keys(anchors).forEach(function(id){var el=document.getElementById(id);if(el)io.observe(el);});
})();
