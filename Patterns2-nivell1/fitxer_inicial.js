const {Pipeline} = require ('./fitxer_extern');
const fs = require('fs');

function jsonLector(jsonPath){
    try {
        const jsonString = fs.readFileSync(jsonPath, 'utf8');
        return JSON.parse(jsonString);
    } catch(err) {
        return console.log(err);
    }
}
var operands = (jsonLector('./nombres.json'));

function sumar(sumand1, sumand2){
    return sumand1 + sumand2;
}

function restar(minuend, substraend){
    return minuend - substraend;
}

function multiplicar(factor1, factor2){
    return factor1*factor2;
}

const pipeline = Pipeline(
    
    (_ctx, next) => {
      console.log(`Abans dels middlewares:`);
      console.log(_ctx);
      next();
      console.log(`La suma després dels middlewares és: ${sumar(_ctx.primer,_ctx.segon)}`);
      console.log(`La resta després dels middlewares és: ${restar(_ctx.primer,_ctx.segon)}`);
      console.log(`El producte després dels middlewares és: ${multiplicar(_ctx.primer,_ctx.segon)}`);
    }
    
);

pipeline.push((_ctx, next) => {
    _ctx.primer = (_ctx.primer)*(_ctx.primer);
    _ctx.segon = (_ctx.segon)*(_ctx.segon);
    console.log(`Primer middleware, quadrats:`);
    console.log(_ctx);
    next();
});

pipeline.push((_ctx, next) => {
    _ctx.primer = (_ctx.primer)*(_ctx.primer)*(_ctx.primer);
    _ctx.segon = (_ctx.segon)*(_ctx.segon)*(_ctx.segon);
    console.log(`Segon middleware, cubs:`);
    console.log(_ctx);
    next();
});
  
pipeline.push((_ctx, next) => {
    _ctx.primer = _ctx.primer/2;
    _ctx.segon = _ctx.segon/2;
    console.log(`Tercer middleware, meitats:`);
    console.log(_ctx);
    next();
});
   
pipeline.execute(operands);

