const button = document.querySelector(".back-to-top");
const footer = document.querySelector("footer");

if (button) {
  let footerVisible = false;

  function updateButton() {
    button.classList.toggle(
      "visible",
      window.scrollY > 200 && !footerVisible
    );
  }

  window.addEventListener("scroll", updateButton);
  updateButton();

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  if (footer) {
    const observer = new IntersectionObserver(([entry]) => {
      footerVisible = entry.isIntersecting;
      updateButton();
    });

    observer.observe(footer);
  }
}