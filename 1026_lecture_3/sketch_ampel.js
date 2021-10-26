function setup() {
    createCanvas(600, 120);
  }
  
  function draw() {
      let redLight = 'white';
      let yellowLight = 'white';
      let greenLight = 'white';
  
      background(220);
      rectMode(CENTER); // place the rectangle according to its CENTER
      fill(140);
      rect(width / 2, height / 2,50,100); // draw the surrounding rect
  
      if (mouseY > (height / 2 + 20)) { // begin with the highest value. if mouseY is at the bottom of the canvas
          greenLight = 'green' // set the greenlight variable to green
      }
      else if (mouseY > height / 2 - 20){ // is mouseY is towards the middle
          yellowLight = 'yellow'; // set the yellowLight variable to yellow
      }
      else {
          redLight = 'red';
      }
  
      fill(redLight);
      ellipse(width / 2, height / 2 - 25, 20, 20);
      fill(yellowLight);
      ellipse(width / 2, height / 2, 20, 20);
      fill(greenLight);
      ellipse(width / 2, height / 2 + 25, 20, 20);
  
  
  
  
  }