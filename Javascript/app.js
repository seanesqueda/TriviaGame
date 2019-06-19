//Define questions in an array using an object
//List out answer choices in an array and define the answer
var questionsList = [
    {
        question: "What kind of game is this?",
        answerList: ["FPS", "RP", "MMO", "MOBA"],
        answer: "MOBA",
    },
    {
        question: "What is the game's official release year?",
        answerList: ["2007", "2009", "2010", "2013"],
        answer: "",
    },
    {
        question: "Which champion was available in beta?",
        answerList: ["Kha'zix", "Pyke", "Brand", "Veigar"],
        answer: "Veigar"
    },
    {
        question: "Which map is not available in game?",
        answerList: ["Howling Abyss", "Crystal Scar", "Summoner's Rift", "Twisted Treeline"],
        answer: "Crystal Scar",
    },
    {
        question: "How many inhibitor turrets are there?",
        answerList: ["1", "2", "3", "4"],
        answer: "3",
    },
    {
        question: "How many nexus turrets are there?",
        answerList: ["1", "2", "3", "4"],
        answer: "2",
    },
    {
        question: "Which role is primarily responsible for taking the spell 'Smite'",
        answerList: ["AD Carry", "Support", "Tank", "Jungle"],
        answer: "",
    },
    {
        question: "Which is not a real dragon in the game?",
        answerList: ["Aqua Dragon","Mountain Dragon", "Infernal Dragon", "Cloud Dragon"],
        answer: "Aqua Dragon",
    },
    {
        question: "What world does League of Legends take place in?",
        answerList: ["Palostea", "Vertia", "Runeterra", "Valoria"],
        answer: "Runeterra",
    },
    {
        question: "Which is not a location in League of Legends?",
        answerList: ["Bilgewater", "Noxus", "Demacia", "Tryndamere"],
        answer: "Tryndamere",
    },
];

$('#startButton').on("click", function () {
    $(this).hide();
    startQuiz();
});

function startQuiz(){
    $("#quizContainer").show();
};

