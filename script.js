/* script.js */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", (e) => {
          e.preventDefault();
          document.querySelector(link.getAttribute("href")).scrollIntoView({
              behavior: "smooth"
          });
      });
  });
});
