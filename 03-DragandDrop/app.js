const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

function dragStart(e) {
  setTimeout(() => (e.target.className = "invisible"), 0);
}
function dragEnd(e) {
  //this.className = "fill";
  e.target.className = "fill";
}

function dragDrop(e) {
  e.target.className = "empty";
  e.target.append(fill);
}
function dragOver(e) {
  e.preventDefault();
}

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("drop", dragDrop);
}
