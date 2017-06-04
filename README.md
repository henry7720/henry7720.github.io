<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<meta name="description" content="8-ball! Simple JavaScript Practice.">
<meta name="keywords" content="Random, JavaScript, PHP, HTML, Practice, 8-ball, 8ball, Magic">
<meta name="author" content="Henry's Projects">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>8-Ball</title>
<style>
body {
  background-color: black;
  font-family: 'courier new';
}
.yellow {
  font-family: 'courier new';
  font-weight: bold;
  color: #FFFF00;
}
.red {
  font-family: 'courier new';
  font-weight: bold;
  color: #FF0000;
}
.green { 
  font-family: 'courier new';
  font-weight: bold;
  color: #008000;
}
h1, .h2 {
  color: #FFFFFF;
  font-family: 'courier new';
}
p, h2 {
  color: #FFFFFF;
  font-family: 'courier new';
  line-height: 150%;
  font-weight: bold;
}
button {
  display: inline-block;
  cursor: pointer;
  border-radius: 8px;
  background-color: #FFFFFF;
  border-color: #B5B5B5;
  font-size: 14pt;
}
button:hover {
  cursor: pointer;
  background-color: #595959;
  border-color: #FFFFFF;
  color: #EDEDED;
}
</style>
</head>
<body>
<h1>8-Ball</h1>
<p>These are the normal answers you'd expect from an 8-ball! <br>Ask a yes or no question and click: <button onclick="response();">Get Answer!</button> for an answer.</p>
<h2 class="h2" id="response">Click "Get Answer!", your answer will appear here.</h2>
<script>
function response() {
    "use strict";
    var randnum = Math.floor((Math.random() * 20) + 1);
    //8-ball Icosahedron Answers
    if (randnum === 1) {
      document.getElementById("response").setAttribute("class", "green");
      document.getElementById("response").innerHTML = "Signs point to yes.";
    }
    if (randnum === 2) {
      document.getElementById("response").setAttribute("class", "green");
      document.getElementById("response").innerHTML = "Yes.";
    }
    if (randnum === 3) {
      document.getElementById("response").setAttribute("class", "yellow");
      document.getElementById("response").innerHTML = "Reply hazy, try again.";
    }
    if (randnum === 4) {
      document.getElementById("response").setAttribute("class", "green");
      document.getElementById("response").innerHTML = "Without a doubt.";
    }
    if (randnum === 5) {
      document.getElementById("response").setAttribute("class", "red");
      document.getElementById("response").innerHTML = "My sources say no.";
    }
    if (randnum === 6) {
      document.getElementById("response").setAttribute("class", "green");
      document.getElementById("response").innerHTML = "As I see it, yes.";
    }
    if (randnum === 7) {
      document.getElementById("response").setAttribute("class", "green");
      document.getElementById("response").innerHTML = "You may rely on it.";
    }
    if (randnum === 8) {
      document.getElementById("response").setAttribute("class", "yellow");
      document.getElementById("response").innerHTML = "Concentrate and ask again.";
    }
    if (randnum === 9) {
      document.getElementById("response").setAttribute("class", "yellow");
      document.getElementById("response").innerHTML = "Outlook not so good.";
    }
    if (randnum === 10) {
      document.getElementById("response").setAttribute("class", "green");
      document.getElementById("response").innerHTML = "It is decidedly so.";
    }
    if (randnum === 11) {
      document.getElementById("response").setAttribute("class", "yellow");
      document.getElementById("response").innerHTML = "Better not tell you now.";
    }
    if (randnum === 12) {
      document.getElementById("response").setAttribute("class", "red");
      document.getElementById("response").innerHTML = "Very doubtful.";
    }
    if (randnum === 13) {
      document.getElementById("response").setAttribute("class", "green");
      document.getElementById("response").innerHTML = "Yes - definitely.";
    }
    if (randnum === 14) {
      document.getElementById("response").setAttribute("class", "green");
      document.getElementById("response").innerHTML = "It is certain.";
    }
    if (randnum === 15) {
      document.getElementById("response").setAttribute("class", "yellow");
      document.getElementById("response").innerHTML = "Cannot predict now.";
    }
    if (randnum === 16) {
      document.getElementById("response").setAttribute("class", "green");
      document.getElementById("response").innerHTML = "Most likely.";
    }
    if (randnum === 17) {
      document.getElementById("response").setAttribute("class", "yellow");
      document.getElementById("response").innerHTML = "Ask again later.";
    }
    if (randnum === 18) {
      document.getElementById("response").setAttribute("class", "red");
      document.getElementById("response").innerHTML = "My reply is no.";
    }
    if (randnum === 19) {
      document.getElementById("response").setAttribute("class", "green");
      document.getElementById("response").innerHTML = "Outlook good.";
    } 
    if (randnum === 20) {
      document.getElementById("response").setAttribute("class", "yellow");
      document.getElementById("response").innerHTML = "Don't count on it.";
    }
}
</script>
</body>
</html>
