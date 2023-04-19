//Function to play around with the if else statement 

let num;

function setup() {
    num = 1;
    createCanvas(800, 300);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(220);
    fill(237,34,93);
    textSize(48);

    if (mouseX > 400) {
      text('FIRST C. TRUE', width/2, height/2);
    } else if (mouseX > 200) {
      text('SECOND C. TRUE', width/2, height/2);
    } else {
      fill(23,34,93);
      textSize(60);
      text('FALSE', width/2, height/2);
    };
}
