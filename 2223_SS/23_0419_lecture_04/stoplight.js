// Code copy from Selam - thank you so much!
//Luca programmed a second example usind logic operators
// Suntee shared that exmaple she found online https://editor.p5js.org/sitaratunm2097/sketches/YlaqRVpZb

console.log("test");

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background('black');
  fill('grey');
  circle(150, 100, 40);
  circle(150, 150, 40);
  circle(150, 200, 40);

  if (mouseY < 100 && mouseX > 50 && mouseX < 150)
      { fill('red');
       circle(150, 100, 40);
        }
      else if (mouseY > 200){
            fill('green');
            circle(150, 200, 40);
             }
      else {
            fill('yellow');
            circle(150, 150, 40);
      }

}
