var myQuestions  = [
    {
        question: 'What is not a program language?',
        a: 'Javascript',
        b: 'Ruby',
        c: 'Python',
        d: 'Pikachu',
        correctAnswer: 'Pikachu'
    },
    {
        question: 'What does the following expression return? typeof(3);',
        a: 'Array',
        b: 'Scope',
        c: 'Number',
        d: 'Object',
        correctAnswer: 'Number'
    },
    {
        question: 'What does the following expression return? NaN === NaN',
        a: 'NaN',
        b: 'True',
        c: 'False',
        d: 'somewhat the same',
        correctAnswer: 'False'
    }
]

const questionEl = document.getElementById('question');
const choiceA = document.getElementById("choiceA");
const a = document.getElementById('a');
const choiceB = document.getElementById("choiceB");
const b = document.getElementById('b');
const choiceC = document.getElementById("choiceC");
const c = document.getElementById('c')
const choiceD = document.getElementById("choiceD");
const d = document.getElementById('d')
const submitBtn = document.getElementById("submit");
const answerEl = document.querySelectorAll(".answer")
const startBtn = document.getElementById("start");
let quiz = document.getElementById('quiz');
let starter = document.getElementById('starterPage');
let results = document.getElementById('results');
quiz.style.display = 'none';
results.style.display = 'none';
let currentQuestion = 0;
var ele = document.getElementsByClassName("answer");
var timeleft = 0;
var score = document.getElementById("score");
timeleft.textContant = score;
var userName = document.getElementById("userName");

startBtn.addEventListener("click", ()=> {
    quiz.style.display = '';
    starter.style.display = 'none';
    timeleft += 30;
    loadQuestion();
    goToResult();

});

//countDown app


var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Finished";
    } else {
      document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    }
    timeleft -= 1;
}, 1000);

function goToResult(){
    if(timeleft<= 0) {
        timeleft.textContant = score;//problem!
        localStorage.setItem("#score", score);
        quiz.style.display = 'none' // hide div quiz
        console.log(quiz.style.display)
        results.style.display = '' // make result appear
        clearInterval(downloadTimer)
    };
};




function loadQuestion() {
   

    const currentQuestionData = myQuestions[currentQuestion];

    questionEl.innerText = currentQuestionData.question;
    
    // label text
    choiceA.innerText = currentQuestionData.a;
    // button value
    a.value = currentQuestionData.a;
    choiceB.innerText = currentQuestionData.b;
    b.value = currentQuestionData.b;
    choiceC.innerText = currentQuestionData.c;
    c.value = currentQuestionData.c;
    choiceD.innerText = currentQuestionData.d;
    d.value = currentQuestionData.d;
    
}

let userChoice
function checkAnswer(event) {
    console.log(event.target.value)
    userChoice = event.target.value
}

a.addEventListener('click', (event) => checkAnswer(event))
b.addEventListener('click', (event) => checkAnswer(event))
c.addEventListener('click', (event) => checkAnswer(event))
d.addEventListener('click', (event) => checkAnswer(event))


console.log(userChoice)
submitBtn.addEventListener("click", ()=> {

    if(userChoice === myQuestions[currentQuestion].correctAnswer) {
        timeleft += 10;
    
    } else{
        timeleft -= 10;
    
    }
    console.log(timeleft)
    currentQuestion++; 
    for(var i=0; i<ele.length;i++) 
    ele[i].checked = false; // uncheck selection

    if(currentQuestion < myQuestions.length) {
        loadQuestion();
     }else {
         localStorage.setItem("score", timeleft);
         let userInput = prompt("Please enter your name", "Pikachu");
         if (userInput !=null) {
             userName.textContent = userInput//make userName
         };
         localStorage.setItem("userName", userInput);
        
        score.innerHTML = localStorage.getItem("score");
        quiz.style.display = 'none' // hide div quiz
        console.log(quiz.style.display)
        results.style.display = '' // make result appear
        clearInterval(downloadTimer)
         //Todo: add action after complete.
     }
    //  loadQuestion();


    // };
});

