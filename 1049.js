var input = require('fs').readFileSync('stdin', 'utf8');
var words = input.split("\n");

w1 = words.shift().trim();
w2 = words.shift().trim();
w3 = words.shift().trim();

switch(w1){
    case 'vertebrado':
        switch(w2){
            case 'ave':
                switch(w3){
                    case 'carnivoro':
                        console.log("aguia");
                    break;
                    case 'onivoro':
                        console.log("pomba");
                    break;
                }
            break;
            case 'mamifero':
                switch(w3){
                    case 'onivoro':
                        console.log("homem");
                    break;
                    case 'herbivoro':
                        console.log("vaca");
                    break;
                }
            break;
        }
    break;

    case 'invertebrado':
        switch(w2){
            case 'inseto':
                switch(w3){
                    case 'hematofago':
                        console.log("pulga");
                    break;
                    case 'herbivoro':
                        console.log("lagarta");
                    break;
                }
                break;
            case 'anelideo':
                switch(w3){
                    case 'hematofago':
                        console.log("sanguessuga");
                    break;
                    case 'onivoro':
                        console.log("minhoca");
                    break;
                }
            break;
        }
    break;
}