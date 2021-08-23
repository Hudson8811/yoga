//вынес в additional.js

document.addEventListener("DOMContentLoaded", () => {
	jQuery('.part-wsidebar__sidebar ').theiaStickySidebar({
		additionalMarginTop: 30,
		additionalMarginBottom: -30,
	});
});
