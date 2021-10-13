const fs = require('fs');

function jsonReader(filePath, cb){
    fs.readFile(filePath ,'utf-8',(err, fileData) => {
        if(err){
            return cb && cb(err);
        }
        try{
            const object = JSON.parse(fileData);
            return cb && cb(null, object);
        }catch(err){
            return cb && cb(err);
        }
    });
}

jsonReader('',(err,data) => {
    if (err){
        console.log(err)
    }else{
        console.log(data.adress);
    }
});

function sumar(){
    let suma = 0;
    for (let i=0; i<arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}

function restar(minuend, substraend){
    return minuend - substraend;
}


function multiplicar(){
    let mult = 1;
    for (let i=0; i<arguments.length; i++){
        mult *= arguments[i];
    }
    return mult;
}

module.exports = {sumar, restar, multiplicar};
