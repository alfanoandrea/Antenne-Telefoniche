document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector('.navbar');
    var lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scorrimento verso il basso
            navbar.classList.add('hidden');
        } else {
            // Scorrimento verso l'alto
            navbar.classList.remove('hidden');
        }

        lastScrollTop = scrollTop;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    document.addEventListener('click', function(event) {
        var isClickInside = navbarToggler.contains(event.target) || navbarCollapse.contains(event.target);

        if (!isClickInside) {
            var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});