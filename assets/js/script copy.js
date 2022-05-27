var score = 0;
var time = 120;
var initials = "";
var btn1 = document.querySelector("#btn1");
var btn2 = "";
var btn3 = "";

var questions = [
    {
        text: "Question 1", 
        options: [
            "Answer 1.1",
            "Answer 1.2",
            "Answer 1.3"
        ],
        correct: "Answer 1.1"
    },
    {
        text: "Question 2", 
        options: [
            "Answer 2.1",
            "Answer 2.2",
            "Answer 2.3"
        ],
        correct: "Answer 2.2"
    },
    {
        text: "Question 3", 
        options: [
            "Answer 3.1",
            "Answer 3.2",
            "Answer 3.3"
        ],
        correct: "Answer 3.3"
    }
];


var beginQuiz = function () {
    timer();

    document.getElementById("h2").innerHTML = "Question 1";
    btn1.innerHTML = "Answer 1.1";

    btn1.removeEventListener("click", beginQuiz);


    btn2 = document.createElement("button");
    btn2.innerHTML = "Answer 1.2";
    document.getElementById("section").appendChild(btn2);

    btn3 = document.createElement("button");
    btn3.innerHTML = "Answer 1.3";
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

var timer = function() {
    setInterval(function(){
        document.getElementById("timer").innerHTML="Seconds remaining: " + time; time--;
        if (time <= 0) {
            endQuiz();
        }
    }, 1000);
};

var question2 = function () {
    
    document.getElementById("h2").innerHTML = "Question 2";
    btn1.innerHTML = "Answer 2.1";
    btn2.innerHTML = "Answer 2.2";
    btn3.innerHTML = "Answer 2.3";


    btn1.removeEventListener("click", function() {
        score = score + 20;
        question2();
    });

    btn2.removeEventListener("click", function(){
        time = time - 10;
        question2();
    });

    btn3.removeEventListener("click", function(){
        time = time - 10;
        question2();
    });

    
    btn1.addEventListener("click", function() {
        time = time - 10;
        question3();
    });

    btn2.addEventListener("click", function(){
        score = score + 20;
        question3();
    });    
    
    btn3.addEventListener("click", function() {
        time = time - 10;
        question3();
    });
};

var question3 = function () {
    
    document.getElementById("h2").innerHTML = "Question 3";
    btn1.innerHTML = "Answer 3.1";
    btn2.innerHTML = "Answer 3.2";
    btn3.innerHTML = "Answer 3.3";


    btn1.removeEventListener("click", function() {
        time = time - 10;
        question3();
    });

    btn2.removeEventListener("click", function(){
        score = score + 20;
        question3();
    });

    btn3.removeEventListener("click", function(){
        time = time - 10;
        question3();
    });

    
    btn1.addEventListener("click", function() {
        time = time - 10;
        endQuiz();
    });

    btn2.addEventListener("click", function(){
        time = time - 10;
        endQuiz();
    });    
    
    btn3.addEventListener("click", function() {
        score = score + 20;
        endQuiz();
    });
};

var endQuiz = function () {
    

    document.getElementById("h2").innerHTML = "Quiz is finished. Enter your initials to log your score.";



};


btn1.addEventListener("click", beginQuiz);