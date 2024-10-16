//exo 1
let C = 25;
let F = 32;

F = C * 9/5 + 32;
console.log(F);

//exo 2

let a = 10;
let b = 9;
let c = 1;
let d = a + b + c;

console.log(d);

//exo 3

let h = 2;
let s = h * 3600;

console.log(s);

//exo 4
let age = prompt("Votre âge ?");
let natio = prompt("Votre nationnalitée?");

if (age >18 & natio === "française") {
  console.log("Eligible");
}

//exo 5

let Age = prompt ("Votre âge?");

if (Age <5) {
  console.log("Tarif gratuit")
}

if (Age >5) {
  console.log("Tarif réduit")
}

if (Age >17) {
  console.log("Tarif plein")
}
