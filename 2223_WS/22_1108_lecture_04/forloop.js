//example of a nested for loop
//i++  its the same than i = i + 1;
for (let i = 1; i < 3; i++) {
  console.log("outer loop i: ", i);

  for (let j = 1; j < 6; j++){
    console.log("inner loop: ", j);
  }
}
