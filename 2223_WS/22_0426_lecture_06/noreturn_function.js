function setup() {
    createCanvas(800,300);
}

function draw() {
    background(1, 75, 100);

    squared(100,100);
}
//creating an function that multiplies a given numeric number by itself
function squared(num,tx) {
    fill(237, 34, 93);
    textSize(tx);
    textAlign(CENTER,CENTER);
    text(num * num, width/2, height/2);
}

// setup function gets executed before the draw noreturn_function
// setup function is only executed one time, wheraes draw function is executed continuously at a certain default rate
