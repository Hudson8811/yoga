//вынес в additional.js

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".weekly")) {
    jQuery('.part-wsidebar__sidebar ').theiaStickySidebar({
      additionalMarginTop: 30,
      additionalMarginBottom: -30,
    });
  }
});
