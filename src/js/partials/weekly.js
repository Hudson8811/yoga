if (document.querySelector(".weekly")) {
  const modal = document.querySelector(".modal");

  document.addEventListener("click", (event) => {
    const target = event.target;

    // Open modal on 'comments' click
    if (target.closest(".weekly-event__comments") && !modal.classList.contains("active")) {
      modal.classList.add("active");
      document.body.classList.add("js-body-noscroll");
    }

    // Close modal on 'close' click
    if (target.closest(".modal__close") && modal.classList.contains("active")) {
      modal.classList.remove("active");
      document.body.classList.remove("js-body-noscroll");
    }

    if (target.closest(".weekly-event__likes")) {
      target.closest(".weekly-event__likes").classList.toggle("liked");
    }
  });

  const stickySidebar = () => {
    const stickyElement = document.querySelector(".part-wsidebar__sidebar--weekly");

    console.log(stickyElement);
    console.log(stickyElement.getBoundingClientRect().top);
  };

  stickySidebar();
}
