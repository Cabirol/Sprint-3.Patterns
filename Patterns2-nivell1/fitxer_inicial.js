const fs = require('fs');
const {Pipeline} = require ('./fitxer_extern');

function sumar(sumand1, sumand2){
    return sumand1 + sumand2;
}

function restar(minuend, substraend){
    return minuend - substraend;
}


function multiplicar(factor1, factor2){
    return factor1*factor2;
}

function jsonLector(jsonPath){
    try {
        const jsonString = fs.readFileSync(jsonPath, 'utf8');
        return JSON.parse(jsonString);
    } catch(err) {
        return console.log(err);
    }
}
var operands = (jsonLector('./nombres.json'));

var resultats = [ 
                sumar(nombres.primer, nombres.segon),
                restar(nombres.primer, nombres.segon),
                multiplicar(nombres.primer, nombres.segon)
            ];


const pipeline = Pipeline(
    
    (_, next) => {
      console.log(_value)
      next()
    }
);
  

pipeline.push(
    (_value, next) => {
      _value.value = _value.value + 21
      next()
    },
    (_value, next) => {
      _value.value = _value.value * 2
      next()
    }
);
  

pipeline.push((_value, next) => {
    console.log(_value)
    
});
  
  
pipeline.execute({ value: resultats });

