var input =  parseInt(require('fs').readFileSync('/dev/stdin', 'utf8'));
var cem = 0, cinquenta = 0, vinte = 0, dez = 0, cinco = 0, dois = 0, um = 0;

console.log(`${input}`);

if(input>=100){
    while(input>=100){
        input = input - 100;
        cem++
    }
}

if(input>=50){
    while(input>=50){
        input = input - 50;
        cinquenta++
    }
}

if(input>=20){
    while(input>=20){
        input = input - 20;
        vinte++
    }
}

if(input>=10){
    while(input>=10){
        input = input - 10;
        dez++
    }
}

if(input>=5){
    while(input>=5){
        input = input - 5;
        cinco++
    }
}

if(input>=2){
    while(input>=2){
        input = input - 2;
        dois++
    }
}

if(input>=1){
    while(input>=1){
        input = input - 1;
        um++
    }
}

console.log(`${cem} nota(s) de R$ 100,00`);
console.log(`${cinquenta} nota(s) de R$ 50,00`);
console.log(`${vinte} nota(s) de R$ 20,00`);
console.log(`${dez} nota(s) de R$ 10,00`);
console.log(`${cinco} nota(s) de R$ 5,00`);
console.log(`${dois} nota(s) de R$ 2,00`);
console.log(`${um} nota(s) de R$ 1,00`);