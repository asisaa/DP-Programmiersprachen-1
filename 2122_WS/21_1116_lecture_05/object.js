// Create an object:
const person = {
    firstName: "Maja",
    lastName: "Mueller",
    age: 21,
    eyeColor: "green"
  };
  
  // Display some data from the object:
  document.getElementById("demo").innerHTML =
  person.firstName + " is " + person.age + " years old.";

  person.hairColor = "Brown";

  // Display some more data from the object:
  document.getElementById("demotwo").innerHTML =
  person.hairColor + " is his hair color" ;

  console.log(person);