var quizStatus = true; // Know the status of the quiz. Quiz is not running = false , running = true
var questionNumber = 0; // Track the question answered.
var answerNumber = 0; // Track next answers to show
var score = 0; // Max value by decreasing each wrong answer
var highScore = 50; // Score add fix for ticking timer.
var finalAnswerCheck = 0 // If last answer was wrong it will be validated outside of the time interval and then display as enabled = 1 
var checkTimes = 1 // Check timer times call for function on last question
var viewHighScoresBtnEl = document.getElementById('view-high-scores'); // View High Scores Btn El
var startQuizBtnEl = document.getElementById('start-quiz'); // Start Quiz button Btn El
var button1234 = document.createElement("button"); // Test answer 1
var timeLeft = 60; // Global time left assignment counter
var enterInitialsEl = document.createElement("enterInitials"); // Enter initials
var enterInitialsTextAreaEl = document.createElement("enterInitialsTextArea"); // TextArea
var htmlTimeLeft = document.getElementById('timeLeft'); // Display counter @ the html level.
var finalScoreDisplayEl = document.createElement("finalScoreDisplay"); // Display Question
var submitScoreEl = document.getElementById('submitScore'); // Start Quiz button Btn El
var mainDivEl = document.getElementById('mainDiv'); // Main div container for all elements except for header elements