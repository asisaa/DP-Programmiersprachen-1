//this sorting algorithm is running the p5.js editor https://editor.p5js.org/

let values = [9,4,5,2,6,7,1];
let i = 0;
let j = 0;

// The statements in the setup() function
// execute once when the program begins

function setup() {
  createCanvas(800, 400);
  console.log(values);
}

// The statements in draw() function are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.

function draw() {
  background(220);
  bubbleSort();
  //values.sort();
  console.log(values);
}

// bubble sort.
function bubbleSort() {
  for(let n = values.length;n > 1; n--) {
    for (i=0; i < n-1; i++) {
      let a = values[i];
      let b = values[i+1];
       if (a > b){
          swap(values, i, i + 1);
        }
      }
    }
  }

// swap function
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
