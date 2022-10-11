let x;
let y;

function setup() {
  createCanvas(500,500);
  x = 300;
  y = 500;
  z = false;
  console.log(typeof x);

}

function draw() {
  background(220);
  fill(255);
   ellipse(x, y, 200, 200);
  fill(0);
  //eyes
  ellipse(x- 30, y - 30, 30, 30);//left eye
  ellipse(x + 30, y - 30, 30, 30);//right eye
  rectMode(CENTER);
  //mouth
  rect(x, y + 30, 100, 20);
}
