// Basic site JS: smooth scroll, mobile menu helper, form guard
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });

  // Prevent submitting forms without action (inform user)
  document.querySelectorAll('form').forEach(function(f){
    f.addEventListener('submit', function(e){
      var act = (f.getAttribute('action')||'').trim();
      if(!act){
        e.preventDefault();
        alert('This form currently has no submission endpoint. Please add Formspree or Netlify Forms to enable.');
      }
    });
  });
});
