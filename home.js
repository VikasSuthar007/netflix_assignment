/*window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".overlay");

  console.log(overlay);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      overlay.classList.add("show");
    } else {
      overlay.classList.remove("show");
    }
  });
}); */

/*const overlay = document.querySelector(".CTA.sticky");

const faqSection = document.querySelector(".faq");

window.addEventListener("scroll", () => {
  const faqTop = faqSection.getBoundingClientRect().top;

  if (faqTop < window.innerHeight - 300) {
    overlay.classList.add("show");
  } else {
    overlay.classList.remove("show");
  }
});
*/

const cta = document.querySelector(".CTA.sticky");
const reasonSection = document.querySelector(".reason");
const bottomForm = document.querySelector(".bottom_form");

window.addEventListener("scroll", () => {
  const reasonTop = reasonSection.getBoundingClientRect().top;
  const bottomFormTop = bottomForm.getBoundingClientRect().top;

  const reasonInView = reasonTop < window.innerHeight - 100;
  const bottomFormInView = bottomFormTop < window.innerHeight - 100;

  if (reasonInView && !bottomFormInView) {
    cta.classList.add("show");
  } else {
    cta.classList.remove("show");
  }
});
