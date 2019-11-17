// DOM elements 
const btnStartQuiz = document.querySelector("#startQuiz");
const btnNextQuestion = document.querySelector("#nextQuestion");
const btnReStartQuiz = document.querySelector("#reStartQuiz");
const btnSubmit = document.querySelector("#saveScore");
const btnClear = document.querySelector("#clear");

const cardHeader = document.querySelector(".card-header");
const initialPage = document.querySelector("#initial");
const quizTestPage = document.querySelector("#quizTest");
const scoreDisplayPage = document.querySelector("#scoreDisplay");

const userName = document.querySelector("#nameUser");
const userScoreDisplay = document.querySelector("#userScoreDisplay");
const highscoreDisp = document.querySelector("#highscoreDisp");
const timerCount = document.querySelector("#timerCount");

const ifQuizSet1 = document.querySelector("#quizSet1");
const ifQuizSet2 = document.querySelector("#quizSet2");
const quizSetSelect = document.querySelector("#quizSetSelect");
const ifStartQuiz = document.querySelector("#startYourQuiz");
const ifViewHighScores = document.querySelector("#viewHighScores");
const questionDisp = document.querySelector("#questionDisp");

const select1 = document.querySelector("#selection1");
const select2 = document.querySelector("#selection2");
const select3 = document.querySelector("#selection3");
const select4 = document.querySelector("#selection4");

const selectBox1 = document.querySelector("#boxCheckedBox1");
const selectBox2 = document.querySelector("#boxCheckedBox2");
const selectBox3 = document.querySelector("#boxCheckedBox3");
const selectBox4 = document.querySelector("#boxCheckedBox4");

const submitMsg = document.querySelector("#displayMsg");
const msgDis = document.querySelector("#msgDis");
const userScoreDis = document.querySelector("#userScore");


//initiation
function initPage(e){
	// timerDisplay(countTimer);
	highscoreDisp.style.display = "none";
	initialPage.style.display = "block";
	quizTestPage.style.display = "none";
	scoreDisplayPage.style.display = "none";	
}

//test page is for diaplaying questions
function quizPage(e){
	highscoreDisp.style.display = "none";	
	initialPage.style.display = "none";
	quizTestPage.style.display = "block";
	scoreDisplayPage.style.display = "none";
	timer();//start the timer
	nextQuestion();
	initNext();
}

//initiation
function ScorePage(e){
	highscoreDisp.style.display = "none";	
	countTimer = 0;
	initialPage.style.display = "none";
	quizTestPage.style.display = "none";
	scoreDisplayPage.style.display = "block";	
	setTimeout(userName.focus(), 50);//doesnot work
}

// for view high score

function highscorePage(){
	highscoreDisp.style.display = "block";	
	initialPage.style.display = "none";
	quizTestPage.style.display = "none";
	scoreDisplayPage.style.display = "none";	
}


function timer(){
	setInterval(function(e){
		countTimer--;
		if(countTimer>=0){
			timerDisplay(countTimer);
		}
	},1000);
}

//for timer display
function timerDisplay(count){
	timerCount.textContent = count;
}

//for timer display//for timer display//for timer display//for timer display//for timer display//for timer display//for timer display//for timer display//for timer display


function questionDisplay(seq){
	questionDisp.textContent = questionSelect(seq).question;
	select1.textContent = questionSelect(seq).selection1;
	select2.textContent = questionSelect(seq).selection2;
	select3.textContent = questionSelect(seq).selection3;
	select4.textContent = questionSelect(seq).selection4;
}

function random() {
	var seq = ['0','1','2','3','4'];
	var temp = 0;
	var j= 0;

    for (var i = seq.length - 1; i >= 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = seq[i];
        seq[i] = seq[j];
        seq[j] = temp;
	}
	return seq;	
}

function questionSelect(number){
	var question = quizSelect().question(number);
	var selection = [
		quizSelect().selection((number*4)),
		quizSelect().selection((number*4+1)),
		quizSelect().selection((number*4+2)),
		quizSelect().selection((number*4+3))
					];
	return{
		question:question,
		selection1:selection[0],
		selection2:selection[1],
		selection3:selection[2],
		selection4:selection[3]
	}
}
