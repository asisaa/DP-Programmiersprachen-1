function setup() {
    createCanvas(800, 300);
  }

  function draw() {
    background(1, 75, 100);
    //circle properties
    fill(237, 34, 93);
    noStroke();
    let diameter = 50;
    
    for (let i=0; i<width/diameter; i=i+1) {
        for (let j=0; j<height/diameter; j=j+1) {
            ellipse(
                diameter/2 + i * diameter,
                diameter/2 + j * diameter,
                diameter * random(),
                diameter
            );
        }
    }
      
  }

  //wir nutzen die random Funktion und multiplizieren die width der ellipse mit der random nummer
