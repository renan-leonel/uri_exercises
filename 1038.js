var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var numbers = input.split(" ");

var x = parseInt(numbers.shift());
var y = parseInt(numbers.shift());
var total = 0;

if(x == 1){
    total = total + (y*4);
}
else if(x == 2){
    total = total + (y*4.5);
}
else if(x == 3){
    total = total +(y*5);   
}
else if(x == 4){
    total = total + (y*2);
}
else if(x == 5){
    total = total + (y*1.5);
}

console.log(`Total: R$ ${total.toFixed(2)}`);