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