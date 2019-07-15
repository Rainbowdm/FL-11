let min;

function getMin() {
    min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (min > arguments[i]) {
            min = arguments[i];
        }
    }
    return min;
}
console.log(getMin(3, 0, -3));
console.log(getMin(2, 4, 100, 9));