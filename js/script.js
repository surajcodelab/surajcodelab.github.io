document.addEventListener('DOMContentLoaded',()=>{
 const nav=document.getElementById('mainNav');
 const links=[...document.querySelectorAll('.nav-link')];
 const sections=[...document.querySelectorAll('header[id],section[id]')];
 const revealItems=[...document.querySelectorAll('.reveal')];
 const glow=document.querySelector('.cursor-glow');

 const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('show');});
 },{threshold:.12});
 revealItems.forEach((el,i)=>{el.style.transitionDelay=(Math.min(i%5,4)*70)+'ms';observer.observe(el);});

 const onScroll=()=>{
   nav.classList.toggle('scrolled',window.scrollY>40);
   let current='home';
   sections.forEach(section=>{if(window.scrollY>=section.offsetTop-180) current=section.id;});
   links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+current));
 };
 window.addEventListener('scroll',onScroll,{passive:true}); onScroll();

 links.forEach(link=>link.addEventListener('click',()=>{
   const menu=document.getElementById('navMenu');
   if(menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
 }));

 if(glow && window.matchMedia('(pointer:fine)').matches){
   window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';},{passive:true});
 }

 const form=document.getElementById('contactForm');
 const status=document.getElementById('formStatus');
 const btn=document.getElementById('sendBtn');
 const reply=document.getElementById('replyTo');

 form?.addEventListener('submit',async e=>{
   e.preventDefault();
   if(reply) reply.value=document.getElementById('email').value;
   status.className='form-status'; status.textContent='Sending your message...';
   btn.disabled=true; btn.querySelector('span').textContent='Sending...';
   try{
     const response=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
     if(response.ok){
       form.reset();
       status.className='form-status success';
       status.textContent='✓ Message sent successfully. Thank you for contacting me!';
     }else{
       const data=await response.json().catch(()=>({}));
       throw new Error(data?.errors?.[0]?.message||'Unable to send');
     }
   }catch(error){
     status.className='form-status error';
     status.textContent='Could not send right now. Please email surajshinde1016@gmail.com directly.';
   }finally{
     btn.disabled=false; btn.querySelector('span').textContent='Send message';
   }
 });
});