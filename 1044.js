var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var numbers = input.split(" ");

var a = parseInt(numbers[0]);
var b = parseInt(numbers[1]);
var bool = false;

if(a>=b){
    for(let x = 1; x<=a; x++){
        if((x*b) == a){
            bool = true;
        }
    }
}

else if(b>=a){
    for(let x = 1; x<=b; x++){
        if((x*a) == b){
            bool = true
        }
    }
}

if(bool == true){
    console.log("Sao Multiplos");
}
else{
    console.log("Nao sao Multiplos");
}
