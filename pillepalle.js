// strafaufgabe für einen schüler: er soll 20 mal schreiben "ich soll im unterricht nicht stören".
//schreibe ein kleines programm, was dies für den schüler erledigt.

for (let i = 0; i < 20; i++) {
  // console.log("ich soll im unterricht nicht stören.");
}

// ein sprachkurs hat nach ende der anmeldungen zu viele teilnehmer. teile alle teilnehmer
// gleichmäßig in zwei kleinere kurse auf.

let students = ["Max", "Monika", "Franziska", "Bernd", "Tobias", "Holger"];
let courseOne = [];
let courseTwo = [];

function twoCourses() {
  for (const i in students) {
    if (i % 2 === 0) {
      courseOne.push(students[i]);
    } else {
      courseTwo.push(students[i]);
    }
  }
}
twoCourses();

// console.log("kurs eins: " + courseOne);
// console.log("kurs zwei: " + courseTwo);

// entwirf einen preisrechner für eine sprachschule

// 1. wie viel kostet es, alle sprachkurse zu belegen (bitte universell schreiben,
// und zwar so dass auch noch kurse und preise eingesetzt werden könnten)

let levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
let prices = [400, 500, 550, 600, 650, 700];

let costs = 0;
for (let i in levels) {
  let level = levels[i];
  let price = prices[i];
  costs += price;
  if (level === "C1") {
    break;
  }
}
console.log("1. " + costs + " €");

// 2. wie viel kosten die kurse von A2 bis C1 für einen teilnehmer?

let fromA2toC1 = 0;
let levelA2seen = false;
for (let i in levels) {
  let level = levels[i];
  let price = prices[i];
  if (level === "A2") {
    levelA2seen = true;
  }
  if (levelA2seen) {
    fromA2toC1 += price;
  }
  if (level === "C1") {
    break;
  }
}
console.log("2. " + fromA2toC1 + " €");

// 3. ein teilnehmer möchte maximal 1500 für sprachkurse ausgeben. bis zu welchem
// level wird er kommen?

let maxPrice = 0;
for (let i in levels) {
  let price = prices[i];
  if (maxPrice + price >= 1500) {
    console.log("3. bis zu " + levels[i - 1]);
    break;
  } else {
    maxPrice += price;
  }
}
