document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbarNav');
  if (!navbar) return;

  let collapse = bootstrap.Collapse.getInstance(navbar);

  navbar.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth >= 992) return;

      if (!collapse) {
        collapse = new bootstrap.Collapse(navbar, { toggle: false });
      }
      collapse.hide();
    });
  });
});
