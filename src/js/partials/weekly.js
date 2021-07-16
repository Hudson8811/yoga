if (document.querySelector(".weekly")) {
  const stickySidebar = () => {
    const stickyElement = document.querySelector(".part-wsidebar__sidebar--weekly");

    console.log(stickyElement);
    console.log(stickyElement.getBoundingClientRect().top);
  };

  stickySidebar();
}
