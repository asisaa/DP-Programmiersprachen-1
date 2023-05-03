const josef = {
    firstName: "Josef",
    friend: "Paula",
    age: 26,
    music: "classic",
    drink: "coffee"
  };
  console.log(josef);

const paula = {
    firstName: "Paula",
    friend: "Josef",
    age: 20
  };

  paula.drink = "tea";
  console.log(paula);
  console.log(josef.age - paula.age);