function highlightAnswer() {
  var letters = document.getElementsByClassName("answer");
  for (var i = 0; i < letters.length; i++) {
    letters[i].style.backgroundColor = "#ff0";
  }
  document.getElementById("reminder").textContent = "There you go!";
}

function showReminder() {
  document.getElementById("reminder").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(showReminder, 15000);
});