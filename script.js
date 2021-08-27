let index = 0;
let image = document.getElementsByClassName("images");
let dots = document.getElementsByClassName("dot");

function showImage(input) {
  index = index + input;
  for (i = 0; i < image.length; i++) {
    image[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (index > image.length - 1) {
    index = 0;
  }
  if (index < 0) {
    index = image.length - 1;
  }
  image[index].style.display = "block";
  dots[index].className += " active";
}

window.addEventListener("onload", showImage(index));
