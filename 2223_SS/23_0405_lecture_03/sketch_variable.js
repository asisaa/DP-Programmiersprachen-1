function setup() {
    createCanvas(600, 120);
  }

  function draw() {

    let myvar = 80;
    rectMode(CENTER);
    background(0);
    fill(255, 0, 0); //set the initial fill to red
    ellipse(120, myvar, 20, 20);//draw an ellipse at 80
    ellipse(200, myvar, 20, 20);
    ellipse(280, myvar, 20, 20);
    ellipse(360, myvar, 20, 20);
    ellipse(440, myvar, 20, 20);
  }
