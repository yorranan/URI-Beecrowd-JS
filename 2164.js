var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var S = 2.2360679774997896964091736687313
function fib(n) {
    return (((1+S)/2)**n-((1-S)/2)**n)/S
}
console.log(fib(input).toFixed(1))