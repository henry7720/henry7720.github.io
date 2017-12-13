const out = document.getElementById("vid");
const inp = document.getElementById("form");
const base = "https://www.youtube.com/embed/";
const params = "?autoplay=1&rel=0&modestbranding=1";

function changeVid() {
  if (inp.value.length != 11) {
    out.src = base + "4fWyzwo1xg0" + params;
    alert("Your input must have exactly 11 characters!");
  } else {
    out.src = base + inp.value + params;
  }
}

function setVid(id) {
  if (id.length != 11) {
    out.src = base + "4fWyzwo1xg0" + params;
    alert("The developer made a mistake in the code!\nEmail him at henry.trowbridge2@gmail.com.");
  } else {
    out.src = base + id + params;
  }
}

function showVidId() {
  document.getElementById("showtutorial").style.display = "none";
  document.getElementById("tutorial").style.display = "block";
}