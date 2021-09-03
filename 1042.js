var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var numbers = input.split(" ");

var a = parseInt(numbers.shift());
var b = parseInt(numbers.shift());
var c = parseInt(numbers.shift());

let ordem = [0, 0, 0];

if(a>b && a>c){
    ordem[2] = a;

    if(b>c){
        ordem[1] = b;
        ordem[0] = c;
    }
    else{
        ordem[1] = c;
        ordem[0] = b;    
    }
}

else if(b>a && b>c){
    ordem[2] = b;
    
    if(a>c){
        ordem[1] = a;
        ordem[0] = c;
    }
    else{
        ordem[1] = c;
        ordem[0] = a;    
    }
}

else if(c>a && c>b){
    ordem[2] = c;
    
    if(a>b){
        ordem[1] = a;
        ordem[0] = b;
    }
    else{
        ordem[1] = b;
        ordem[0] = a;    
    }
}

console.log(`${ordem[0]}`);
console.log(`${ordem[1]}`);
console.log(`${ordem[2]}`);
console.log("");
console.log(`${a}`);
console.log(`${b}`);
console.log(`${c}`);