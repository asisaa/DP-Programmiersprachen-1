function setup() {
    createCanvas(800, 300);
  }

  function draw() {
    background(1, 75, 100);

    //circle properties
    fill(237, 34, 93);
    noStroke();
    
    for (let i=0; i<3; i=i+1) {
      ellipse(0,i* 100,50,50);

    }
    ellipse(50,50,50,50);
    ellipse(100,50,50,50);
    ellipse(150,50,50,50);
  }