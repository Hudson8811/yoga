document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".article-template")) {
    document.addEventListener("click", (event) => {
      const target = event.target;

      // Text unwrapper
      if (target.closest(".js-review-unwrap")) {
        target.closest(".comments-item__text").classList.add("comments-item__text--open");
      }
    });
  }
});
