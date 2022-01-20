//this sorting algorithm is running the p5.js editor https://editor.p5js.org/


let values = [9,4,5,1,6,7,1];

// The statements in the setup() function
// execute once when the program begins

function setup() {
  createCanvas(800, 400);
  console.log(values);
}


function draw() {
  background(220);
  insertSort(values);
  console.log(values);
}


// insertion sort
function insertSort(array) {
  //starts sorting with the second elment i=1 and not the first i = 0
  for(let i=1; i < array.length; i++) {

    //loops goes through all elements to the left starting with j=1
    for (let j = i; j > 0; j--) {

      //compare to elements and swap if the element j is smaller than the right neigbour
      if (array[j] < array[j-1]) {
        //swap function, exchanges to elements in an array
        const temp = array[j];
        array[j] = array [j-1];
        array [j-1] = temp;
      } else {
        break;
      }
    }
  }
}
