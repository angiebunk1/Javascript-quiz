var score = 0;

var btn1 = "";
var btn2 = "";
var btn3 = "";
var initialsForm = "";
var enterText = "";
var index = 0;
var startBtn = document.querySelector("#startBtn");
var submitBtn = "";



var winners = [];

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


var beginQuiz = function() {
    timer();

    startBtn.style.display = "none";

    btn1 = document.createElement("button");
    document.getElementById("section").appendChild(btn1);

    btn2 = document.createElement("button");
    document.getElementById("section").appendChild(btn2);

    btn3 = document.createElement("button");
    document.getElementById("section").appendChild(btn3);

   changeQuestion();

    
};



var time = "";



var timer = function() {

setInterval(function() { 
    if(time <= 0) {
        endQuiz();
    } ; 
       
    document.getElementById("seconds").innerHTML = time; time--;        
    }, 1000);
    
 };

var changeQuestion = function() {
    
    document.getElementById("h2").innerHTML = questions[index].text;

    btn1.innerHTML = questions[index].options[0];
    btn2.innerHTML = questions[index].options[1];
    btn3.innerHTML = questions[index].options[2];

    
    btn1.addEventListener("click", checkAnswer);

    btn2.addEventListener("click", checkAnswer);
    
    btn3.addEventListener("click", checkAnswer);

    

    
};



var checkAnswer = function(event) {
        if (event.target.textContent == questions[index].correct) {
            time = time + 20
    
        }
        else {
            time = time - 10
        };
        index = index + 1;
        if (index > questions.length - 1) {
            endQuiz();
        
        }
        else {
            
            changeQuestion();
        };
        
       
};




var endQuiz = function() {

    clearInterval(timer);
    

    document.getElementById("h2").innerHTML = "Quiz is finished. Enter your initials to log your score.";

    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";

    initialsForm = document.createElement("form");
    initialsForm.setAttribute("id", "newForm")
    document.getElementById("add-content").appendChild(initialsForm);

    enterText = document.createElement("input");
    enterText.setAttribute("type", "text");
    enterText.setAttribute("value", "");
    document.getElementById("newForm").appendChild(enterText);

    submitBtn = document.createElement("button");
    submitBtn.innerHTML = "SUBMIT";
    document.getElementById("newForm").appendChild(submitBtn);

    
    
    
    
    submitBtn.addEventListener("click", );

};




startBtn.addEventListener("click", beginQuiz);