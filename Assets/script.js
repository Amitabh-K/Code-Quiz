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
const ifPortfolio = document.querySelector("#Portfolio");

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

// shuffling the array seq for randomisation of questions

function shuffle() {
	var seq = ['0','1','2','3','4'];
	var temp = 0;
	var index= 0;

    for (var i = seq.length - 1; i >= 0; i--) {
        index = Math.floor(Math.random() * (i + 1));
        temp = seq[i];
        seq[i] = seq[index];
        seq[index] = temp;
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

//to ensure only one box could be ticked at a time

function checkBoxOne(e){
	if(count){
		tempCheck = e.target.id;;
		count = 0;
	}
	else{
		if(e.target.id !== tempCheck){
			document.getElementById(tempCheck).checked = false;
			e.target.checked = true;
			tempCheck = e.target.id;
		}
		else{
			document.getElementById(tempCheck).checked = false;
			tempCheck = e.target.id;
		}
	}
}




function nextQuestion(){
	
	if(questionCount<5){
		questionDisplay(seq[questionCount]);	
	}
	else if (questionCount === 5){
		if(userScore === 0){
			userScoreDis.innerHTML = 0;
			ScorePage();
			timerDisplay(0);
		}else{
			userScore = userScore + countTimer;
			userScoreDis.innerHTML = userScore;
			ScorePage();
			timerDisplay(0);
		}
	}
	questionCount++;
}

function initNext(){
	msgDis.innerHTML = "";
	selectBox1.checked = false;
	selectBox2.checked = false;
	selectBox3.checked = false;
	selectBox4.checked = false;
	tempCheck = "";
	count = 1;
}

function checkOptionChosen(boxId){
	var opt;

	console.log(boxId);
	switch (boxId){
		case "boxcheckedbox1":
			opt = "a";
			break;
		case "boxcheckedbox2":
			opt = "b";
			break;
		case "boxcheckedbox3":
			opt = "c";
			break;
		case "boxcheckedbox4":
			opt = "d";
			break;
	}
	return opt;
}

//retrieving  answer

function checkScore(boxId){
	
	boxId = boxId.toLowerCase();
	var t = checkOptionChosen(boxId);
	var flag = 0;
	console.log(t);
	var answer = quizSelect().answer(seq[questionCount-1]);
	console.log(answer);
	if(t === answer){

		//increamnt in the  score
		
		msgDis.innerHTML = "Good job! you are right!!"
		userScore++;
		document.querySelector("#rightAnswer").play();
		flag = 1;
	}
	else{
		
		msgDis.innerHTML = "Sorry! Wrong Answer!"
		countTimer = countTimer-10;//timer penalty
		document.querySelector("#wrongAnswer").play();
		flag = 0;
	}
	// return userScore;

	return flag;
}

function checkFourBox(e){
	var check;
	if(e.target.id === "boxCheckedBox1"){
		check = true;
	}
	else if(e.target.id === "boxCheckedBox2"){
		check = true;
	}
	else if(e.target.id === "boxCheckedBox3"){
		check = true;
	}
	else if(e.target.id === "boxCheckedBox4"){
		check = true;
	}
	else{
		check = false;
	}
	return check;
}

//choose the Quiz Set Option

function quizSelect(){
	var t = quizSetSelect.value.toLowerCase();
	var select;
	switch(t){
		case "quiz set 1":
		select = quizSet1;
		break;
		case "quiz set 2":
		select = quizSet2;
		break;
	}
	return select;
}

//Sort the score array
function sortNum(a, b){
	return b - a;
}

//get the index of the array
function indexValue(arr1, a){
	for(var i = 0; i<arr1.length; i++){
		if(arr1[i] === a){
			return i;
		}
	}
}

//this is to sort the scores from high to low
function highToLow(){
	var nameGet = JSON.parse(localStorage.getItem("name"));
	var scoreGet = JSON.parse(localStorage.getItem("score"));
	var scoreGet3 = JSON.parse(localStorage.getItem("score"));
	var temp = [];

	if(scoreGet !== null && nameGet !== null){
		scoreGet2 = scoreGet.sort(sortNum);
		for (var i = 0; i<nameGet.length; i++){

			var index = indexValue(scoreGet3, scoreGet2[i]);
			temp[i] = nameGet[index];
		}
	}
	return {
		nameGet:temp,
		scoreGet:scoreGet
	}
}
//submit the score
function submitScore(){
	var nameGet = JSON.parse(localStorage.getItem("name"));
	var scoreGet = JSON.parse(localStorage.getItem("score"));
	if(nameGet !== null){
		var length = nameGet.length;
		nameGet[length] = userName.value.trim();
		scoreGet[length] = userScore;
	}else{
		nameGet = [];
		scoreGet = [];
		nameGet[0] = userName.value.trim();
		scoreGet[0] = userScore;		
	}
	localStorage.setItem("name",JSON.stringify(nameGet));
	localStorage.setItem("score",JSON.stringify(scoreGet));
	userName.value = "";
	submitMsg.textContent = "Score have been successfully submitted"
}

function getScores(){

	var nameGet = highToLow().nameGet;
	var scoreGet = highToLow().scoreGet;
	var lis = document.getElementsByTagName("li").length;

	userScoreDisplay.innerHTML = '';
	
	if(nameGet !== null){
		for(var i = 0; i<nameGet.length; i++){
			var nameli = document.createElement("li");
			// var scoreli = document.createElement("li");

			nameli.textContent = nameGet[i]+' '+scoreGet[i];
			// scoreli.textContent = scoreGet[i];

			userScoreDisplay.appendChild(nameli);
			// userScoreDisplay.appendChild(scoreli);
		}
	}
}

//for randoming the question / locating the question /only one box could be checked
initPage();
var seq = shuffle();
var questionCount = 0;
var count = 1;
var tempCheck;
var userScore = 0;
var countTimer = 60;

//press the button to begin the test
btnStartQuiz.addEventListener("click", quizPage);

//next button
btnNextQuestion.addEventListener("click",function(e){
	countTimer -= 5;
	if(countTimer>0 && questionCount<5){
		nextQuestion();		
		initNext();
	}
	else{
		userScoreDis.innerHTML = userScore;
		ScorePage();
		timerDisplay(0);
	}
});

//restart quiz button
btnReStartQuiz.addEventListener("click",function(e){
	location.reload();//use reload to initialize the page
});

//submit the score to local storage
btnSubmit.addEventListener("click",submitScore);

//clear button
btnClear.addEventListener("click",function(){
	userScoreDisplay.innerHTML = "";
	localStorage.clear();
});

cardHeader.addEventListener("click",function(e){
	console.log(e.target.getAttribute('id'));
	var event = e.target;
	var eventID = e.target.getAttribute('id');
	if(event.tagName === "BUTTON"){
		if(eventID === "startYourQuiz"){
			location.reload();
		}
		else if (eventID === "viewHighScores"){
			getScores();
			highscorePage();
		}
		else if (eventID === "portfolio"){
			window.location.href = "./portfolio.html";
		}
	}
});

//answering the question
quizTestPage.addEventListener("click",function(e){	
	var boxClicked = e.target.id;
	if(countTimer>10 && questionCount<6){
		if(checkFourBox(e) && countTimer >10){
		checkBoxOne(e);		
		setTimeout("nextQuestion()",1000);	
		setTimeout("initNext()",1000);	
		checkScore(boxClicked);		
		}
		else if (countTimer <= 10){
			var flag = checkScore(boxClicked);
			if(flag){
				checkBoxOne(e);		
				setTimeout("nextQuestion()",1000);	
				setTimeout("initNext()",1000);	
				checkScore(boxClicked);	
			}
			else{
				checkBoxOne(e);	
				checkScore(boxClicked);
				userScoreDis.innerHTML = userScore;
				ScorePage();
				timerDisplay(0);
			}
		}
	}
	else{
		userScoreDis.innerHTML = userScore;
		ScorePage();
		timerDisplay(0);
	}	
});



