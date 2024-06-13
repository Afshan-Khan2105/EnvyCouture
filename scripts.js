document.addEventListener("DOMContentLoaded", function () {
  const cursorDot = document.querySelector(".cursor-dot");

  // Track cursor movement and update dot position
  document.addEventListener("mousemove", function (e) {
    cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
