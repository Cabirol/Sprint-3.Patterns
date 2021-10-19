/*
Crea un Decorator en un file js que retorni una funció.
Aquesta funció efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió del fitxer adjunt currency_conversions.json, en funció de la divisa original.
Crea una petita aplicació que calculi el cost de N articles al preu X, aplicant diverses conversions que usin el Decorator del punt anterior.

https://www.youtube.com/watch?v=OHxYR7pUDVU
*/
const fs = require('fs');

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

const o = {
    a: "name",
    b: "age"
};

const aDescriptor = Object.getOwnPropertyDescriptor(o, "a");

console.log(aDescriptor);