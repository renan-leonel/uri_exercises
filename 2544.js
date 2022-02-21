var input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
var numbers = input.split("\n");

while (numbers.length > 0) {
    let number = parseInt(numbers.shift())
    let ninjas = parseInt(Math.log2(number))
    if(isNaN(ninjas)) break;
    console.log(ninjas)
}