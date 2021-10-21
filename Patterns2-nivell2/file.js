/*
Crea un Decorator en un file js que retorni una funció.
Aquesta funció efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió del fitxer adjunt currency_conversions.json, en funció de la divisa original.
Crea una petita aplicació que calculi el cost de N articles al preu X, aplicant diverses conversions que usin el Decorator del punt anterior.

https://www.youtube.com/watch?v=OHxYR7pUDVU

https://trekinbami.medium.com/using-decorators-in-javascript-a44296e418c7
*/
const fs = require('fs');

const monedes = [   
    "USD",
    "GBP",
    "CHF",
    "JPY",
    "CAD",
    "CNY"
]

function jsonLector(jsonPath){
    try {
        const jsonString = fs.readFileSync(jsonPath, 'utf8');
        return JSON.parse(jsonString);
    } catch(err) {
        return console.log(err);
    }
}
var conversions = (jsonLector('./currency_conversions.json'));

console.log(conversions);

function preuEnEuros(_preu, _moneda){
    //error si _moneda no és a l'array monedes.
    return _preu*conversions[_moneda+"_EUR"];
}

console.log(preuEnEuros(100, "USD"));

class Article{
    constructor(_nom, _preu, _moneda){
        this.nom = _nom;
        this.preu = _preu;
        this.moneda = _moneda;
    }

    preuNarticles(n){
        console.log(`El cost total és de ${n*this.preu} ${this.moneda}`);
    }
}

