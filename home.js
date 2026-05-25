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
