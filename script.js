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