// Hero fade-in
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.getElementById('heroContent').classList.add('visible');
  }, 200);

  // Scroll animations
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var delay = entry.target.getAttribute('data-delay');
        if (delay) {
          entry.target.style.transitionDelay = delay + 'ms';
        }
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
    observer.observe(el);
  });
});
