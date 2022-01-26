var myQuestions  = [
    {
        question: 'What is not a program language?',
        a: 'Javascript',
        b: 'Ruby',
        c: 'Python',
        d: 'Pikachu',
        correctAnswer: 'd'
    },
    {
        question: 'What does the following expression return? typeof(3);',
        a: 'Array',
        b: 'Scope',
        c: 'Number',
        d: 'Object',
        correctAnswer: 'c'
    },
    {
        question: 'What does the following expression return? NaN === NaN',
            a: 'NaN',
            b: 'True',
            c: 'False',
            d: 'somewhat the same',
        correctAnswer: 'c'
    }
]

const questionEl = document.getElementById('question');
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");
const choiceD = document.getElementById("choiceD");
const submitBtn = document.getElementById("submit");
const answerEl = document.querySelectorAll(".answer")
let currentQuestion = 0;
//countDown app

loadQuestion();

function loadQuestion() {
    deselectAnswers();

    const currentQuestionData = myQuestions[currentQuestion];

    questionEl.innerText = currentQuestionData.question;
    
    choiceA.innerText = currentQuestionData.a;
    choiceB.innerText = currentQuestionData.b;
    choiceC.innerText = currentQuestionData.c;
    choiceD.innerText = currentQuestionData.d;
}
submitBtn.addEventListener("click", ()=> {
    
    if(answerEl.id === myQuestions[currentQuestion].correctAnswer) {

        //timer +10
    }
    else{
        //timer -10
    }

    currentQuestion++; 

     if(currentQuestion < myQuestions.length) {
         loadQuestion();

     }else {
         //Todo: add action after complete.
     }
     loadQuestion();
});

