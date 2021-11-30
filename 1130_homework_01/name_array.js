
//Schreibe ein arrays mit allen Namen deines Semesters: const names = []

//Programmiere einen for-loop und gebe in jedem Durchlauf mit console.log() einen der Namen aus bis alle Namen ausgegeben wurden.
//Nutze für deine For-Schleifen Bedingung (i < x) die Länge des arrays: let x = names.length;

let d = document.getElementById("demo");
const names = ["Anton","Lena","Alice","Tobias", "Marina", "Jacob", "Nils", "Olivia", "Simon", "Christian"];

let x = names.length
for (let i = 0; i < x; i++) {
    console.log(names[i]);
  }