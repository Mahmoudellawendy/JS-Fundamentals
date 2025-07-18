function factorial(n) {
    if (isNaN(n) || n <= 1) {
        return1;
    }
    return n * factorial(n - 1);
}
const num = parseInt(process.argv[2]);
console.log(factorial(num));