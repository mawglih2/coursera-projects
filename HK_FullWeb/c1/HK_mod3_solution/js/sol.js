var numberOfFaces = 5;
var theBody = document.getElementsByTagName('body')[0];
function  generateFaces() {
	var leftSide= document.getElementById('leftDiv');
	var rightSide = document.getElementById('rightDiv');
	for (var i = 0; i < numberOfFaces; i++) {
		var image = document.createElement("img");
		image.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
		image.style.top = Math.floor(Math.random() * 400)+"px";		
		image.style.left = Math.floor(Math.random() *400)+"px";
		image.style.position = "absolute";
		leftSide.appendChild(image);
	}
	genClone();
	getNextLevel();
	setGameOver();
}
function genClone(){
	var leftSide= document.getElementById('leftDiv');
	var rightSide = document.getElementById('rightDiv');
	var myClone = leftSide.cloneNode(true);
	myClone.removeChild(myClone.lastChild);
	rightSide.appendChild(myClone);
}
function getNextLevel(){
	var leftSide= document.getElementById('leftDiv');
	var rightSide = document.getElementById('rightDiv');
	leftSide.lastChild.onclick = function nextLevel(event) {
		deleteAllLeft();
		deleteAllRight();
		event.stopPropagation();
		numberOfFaces += 5;
		generateFaces();
	};
}
function deleteAllLeft() {
	var theNode = document.getElementById('leftDiv');
	while (theNode.firstChild)
	theNode.removeChild(theNode.firstChild);
}
function deleteAllRight() {
	var theNode = document.getElementById('rightDiv');
	while (theNode.firstChild)
	theNode.removeChild(theNode.firstChild);
}
function setGameOver() {
	var leftSide= document.getElementById('leftDiv');
	var theBody = document.getElementsByTagName('body')[0];
	theBody.onclick = function gameOver(event) {
		event.stopPropagation();
		alert("Game Over");
		theBody.onclick = null;
		leftSide.lastChild.onclick = null;
	};
}