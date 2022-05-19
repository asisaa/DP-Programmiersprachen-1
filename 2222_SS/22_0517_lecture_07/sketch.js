//two global variable
let data;

let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRrt2uS-Hu_5eNvMADtBaZwQwRswkNnd1MdvB_mLPYe4S1tKdslQor5XmwQl8W-KGGyS5b8-3pM5mRz/pub?gid=0&single=true&output=csv";

// preload and loadTable are build in functions
//Preload takes 3 arguments

function preload() {
  //data = loadTable(url, 'csv', 'header');
  
  data = loadTable('fahrten.csv', 'csv', 'header');
  print (data);
}


//noLoop();
function setup() {
  createCanvas(400, 400);
   noLoop();
}

function draw() {
  background(20);
  
  //this makes sure there is content in the data
  if (data) {

    //get the amount of rows in the CSV
    let numRows = data.getRowCount();
    print(numRows);

    //get the column titled 
    let km = data.getColumn('km');
    let anzahl = data.getColumn('anzahl');
    let start = data.getColumn('start');
    
    //debug
    //print(km);
   
    
    //iterate over the number of rows
    for (let i = 0; i < numRows; i++) {
      
      let x = 100;
      let y = 100 + (i*15); //i*15 will increment by 15 each time the loop runs
      let w = anzahl[i]*10;  //anzahl by itself was small, so * to get a bigger #
      let h = 10;
      
    
      if (start[i] == 'Berlin') {
      fill('red');
      }else {fill('green');
      }

      rect(x,y,w,h);
    }
  }
}
