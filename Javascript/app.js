//Global variables
var timeRemaining = 60;
var right = 0;
var wrong = 0;

//Define questions in an array using an object
//List out answer choices in an array and define the answer
//Apply names to each question for input "radio" choices
var questionsList = [
    {
        question: "What kind of game is this?",
        answerList: ["FPS", "RP", "MMO", "MOBA"],
        answer: "MOBA",
        name: "game"
    },
    {
        question: "What is the game's official release year?",
        answerList: ["2007", "2009", "2010", "2013"],
        answer: "2009",
        name: "release"
    },
    {
        question: "Which champion was available in beta?",
        answerList: ["Kha'zix", "Pyke", "Brand", "Veigar"],
        answer: "Veigar",
        name: "beta"
    },
    {
        question: "Which map is not available in game?",
        answerList: ["Howling Abyss", "Crystal Scar", "Summoner's Rift", "Twisted Treeline"],
        answer: "Crystal Scar",
        name: "map"
    },
    {
        question: "How many inhibitor turrets are there?",
        answerList: ["1", "2", "3", "4"],
        answer: "3",
        name: "inhibitor"
    },
    {
        question: "How many nexus turrets are there?",
        answerList: ["1", "2", "3", "4"],
        answer: "2",
        name: "nexus"
    },
    {
        question: "Which role is primarily responsible for taking the spell 'Smite'?",
        answerList: ["AD Carry", "Support", "Tank", "Jungle"],
        answer: "Jungle",
        name: "smite"
    },
    {
        question: "Which is not a real dragon in the game?",
        answerList: ["Aqua Dragon", "Mountain Dragon", "Infernal Dragon", "Cloud Dragon"],
        answer: "Aqua Dragon",
        name: "dragon"
    },
    {
        question: "What world does League of Legends take place in?",
        answerList: ["Palostea", "Vertia", "Runeterra", "Valoria"],
        answer: "Runeterra",
        name: "world"
    },
    {
        question: "Which is not a location in League of Legends?",
        answerList: ["Bilgewater", "Noxus", "Demacia", "Tryndamere"],
        answer: "Tryndamere",
        name: "location"
    },
];
//Start
function startQuiz() {
    $('#quizContainer').show();
    timeLeft();
    displayQuestions();
};
//Countdown from 60
function timeLeft() {
    setInterval(time, 1000);
    function time() {
        timeRemaining--;
        $('#timeRemaining').text("Time Remaining: " + timeRemaining);
        //Determining right/wrong answers for quiz
        if (timeRemaining === 0) {
            checkAnswers();
            $('#quizContainer').hide();
            $('#endContainer').show();
        }
    }
};

//Display Questions
function displayQuestions() {
    for (i = 0; i < questionsList.length; i++) {
        var createDiv = $("<div>");
        var q = questionsList[i].question;
        createDiv.append(q);

        //Display choices
        var createDiv2 = $('<div>');
        for (j = 0; j < questionsList[i].answerList.length; j++) {
            createDiv2.append('<input type="radio"  name=' + questionsList[i].name + ' value=' + questionsList[i].answerList[j] + '><label>' + questionsList[i].answerList[j]) + '</label>';
        }
        //Append choices to question
        createDiv.append(createDiv2);
        $("#questions").append(createDiv);
        $("#questions").append("<br>");
    }
};
//Run through array to check choices with answer
function checkAnswers() {
    for (k = 0; k < questionsList.length; k++) {
        if ($('input:radio[name="' + questionsList[k].name + '"]:checked').val() === questionsList[k].answer) {
            right++;
        }
        else {
            wrong++;
        }
    }
    $("#questionsRight").text("Questions Right: " + right);
    $("#questionsWrong").text("Questions Wrong: " + wrong);
}
//Start button
$('#startButton').on("click", function () {
    $(this).parent().hide();
    startQuiz();
});
//Submit button
$('#submitButton').on("click", function () {
    //Determining right/wrong answers for quiz
    checkAnswers();
    $('#quizContainer').hide();
    $('#endContainer').show();
});