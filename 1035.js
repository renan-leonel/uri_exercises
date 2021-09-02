var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var numbers = input.split(" ");
var A = numbers.shift();
var B = numbers.shift();
var C = numbers.shift();
var D = numbers.shift();

var sumAB = parseInt(A + B);
var sumCD = parseInt(C + D);
var par = A % 2;

if(B>C && D>A && sumCD>sumAB && C>0 && D>0 && par===0){
    console.log("Valores aceitos");
}

else{
    console.log("Valores nao aceitos");
}