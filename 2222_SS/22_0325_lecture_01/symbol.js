function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let x = 100;

  fill(255, 50, 0);
  rect (20, 20, 300, 300);

  fill(255, 204, 0);
  rect(30, 20, 55, 55);

  fill(255, 204, 0);
  rect(200, 20, 55, 55);


  textSize(32);
  text('HELLO', x, 200);

  x = x + 2;

  console.log(x);


}
