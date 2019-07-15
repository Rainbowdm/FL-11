function reverseNumber(number) {
    let reversed = 0;
    while (number !== 0) {
        reversed = reversed * 10;
        reversed = reversed + number % 10;
        number = number - number % 10;
        number = number / 10;
    }
    return reversed;
}

console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));