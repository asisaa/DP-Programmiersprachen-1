function setup() {
    createCanvas(800,300);
}

function draw() {
    background(1, 75, 100);
    squared(100,100);
}

function squared(num,tx) {
    fill(237, 34, 93);
    textSize(tx);
    textAlign(CENTER,CENTER);
    text(num * num, width/2, height/2);
}