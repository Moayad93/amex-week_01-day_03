let number = 1755;
let result = "";

if (number % 3 === 0) {
    result += "Pling";
}
if (number % 5 === 0) {
    result += "Plang";
}
if (number % 7 === 0) {
    result += "Plong";
}

console.log(result || number.toString());