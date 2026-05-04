// FAQ section toggle
document.querySelector('.faq-toggle').addEventListener('click', function(e) {
  e.preventDefault();
  var faq = document.getElementById('faq-section');
  faq.classList.toggle('open');
  this.innerHTML = faq.classList.contains('open')
    ? 'Close FAQ &uarr;'
    : 'Have a question? See our FAQ &darr;';
});

// Individual accordion items
document.querySelectorAll('.accordion-trigger').forEach(function(trigger) {
  trigger.addEventListener('click', function() {
    var content = this.nextElementSibling;
    var isOpen = content.classList.contains('open');
    document.querySelectorAll('.accordion-content').forEach(function(c) {
      c.classList.remove('open');
    });
    document.querySelectorAll('.accordion-trigger').forEach(function(t) {
      t.classList.remove('open');
    });
    if (!isOpen) {
      content.classList.add('open');
      this.classList.add('open');
    }
  });
});
