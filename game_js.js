window.onload=colorGenerator;
var isHardMode = false;

function colorGenerator() {
	var squareColors = document.getElementsByTagName("td");

	for(i=0; i < squareColors.length; i++){
		if (squareColors[i].visibility != 'hidden') {
			var newColor = 'RGB(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + 
								',' + (Math.floor(Math.random() * 256)) + ')';
			squareColors[i].style.backgroundColor = newColor;
			//squareColors[i].style.opacity = 1;			
		}
	}
	if (isHardMode) {
		var optionColor = squareColors[(Math.floor((Math.random() * 6) + 1)-1)].style.backgroundColor;
	} else {
		var optionColor = squareColors[(Math.floor((Math.random() * 3) + 1)-1)].style.backgroundColor;
	}
	

	document.getElementById("title").textContent = optionColor.toUpperCase();
}

function checkColor(event) {
	var idColorPicked = event.target.id;
	var bgColorPicked = document.getElementById(idColorPicked).style.backgroundColor;
	
	if(bgColorPicked.toUpperCase() == document.getElementById("title").textContent) {
		alert("That's right!!!");
		endGame(idColorPicked);
	} else {
		alert("Nope! Try again...");
		document.getElementById(idColorPicked).style.backgroundColor = "#2D3032";
	}
}

function resetGame() {
	colorGenerator();
	changeButtonColor(document.getElementById("reset_game"));

	document.getElementById("rgb_title").style.backgroundColor = "#0077C4";
	var buttons = document.getElementsByTagName("button");

	for(p=0; p < buttons.length; p++) {
		buttons[p].style.color = "#0077C4";	
	}

}

function endGame(idColorPicked) {
	var squareColors = document.getElementsByTagName("td");
	document.getElementById("rgb_title").style.backgroundColor = document.getElementById(idColorPicked).style.backgroundColor;
	var buttons = document.getElementsByTagName("button");

	for(p=0; p < buttons.length; p++) {
		buttons[p].style.color = document.getElementById(idColorPicked).style.backgroundColor;
	}

	for(i=0; i < squareColors.length; i++){
		squareColors[i].style.backgroundColor = document.getElementById(idColorPicked).style.backgroundColor;
	}
}

function easyMode() {
	document.getElementById("second_row").style.visibility = "hidden";
	changeButtonColor("easy_mode");
	resetGame();
	isHardMode = false;
}

function hardMode() {
	document.getElementById("second_row").style.visibility = "visible";
	changeButtonColor("hard_mode");
	resetGame();
	isHardMode = true;
}
function changeButtonColor(id) {
	document.getElementsByTagName("button").style.backgroundColor = "#F2F7FA";
	document.getElementsByTagName("button").style.color = "#0077C4";
	document.getElementById(id).style.backgroundColor = "#0077C4";
	document.getElementById(id).style.color = "#F2F7FA";
}