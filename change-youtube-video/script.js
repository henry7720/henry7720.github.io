const base = "https://www.youtube.com/embed/";
const params = "?autoplay=1&rel=0&modestbranding=1";
var outputVideo = document.getElementById("youtube-player");
var inputForm = document.getElementById("input-form");

inputForm.addEventListener("submit", function(e) {
  e.preventDefault();
  setVid(inputForm.value);
});
                           
function getVideoId(url) {
  try { var url = new URL(url); }
  catch (err) { return false; }
  if (url.hostname == "www.youtube.com" || url.hostname == "youtube.com") {
    var params = new URLSearchParams(url.search);
    if (params.has("v")) return params.get("v");
  }
  else if (url.hostname == "youtu.be") return url.pathname.substr(1);
  return false;
}

function setVid(id) {
  if (!getVideoId(id)) {
    if (id.length == 11) outputVideo.src = base + id + params;
    else {
      alert("Your input is not a valid YouTube video URL or ID!");
      outputVideo.src = base + "4fWyzwo1xg0" + params;
    }
  }
  else outputVideo.src = base + getVideoId(id) + params;
}
