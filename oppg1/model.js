const app = document.getElementById("app");

let user= "Påskeharen";

const currentDate = new Date().getDate();
console.log(currentDate)

const easterDate = new Date("Mar 30, 2024").getDate();
console.log(easterDate)

let counter = easterDate - currentDate;
let funfact = "";


