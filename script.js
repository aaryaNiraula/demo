// Smooth scrolling for navbar links
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact Form Alert
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message Sent Successfully!");
});

// Project Box Click (optional)
document.querySelectorAll(".project-boxes .box").forEach((box, index) => {
  box.addEventListener("click", () => {
    alert("Project " + (index + 1) + " Clicked!");
  });
});
