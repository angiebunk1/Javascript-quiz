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

    btn1.addEventListener("click", function() {
        score = score + 20;
        question2();
    });

    btn2.addEventListener("click", function(){
        time = time - 10;
        question2();
    });

    btn3.addEventListener("click", function(){
        time = time - 10;
        question2();
    });
    
};


var btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", beginQuiz);