function pipe(number) {
    for (let i = 1; i < arguments.length; i++) {
        number = arguments[i](number);
    }
    return number;
}

function pipes(number, ...param) {
    for (let func of param) {
        number = func(number);
    }
    return number;
}

function addOne(x) {
    return x + 1;
}
console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));

console.log(pipes(1, addOne));
console.log(pipes(1, addOne, addOne));