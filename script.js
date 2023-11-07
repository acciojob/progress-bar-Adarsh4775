//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const circles = document.querySelectorAll(".circle");
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");

  let currentCircle = 1;

  function updateButtons() {
    if (currentCircle === 1) {
      prevButton.disabled = true;
    } else if (currentCircle === circles.length) {
      nextButton.disabled = true;
    } else {
      prevButton.disabled = false;
      nextButton.disabled = false;
    }
  }

  function updateProgress() {
    circles.forEach((circle, index) => {
      if (index + 1 === currentCircle) {
        circle.classList.add("active");
      } else {
        circle.classList.remove("active");
      }
    });
  }

  nextButton.addEventListener("click", function () {
    if (currentCircle < circles.length) {
      currentCircle++;
      updateProgress();
      updateButtons();
    }
  });

  prevButton.addEventListener("click", function () {
    if (currentCircle > 1) {
      currentCircle--;
      updateProgress();
      updateButtons();
    }
  });

  updateButtons();
  updateProgress();
});
