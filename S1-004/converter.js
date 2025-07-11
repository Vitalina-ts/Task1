function convertCmToInches(n) {
    let inches = n / 2.54;
    return `${n} см = ${inches.toFixed(2)} дюймів`;
}

console.log(convertCmToInches(10));
console.log(convertCmToInches(25.4));
console.log(convertCmToInches(50));
