function delete1() {
	var theNode = document.getElementById('firstP');
	theNode.parentNode.removeChild(theNode);
}
function delete2() {
	var theNode = document.getElementsByTagName('p')[0];
	theNode.parentNode.removeChild(theNode);
}
function delete3() {
	var theParent = document.getElementById('thebody');
	theParent.removeChild(theParent.firstChild);
}
function deleteAll() {
	var theNode = document.getElementById('thebody');
	while (theNode.firstChild)
	theNode.removeChild(theNode.firstChild);
}
function TheCloneNode() {
	var theNode = document.getElementById('myList').lastChild;
	var myCloneNode = theNode.cloneNode(true);
	document.getElementById('myList').appendChild(myCloneNode);
}