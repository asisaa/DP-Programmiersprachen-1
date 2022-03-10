//In dieser Aufgabe schreiben wir JS code und nutzen die Processing Library die wir im color_object.html file bereits eingebunden haben
//Mit dem Einbinden der Processing Library können wir alle Methoden aus https://p5js.org/reference/ nutzen


let circle;
let rectangle;

function setup(){
    createCanvas(800,300);

    circle = {
        x: width/2,
        y: height/2,
        size: 50,
        draw: function() {
            ellipse(circle.x, circle.y, circle.size, circle.size);
        },
        grow: function() {
            if (circle.size < 200){
                circle.size += 1;
            }
        }
    }
    // Schreibe ein Rectangel Object mit dem selben Verhalten wie das Circle Object nur das die x und y coordinaten 0 sind
    // rectangle = {}

    rectangle = {
        x: 0,
        y: 0,
        size: 10,
        draw: function() {
            rect(this.x, this.y, this.size, this.size);
        },
        grow: function() {
            if (this.size < 200){
                this.size += 1;
            }
        }
    }
    //rectangle properties
    fill(23, 34, 93);
    noStroke();
    rectangle.draw();
    rectangle.grow();

}

function draw() {
    background(220);

    //circle properties
    fill(237, 34, 93);
    noStroke();
    circle.draw();
    circle.grow();
    rectangle.draw();
    rectangle.grow();

    //rectangle properties
    //Zeichne dein rectangle object indem du es genauso wie das circle object aufrufst

}
