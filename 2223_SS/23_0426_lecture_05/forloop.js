
//examples of loops
let i = 4;
while (i < 3){
  i++;
  //console.log(a);
}

let years = 0
let balance = 10;
let goal = 100;
let interestRate = 2;
let paymentAmount = 10;

while (balance < goal) {
 balance += paymentAmount; // balance = balance + paymentAmount
 let interest = balance * interestRate / 100;
 balance += interest;
 years++; // years = years + 1
 //console.log("B:", balance, "I:", interest);
}
//console.log(`${years} years.`);


for (let i = 1; i < 5; i++) {
  //console.log(i);
}

//example of a nested for loop
//i++  its the same than i = i + 1;
for (let i = 1; i < 3; i++) {
  console.log("outer loop i: ", i);
  for (let j = 1; j < 6; j++){
    console.log("inner loop: ", j);
  }
}

