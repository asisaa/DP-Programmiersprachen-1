function setup() {
	createCanvas(800, 300);
	sayHello(); //function call
}

function draw() {
	background(220);
}

function sayHello() //function declaration
{
	let message = "Hello World!";
	console.log(message);
}
//console.log(message); //this line throws an error 