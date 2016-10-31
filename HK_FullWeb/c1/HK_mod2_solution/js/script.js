var colors = ["red", "blue", "black","yellow", "magenta","green"];

var target, guessInputText, guessInput, targetText;
var finished = false;
var count = 0;

function doGame(){
	var randomNumber = Math.floor(Math.random() * (colors.length - 1));
	target = randomNumber +1;
	targetText = colors[target];
	alert("The correct color is "+targetText);

	while (!finished) {
		guessInputText = prompt ("Please guess the color that I am thinking \n\n"+
								"Select among following colors:\n\n"+
								"black, blue, green, magenta, red, yellow");
		count++;
		document.body.style.backgroundColor = "targetText";
		console.log("1 color= "+targetText);
		finished = checkGuess();
	}

}

function checkGuess(){
	if(!inArray(guessInputText, colors)){
		alert("you entered non existent color, please read selection colors");
		return false;
	}
	if(guessInputText > targetText){
		alert("You color is alphabetically bigger than mine");
		return false;
	}
	if(guessInputText < targetText){
		alert("You color is alphabetically smaller than mine");
		return false;
	}
	alert("You entered correct color! The color was: "+ targetText +"\n\nIt took you " + count+" times to guess it!");
	return true;	
}
function inArray(toCheck, myArray){
  for(var i = 0; i < myArray.length; i++) {
    if(toCheck == myArray[i]){
    	console.log("2 correct "+toCheck+" "+myArray[i]);
      return true;
    }
  }
  console.log("3 wrong "+toCheck+" "+myArray[i]);
  return false; 
}