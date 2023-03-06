function add(a , b) {
    return a + b
}
add();

function subtract(a, b) {
    return a - b
}
subtract();

function divide(a, b) {
    return a / b
}
divide();

function multiply(a, b) {
    return a * b
}
multiply();

//let number;
function increment(number) {
    number += 1;
    return number;
}
increment();

function decrement(number) {
    number -= 1;
    return number;
}
increment();

function makeInt(n) {
    n = parseInt(n, 10);
    return n;
}
makeInt();

function preserveDecimal(n) {
    n = parseFloat(n);
    return n;
}
preserveDecimal();