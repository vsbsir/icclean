document.querySelectorAll('.quote-toggle').forEach(function(button) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    var form = this.closest('section').nextElementSibling;
    var isOpen = form.style.display === 'block';
    // Close all open forms first
    document.querySelectorAll('.quote-form-section').forEach(function(f) {
      f.style.display = 'none';
    });
    // Open this one if it was closed
    if (!isOpen) {
      form.style.display = 'block';
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

document.querySelectorAll('.quote-close').forEach(function(button) {
  button.addEventListener('click', function() {
    this.closest('.quote-form-section').style.display = 'none';
  });
});
