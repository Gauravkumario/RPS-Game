var arr = ["rock","paper","scissor"];
var player_score = 0;
var system_score = 0;
/*
document.getElementById('score_p').innerHTML = "0";
document.getElementById('score_c').innerHTML = "0";*/
/*-------------------scissor function --------------*/
function myfunction0() {
	var pchoice = "scissor";
	var cchoice = arr[Math.floor(Math.random()*arr.length)];
	if (player_score == 5 || system_score ==5) {

		return;
	}
	else if(pchoice==cchoice){
			document.getElementById('result').innerHTML = "Match tie!";
		}
	else if (cchoice == "paper") {
		document.getElementById('result').innerHTML = "You win! scissor beats paper";
		player_score += 1;
		document.getElementById('score_p').innerHTML = player_score;
	}
	else if (cchoice == "rock") {
		document.getElementById("result").innerHTML = "You lose! rock beats scissor";
		system_score += 1;
		document.getElementById('score_c').innerHTML = system_score;
	}
	
	if (player_score == 5){
		document.getElementById('result').innerHTML = "You won this game dude!"
	}
	else if (system_score == 5){
		document.getElementById('result').innerHTML = "you lost the game!"
	}
}
/*------------------rock function----------------*/
function myfunction1() {
	var pchoice = "rock";
	var cchoice = arr[Math.floor(Math.random()*arr.length)];
	if (player_score == 5 || system_score ==5) {

		return;
	}
	else if(pchoice==cchoice){
			document.getElementById('result').innerHTML = "Match tie!";
		}
	else if (cchoice == "paper") {
		document.getElementById('result').innerHTML = "You lose! paper beats rock";
		system_score += 1;
		document.getElementById('score_c').innerHTML = system_score;
	}
	else if (cchoice == "scissor") {
		document.getElementById("result").innerHTML = "You win! rock beats scissor";
		player_score += 1;
		document.getElementById('score_p').innerHTML = player_score;
	}

	if (player_score == 5){
		document.getElementById('result').innerHTML = "You won this game dude!"
	}
	else if (system_score == 5 ){
		document.getElementById('result').innerHTML = "you lost the game!"
	}
}
/*------------------ papr function--------------*/
function myfunction2() {
	var pchoice = "paper";
	var cchoice = arr[Math.floor(Math.random()*arr.length)];
	if (player_score == 5 || system_score ==5) {

		return;
	}
	else if(pchoice==cchoice){
			document.getElementById('result').innerHTML = "Match tie!";
		}
	else if(cchoice == "rock"){
		document.getElementById('result').innerHTML = "You win! paper beats rock";
		player_score += 1;
		document.getElementById('score_p').innerHTML = player_score;
	}
	else if (cchoice == "scissor"){
		document.getElementById('result').innerHTML = "You lose! scissor beats paper";
		system_score += 1;
		document.getElementById('score_c').innerHTML = system_score;
	}

	if (player_score == 5){
		document.getElementById('result').innerHTML = "You won this game dude!"
	}
	else if (system_score == 5){
		document.getElementById('result').innerHTML = "you lost the game!" 
	}
}
/*----------------------------------------------*/