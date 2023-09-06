let name = prompt("Введите ваше имя: ");
let year = prompt("Введите ваш год рождения: ");
let nowyear = prompt("Введите текущий год: ");

let age = nowyear - year;

let answer = `${name}, ваш возраст ${age} лет.`;

console.log(answer);
