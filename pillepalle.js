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

// 4. es gibt nun mehrere kurse mit mehreren eingeschriebenen schülern. die schüler werden
// pro kurs gespeichert. es gibt nun mehrdimensionale arrays.

let studentsPerCourse = [
  ["Max", "Monika"], // erster kurs
  ["Erik", "Erika"] // zweiter kurs
];

// a) berechne die anzahl der teilnehmer aller kurse insgesamt (aber so, dass es auch mehr
// als zwei kurse sein könnten)

let num = 0;
for (let course of studentsPerCourse) {
  num += course.length;
}
console.log("4.a " + num);

// b) der teilnehmer "Max" musste seinen sprachkurs absagen. schreibe ein programm,
// das ihn aus seinem kurs entfernt (aber so, dass man es auf jeden schüler anwenden könnte).
// mach möglich, dass der schüler eine nachricht bekommt, falls er gar nirgends eingetragen war.

let studentToCancel = "Max";
let studentFound = false;
for (let course of studentsPerCourse) {
  if (course.indexOf(studentToCancel) !== -1) {
    let posStudentToCancel = course.indexOf(studentToCancel);
    course.splice(posStudentToCancel, 1);
    studentFound = true;
    break;
  }
}
console.log(
  "4.b " + studentsPerCourse + " --  " + studentToCancel + " wurde entfernt"
);
if (studentFound === false) {
  console.log("4.b " + studentsPerCourse + " -- kein teilnehmer entfernt");
}

// c) ein neuer teilnehmer soll eingeschrieben werden. schreibe ein programm, dass einen neuen
// teilnehmer in dem kurs platziert, der bisher die wenigsten teilnehmer hat (und beachte auch
// den fall, dass zwei kurse die gleiche teilnehmerzahl haben)

let indexLeastStudents = -1;
for (let i in studentsPerCourse) {
  let course = studentsPerCourse[i];
  if (indexLeastStudents === -1) {
    indexLeastStudents = i;
  } else {
    if (course.length < studentsPerCourse[indexLeastStudents].length) {
      indexLeastStudents = i;
    }
  }
}
console.log("4.c " + indexLeastStudents);

// 5. die sprachschule hat herausgefunden, dass es funktionen gibt.

let courses = [
  ["Christian", "Annika"], // kurs 1 mit 2 teilnehmern
  ["Julian", "Lisa", "Tom"] // kurs 2 mit 3 teilnehmern
];

// 1a) schreibe eine funktion, die ermittelt, welcher kurs bisher am wenigsten teilnehmer hat.
// wenn zwei kurse gleich viele teilnehmer haben, ist es egal, welcher kurs zurückgegeben wird.

function getSmallestCourse() {
  let smallestCourse = 0;
  let smallestIndex = -1;

  for (let i in courses) {
    let course = courses[i];
    if (smallestIndex === -1 || course.length < smallestCourse) {
      smallestIndex = i;
      smallestCourse = course.length;
    }
  }
  console.log("the smallest course is on index " + smallestIndex);
  return smallestIndex;
}
getSmallestCourse();

// 1b) schreibe eine funktion, die einen teilnehmer in den kurs einfügt, der bisher am
// wenigsten teilnehmer hat

function addStudent(name) {
  let smallestCourse = getSmallestCourse();
  courses[smallestCourse].push(name);
}
addStudent("Tim");
console.log("student wurde eingefügt in kurs " + getSmallestCourse());
console.log(courses);

// 2. mithilfe von funktionen sollen wir ein einfaches wörterbuch entwickeln. die variablennamen für die
// sprachbausteine sind komplett großgeschrieben, um klarzumachen, dass diese nie abgeändert werden sollen.
// die indices stimmen überein.

const LANGUAGE_DE = [
  "hallo",
  "heute",
  "sprachkurs",
  "willkommen",
  "mikrofon",
  "und"
];

const LANGUAGE_EN = [
  "hello",
  "today",
  "language course",
  "welcome",
  "microphone",
  "and"
];

// a) schreibe eine funktion, die ein einzelnes wort vom deutschen ins englische übersetzt.
// das englische wort soll über return weitergegeben werden.
// kann ein wort nicht übersetzt werden, soll 1:1 das deutsche wort ausgegeben werden.

function translateWord(word) {
  word = word.toLowerCase();

  for (let i in LANGUAGE_DE) {
    let currentWord = LANGUAGE_DE[i];

    if (currentWord === word) {
      return LANGUAGE_EN[i];
    }
  }
  return word;
}
console.log("2.a ", translateWord("Sprachkurs"));
console.log("2.a ", translateWord("Sprachschüler"));

// b) schreibe eine funktion, die den ersten buchstaben eines wortes in einen großbuchstaben umewandelt.

function ucFirst(word) {
  let firstLetter = word[0];
  let rest = word.slice(1);
  return firstLetter.toUpperCase() + rest;
}
console.log("2.b ", ucFirst("Sprachkurs"));

// c) schreibe nun darauf aufbauend eine funktion, die einen ganzen satz übersetzen kann.
// zerlege dazu den satz in wörter, übersetze diese einzeln und setze den satz wieder zusammen.
// der erste buchstabe des satzes soll ein großbuchstabe sein.

function translateSentence(sentence) {
  let words = sentence.split(" ");

  let translatedWords = [];
  for (let word of words) {
    let translatedWord = translateWord(word);
    translatedWords.push(translatedWord);
  }
  let translateSentence = translatedWords.join(" ");
  return ucFirst(translateSentence);
}
console.log("2.c ", translateSentence("Hallo und willkommen beim Sprachkurs"));
