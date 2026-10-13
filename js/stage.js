(function(){
'use strict';
var stage=document.getElementById('web-stage');
if(!stage)return;
var buttons=document.querySelectorAll('.seg button');
buttons.forEach(function(b){
  b.addEventListener('click',function(){
    stage.dataset.view=b.dataset.view;
    buttons.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});
  });
});
})();
