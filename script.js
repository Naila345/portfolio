const toggler = document.querySelector(".toggler");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-item");

// show and hide navbar in mobile
toggler.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});

// add active class on click to nav-items
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((i) => i.classList.remove("nav-item-active"));
    this.classList.add("nav-item-active");

    navLinks.classList.toggle("nav-active");
  });
});
const projectsTabBtns = document.querySelectorAll(".projects-tab-btn");
const projectsItems = document.querySelectorAll(".projects-item");

// filter projects
projectsTabBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    projectsTabBtns.forEach((btn) =>
      btn.classList.remove("projects-tab-btn-active")
    );

    this.classList.add("projects-tab-btn-active");

    projectsItems.forEach((item) => {
      if (item.classList.contains(btn.id)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});
// Get all the buttons and video elements
const buttons = document.querySelectorAll(".projects-tab-btn");
const videos = document.querySelectorAll(".projects-item");

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener("click", function() {
    // Remove active class from all buttons and add it to the clicked button
    buttons.forEach(btn => btn.classList.remove("projects-tab-btn-active"));
    this.classList.add("projects-tab-btn-active");

    // Get the category from the clicked button's ID
    const category = this.id;

    // Show or hide videos based on category
    videos.forEach(video => {
      if (category === "all") {
        video.style.display = "block"; // Show all videos
      } else {
        if (video.classList.contains(category)) {
          video.style.display = "block"; // Show videos matching the category
        } else {
          video.style.display = "none"; // Hide videos not in the category
        }
      }
    });
  });
});
