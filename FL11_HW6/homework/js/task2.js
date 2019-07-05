let a = Number(window.prompt('a = ', ''));
let b = Number(window.prompt('b = ', ''));
let c = Number(window.prompt('c = ', ''));

if (a + b > c && b + c > a && a + c > b) {
    if (a === b && b === c && c === a) {
        console.log('Eequivalent triangle');
    } else if (a === b && b !== c || b === c && b !== a || a === c && b !== c) {
        console.log('Isosceles triangle');
    } else if (a !== b && b !== c && c !== a) {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}