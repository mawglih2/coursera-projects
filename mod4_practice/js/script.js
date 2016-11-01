// var x;
// x=5;
// console.log(x);
// var string = "hello ";
// string += "World";
// console.log(string+ "!");
// console.log((5+4)/3);
// var facebook ={
// 	name: "facebook",
// 	ceo:{
// 		firstName:"Mark",
// 		favColor: "blue"
// 	},
// 	$stock :110

// };
// console.log(facebook);

// function multiply(x,y){
// 	return x*y;
// }
// console.log(multiply(10,3));
// console.log(multiply);
// console.log(multiply.version);
// function Circle(radius){
// 	this.radius = radius;
	
// }
// var myCircle = new Circle(23);
// Circle.prototype.getArea =
// 	function(){
// 		return Math.PI * Math.pow(this.radius, 2);
// 	}

// console.log(myCircle ); 
// 	console.log("Area of the myCircle is "+myCircle.getArea());
// var literalCircle = {

// 	radius: 10,
// 	getArea: function (){
// 		var self =this;
// 		console.log(this);
// 		var increaseRadius = function(){
// 			self.radius = 20;
// 		};
// 		increaseRadius();
// 		console.log(this.radius);

// 		return Math.PI * Math.pow(this.radius,2);
// 	}
// };
// console.log(literalCircle.getArea());

// var names = [ "Oleg", "another Oleg", "One more Oleg"];
// //
// names[1000] = "Vika";
// for( var i =0; i < names.length; i++){
// 	console.log("hello "+ names[i]);
// }

// function makeMultiplier (multiplier){
// 	return (
// 		function(x){
// 			return multiplier * x;
// 		});
// }
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(22));

(function(window) {
	var yaakovGreeter = {};
	yaakovGreeter.name = "yaakov";
	var greeting = "Hello ";
	yaakovGreeter.sayHello = function (){
		console.log(greeting + yaakovGreeter.name);
	}
	window.yaakovGreeter = yaakovGreeter;

})(window);
yaakovGreeter.sayHello();