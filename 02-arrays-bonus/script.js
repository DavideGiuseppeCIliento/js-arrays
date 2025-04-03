const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
let temp = "";

for (let i = 0; i < teachers.length; i++) {
  temp = teachers[i];
  reversedTeachers.unshift(temp);
}

console.table(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}

console.table(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

teachers.splice(1, 1);
console.table(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

let isFabioPresent = false;

for (let i = 0; i < teachers.length && isFabioPresent === false; i++) {
  if (teachers[i] === "Fabio") {
    isFabioPresent = true;
    console.log("Verifica n. " + i);
  }
  console.log("Fabio è nella lista? " + isFabioPresent);
}

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let teachersString = "";

for (let i = 0; i < teachers.length; i++) {
  teachersString = teachersString + teachers[i];
}

console.table(teachersString);
