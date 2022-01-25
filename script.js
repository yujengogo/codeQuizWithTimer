function genQuiz(questions, quizContainer, resultsContainer, SubButton) {

    function showQuestions(questions, quizContainer) {


    }
    function showResults(questions, quizContainer, resultscontainer) {


    }
    showQuestions(questions, quizContainer);

    SubButton.onclick = function() {
        showResults(questions, quizContainer,resultsContainer);
    }
}
var myQs = [
    {
        question: "What is not a program language?",
        answers: {
            a: 'Javascript',
            b: 'Ruby',
            c: 'Python',
            d: 'Pikachu'
        },
        correctAnswer: 'd'
    },
    {
        question: "What does the following expression return? typeof(3);",
        answers: {
            a: "Array",
            b: "Scope",
            c: "Number",
            d: "Object",
        },
        correctAnswer: 'c'
    },
    {
        question: "What does the following expression return? NaN === NaN",
        answers: {
            a: 'NaN',
            b: 'True',
            c: 'False',
            d: 'somewhat the same'
        },
        correctAnswer: 'c'
    },
]