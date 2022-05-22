var score = 0;
var time = 120;
var initials = "";

console.dir(window.document);


var beginQuiz = function () {
    document.getElementById("h2").innerHTML = "Question 1";
}

var beginBtn = document.querySelector("#btn1");

beginBtn.addEventListener("click", beginQuiz);