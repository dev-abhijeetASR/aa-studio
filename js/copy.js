(function(){
'use strict';
document.querySelectorAll('.copy').forEach(function(btn){
  btn.addEventListener('click',function(){
    var el=document.querySelector(btn.dataset.copy), text=el.textContent;
    function done(){btn.textContent='Copied';setTimeout(function(){btn.textContent='Copy'},1500)}
    function fallback(){var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);btn.textContent='Selected';setTimeout(function(){btn.textContent='Copy'},1500)}
    try{navigator.clipboard.writeText(text).then(done,fallback)}catch(e){fallback()}
  });
});
})();
