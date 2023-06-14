var img = document.getElementById("gallery-img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

// if you have more images than me, type their names in here...
var images = ["hedgehog.jpg", "man.jpg"];

var currentimage = 0;

function changeimage(e) {
  if (e.target.id == "next" && currentimage !== images.length - 1) {
    // increment the images (in other words, go to the next one)
    currentimage = currentimage + 1;
  }

  if (e.target.id == "prev" && currentimage !== 0) {
    // logic goes in here
    currentimage = currentimage - 1;
  }

  img.setAttribute("src", "images/" + images[currentimage]);
}

prev.addEventListener("click", changeimage);
next.addEventListener("click", changeimage);
