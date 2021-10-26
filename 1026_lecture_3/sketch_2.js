function setup() { 
    createCanvas(600, 120);
  } 
  
  function draw() { 
      rectMode(CENTER);
      background(0);
      fill(255,0,0);//set the initial fill to red 
  
      if(mouseX>100){//begin with highest value
          ellipse(150, 60, 20,20)//draw an ellipse at 550
      }else if(mouseX>200){
          ellipse(250, 60, 20,20)//if the mouse moves left draw an ellipse at 450
      }else if(mouseX>300){
          ellipse(350, 60, 20,20)//if the mouse moves more draw an ellipe at 350
      }else if(mouseX>400){
          ellipse(450, 60, 20,20)//draw an ellipse at 250
      }else if(mouseX>500){
          ellipse(550, 60, 20,20)//draw an ellipse at 150
      }else{//in all other cases (which means the mouseX is less than 100)
        ellipse(50,60,20,20)//draw an ellipse at 50
      }
  
  }
  