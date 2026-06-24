$(function(){
  // navbar effect
  const $nav = $('.navbar');
  const check = () => $(window).scrollTop() > 50 ? $nav.addClass('navbar-scrolled') : $nav.removeClass('navbar-scrolled');
  check(); $(window).on('scroll', check);

  // tooltips
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));

  // form validation simple
  $('#contactForm').on('submit', function(e){
    e.preventDefault(); e.stopPropagation();
    if (!this.checkValidity()){ $(this).addClass('was-validated'); return; }
    const name = $('#inputName').val().trim();
    alert(`Gracias ${name}. Mensaje enviado.`);
    this.reset(); $(this).removeClass('was-validated');
  });

  // cerrar collapse en móviles
  $('.nav-link').on('click', function(){ const $c = $('.navbar-collapse'); if ($c.hasClass('show')) bootstrap.Collapse.getInstance($c[0]).hide(); });
});
