var input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
var valor = parseFloat(input)
let tributacao_reais = 0

if(valor <= 2000){
    console.log("Isento")
} else if(valor <= 3000){
    tributacao_reais = ((valor - 2000) * 0.08)
    console.log(`R$ ${tributacao_reais.toFixed(2)}`)
} else if(valor <= 4500.0){
    tributacao_reais = 80.00
    tributacao_reais = tributacao_reais + ((valor - 3000) * 0.18)
    console.log(`R$ ${tributacao_reais.toFixed(2)}`)
} else {
    tributacao_reais = 350.00
    tributacao_reais += ((valor - 4500) * 0.28)
    console.log(`R$ ${tributacao_reais.toFixed(2)}`)
}