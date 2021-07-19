if (document.querySelector(".weekly")) {
  // Modal
  const events = document.querySelector(".weekly-posts"),
    modal = document.querySelector(".modal");

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (target.closest(".weekly-event__comments") && !modal.classList.contains("active")) {
      modal.classList.add("active");
      document.body.classList.add("js-body-noscroll");
    }

    if (target.closest(".modal__close") && modal.classList.contains("active")) {
      modal.classList.remove("active");
      document.body.classList.remove("js-body-noscroll");
    }
  });

  const stickySidebar = () => {
    const stickyElement = document.querySelector(".part-wsidebar__sidebar--weekly");

    console.log(stickyElement);
    console.log(stickyElement.getBoundingClientRect().top);
  };

  stickySidebar();
}
