let moveToTop = document.getElementById("moveToTop");
let body = document.getElementById("body");
window.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    moveToTop.style.bottom = "10px";
  } else {
    moveToTop.style.bottom = "-100px";
  }
});
moveToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('section');

  function updateURLHash() {
    const visibleSection = Array.from(sections).find(section => {
      const rect = section.getBoundingClientRect();
      return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    });

    if (visibleSection) {
      const sectionId = visibleSection.id;
      if (window.location.hash !== `#${sectionId}`) {
        history.replaceState(null, null, `#${sectionId}`);
      }
    }
  }

  function handleScroll() {
    updateURLHash();
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      if (!section.hasAttribute('data-transitioned') && isVisible) {
        section.classList.toggle('section-visible', true);
        section.setAttribute('data-transitioned', '');
      }
    });
  }
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  updateURLHash();
  handleScroll();
});
