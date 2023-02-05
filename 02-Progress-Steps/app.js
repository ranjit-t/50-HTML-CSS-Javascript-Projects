const progress = document.querySelector(".progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
let reqWidth = 0;

next.addEventListener("click", () => {
  currentActive++;
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  reqWidth = (100 / (circles.length - 1)) * (currentActive - 1);

  //or reqWidth = 33.33 * (currentActive - 1);   // since in this case we have 4 ciricles and 3 progress bars so 100/3 = 33.33%
  progress.style.width = reqWidth + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

//or another technique
// function update() {
//   circles.forEach((circle, idx) => {
//     if (idx < currentActive) {
//       circle.classList.add("active");
//     } else {
//       circle.classList.remove("active");
//     }
//   });

//   const actives = document.querySelectorAll(".active");
//   progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

//   if (currentActive === 1) {
//     prev.disabled = true;
//   } else if (currentActive === circles.length) {
//     next.disabled = true;
//   } else {
//     prev.disabled = false;
//     next.disabled = false;
//   }
// }
