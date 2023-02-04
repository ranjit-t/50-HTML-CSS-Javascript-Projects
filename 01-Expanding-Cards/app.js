const cards = document.querySelector("#cards");
const images = document.querySelectorAll("img");

cards.addEventListener("click", (evt) => {
  if (evt.target.nodeName !== "IMG") {
    //to make sure width only increases or decreases when clicked on image but not anywhere else between images
    return;
  }
  for (image of images) {
    image.classList.remove("full-image");
  }
  evt.target.classList.add("full-image");
});
