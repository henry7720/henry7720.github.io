const out = document.getElementById("vid");
const inp = document.getElementById("form");
const base = "https://www.youtube.com/embed/";
const params = "?autoplay=1&rel=0&modestbranding=1";

function getYouTubeVideoId(url) {
  try { var url = new URL(url); }
  catch (err) { return false; }
  if (url.hostname == "www.youtube.com" || url.hostname == "youtube.com") {
    var params = new URLSearchParams(url.search);
    if (params.has("v")) return params.get("v");
  }
  else if (url.hostname == "youtu.be") return url.pathname.substr(1);
  return false;
}

function setVid(youTubeUrlOrId) {
  if (!getYouTubeVideoId(youTubeUrlOrId)) {
    if (youTubeUrlOrId.length == 11) out.src = base + youTubeUrlOrId + params;
    else {
        alert("Your input is not a valid YouTube video URL or ID!");
        out.src = base + "4fWyzwo1xg0" + params;
    }
  }
  else out.src = base + getYouTubeVideoId(youTubeUrlOrId) + params;
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