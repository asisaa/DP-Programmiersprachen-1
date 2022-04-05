function setup() {
    createCanvas(600, 120);
  }
  
  function draw() {
    background(220);
      let x= 100;//initialize the variable to 0 so that the x position of the 1st shape will be 20
  
    while(width > x){ //check for a condition (keep this loop going as long as this is true)
  
      fill(255,0,0);//add a red fill
      ellipse(x,60,40,40); //draw an ellipse at the x-location of the variable x
      fill(0,255,0);//add a green fill
      ellipse(x,60,30,30);//draw another ellipse at the same x location but smaller
      fill(0,0,255);//add a blue fill
      ellipse(x,60,20,20)//draw another ellipse at the same x location but smaller
      fill(255,0,255);//add a purple fill
      ellipse(x,60,10,10)//draw another ellipse at the same x location but smaller
  
      x=x+100//increment the variable (every time you run through the loop, add 100 to x)
      }
  }