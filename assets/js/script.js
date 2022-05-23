var score = 0;
var time = 120;
var initials = "";



var beginQuiz = function () {
    document.getElementById("h2").innerHTML = "Question 1";
    document.getElementById("btn1").innerHTML = "Answer 1";

    var btn2 = document.createElement("button");
    btn2.innerHTML = "Answer 2";
    document.getElementById("section").appendChild(btn2);

    var btn3 = document.createElement("button");
    btn3.innerHTML = "Answer 3";
    document.getElementById("section").appendChild(btn3);


}

var beginBtn = document.querySelector("#btn1");




beginBtn.addEventListener("click", beginQuiz);