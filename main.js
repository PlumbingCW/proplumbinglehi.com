(function(){
var d=document,root=d.documentElement;
var btn=d.querySelector('.hamburger'),drawer=d.querySelector('.mob-drawer'),ov=d.querySelector('.mob-overlay'),cl=d.querySelector('.mob-drawer .close');
function setOpen(o){
  if(!drawer)return;
  drawer.classList.toggle('open',o);ov.classList.toggle('open',o);
  btn.setAttribute('aria-expanded',o?'true':'false');
  drawer.setAttribute('aria-hidden',o?'false':'true');
  root.style.overflow=o?'hidden':'';
  if(o&&cl)cl.focus();else if(!o&&btn)btn.focus();
}
if(btn){
  btn.addEventListener('click',function(){setOpen(!drawer.classList.contains('open'))});
  if(cl)cl.addEventListener('click',function(){setOpen(false)});
  ov.addEventListener('click',function(){setOpen(false)});
  d.addEventListener('keydown',function(e){if(e.key==='Escape'&&drawer.classList.contains('open'))setOpen(false)});
  window.addEventListener('resize',function(){if(window.innerWidth>768&&drawer.classList.contains('open'))setOpen(false)});
}
d.querySelectorAll('.faq-q').forEach(function(q){
  q.addEventListener('click',function(){
    var item=q.parentNode,a=item.querySelector('.faq-a'),open=item.classList.toggle('open');
    q.setAttribute('aria-expanded',open?'true':'false');
    a.style.maxHeight=open?a.scrollHeight+'px':'0px';
  });
});
})();
