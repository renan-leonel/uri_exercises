var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var numbers = input.split(" ");

var x = parseFloat(numbers.shift()).toFixed(1);
var y = parseFloat(numbers.shift()).toFixed(1);

if(x>0 && y>0){
    console.log("Q1");
}
else if(x>0 && y<0){
    console.log("Q4");
}
else if(x<0 && y>0){
    console.log("Q2");
}
else if(x<0 && y<0){
    console.log("Q3");
}
else if(x==0 && y==0){
    console.log("Origem");    
}
else if(x==0){
    console.log("Eixo Y");
}
else if(y==0){
    console.log("Eixo X");
}