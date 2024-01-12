document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll('.menu a');

    function onScroll() {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        var offset = window.innerHeight * 0.6;

        navLinks.forEach(function (navLink) {
            var targetDivId = navLink.getAttribute('href').substring(1);
            var targetDiv = document.getElementById(targetDivId);

            if (targetDiv) {
                var divTop = targetDiv.offsetTop;
                var divHeight = targetDiv.offsetHeight;

                if (scrollPosition >= divTop - offset && scrollPosition < divTop + divHeight - offset) {
                    navLinks.forEach(function (link) {
                        link.classList.remove('active');
                    });

                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', onScroll);

    onScroll();
});

document.addEventListener("DOMContentLoaded", function() {
const links = document.querySelectorAll('.menu li a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
        top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
        behavior: 'smooth'
    });

    // Close the menu if it's open (for mobile view)
    const toggleCheckbox = document.getElementById('menu-toggle');
    if (toggleCheckbox.checked) {
        toggleCheckbox.checked = false;
    }
    });
});
});

