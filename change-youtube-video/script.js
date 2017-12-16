const out = document.getElementById("vid");
const inp = document.getElementById("form");
const base = "https://www.youtube.com/embed/";
const params = "?autoplay=1&rel=0&modestbranding=1";

// Dual function (no need for 2)...
function setVid(id) {
  if (id.length != 11 && id == inp.value) {
    out.src = base + "4fWyzwo1xg0" + params;
    alert("Your input must have exactly 11 characters!");
  } 
  else if (id.length != 11) {
    out.src = base + "4fWyzwo1xg0" + params;
    alert("The developer made a mistake in the code!\nContact him about the issue at henry.trowbridge2@gmail.com.");
  }
  else {
    out.src = base + id + params;
  }
}

/* Old functions
function setVid(id) {
  if (id.length != 11) {
    out.src = base + "4fWyzwo1xg0" + params;
    alert("The developer made a mistake in the code!\nContact him about the issue at henry.trowbridge2@gmail.com.");
  } 
  else {
    out.src = base + id + params;
  }
}

function changeVid() {
  if (inp.value.length != 11) {
    out.src = base + "4fWyzwo1xg0" + params;
    alert("Your input must have exactly 11 characters!");
  } 
  else {
    out.src = base + inp.value + params;
  }
} 
*/

function showVidId() {
  document.getElementById("showtutorial").style.display = "none";
  document.getElementById("tutorial").style.display = "block";
}