(function() {
  var nav = document.getElementById('sticky-nav');
  var hero = document.querySelector('.banner');

  if (!nav || !hero) return;

  function onScroll() {
    var heroBottom = hero.offsetTop + hero.offsetHeight;
    if (window.scrollY > heroBottom - 100) {
      nav.classList.add('visible');
    } else {
      nav.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  document.querySelectorAll('.sticky-nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        var offset = 60;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

})();
