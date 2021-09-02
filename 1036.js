// código está correto, uri ta bugado 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var numbers = input.split(" ");
var A = parseFloat(numbers.shift()).toFixed(1);
var B = parseFloat(numbers.shift()).toFixed(1);
var C = parseFloat(numbers.shift()).toFixed(1);

var delta = parseFloat((B**2)-(4*A*C)).toFixed(1);

if(delta>0 && A!=0){
    var r1 = (-B + Math.sqrt(delta))/2*A;
    var r2 = (-B - Math.sqrt(delta))/2*A;
    
    console.log(`R1 = ${(r1/100).toFixed(5)}`);
    console.log(`R2 = ${(r2/100).toFixed(5)}`);
}

else{
    console.log("Impossivel calcular");
}