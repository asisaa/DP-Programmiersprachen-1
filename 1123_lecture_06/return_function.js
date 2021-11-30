function setup() {
    createCanvas(800,300);
}

function draw() {
    background(1, 75, 100);
    let x= squared(100,100); //function call saving the return in a variable
    console.log(x); //diplaying the return value in console
}

//function declaration
function squared(num,tx) { 
    fill(237, 34, 93);
    textSize(tx);
    textAlign(CENTER,CENTER);
    let result = num * num;
    text(result, width/2, height/2);
    return result;
    // More than one value can be return in form of a array or an object
}