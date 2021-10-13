/*
Creu una Aplicació que creï diferents objectes Usuari. 
L'aplicació podrà crear diferents topics, i subscriure els usuaris a ells. 
Quan un Usuari afegeixi un missatge, s'imprimirà per consola des del topic. 
També ho imprimiran per consola cadascun dels usuaris que estiguin subscrits al topic (rebran el missatge).
Creu un topic amb un usuari i un altre amb dos, i mostri la recepció dels missatges pels usuaris. Utilitzi el modulo events.

https://www.youtube.com/watch?v=Mk5kTO662EU
*/
const EventEmitter = require('events');

class Usuari{
    constructor(_nom){
        this.nom = _nom;

    }

    afegirMissatgeATema(_tema, _missatge){

    }

    imprimirMissatgeRebut(){

    }

}

class Tema{
    constructor(_nom){
        this.nom = _nom;
        this.usuaris = [];

    }

    subscriureUsuari(_usuari){

        if (!(_usuari instanceof Usuari)){
            return console.log(`L'usuari ${_usuari.nom} no existeix.`);
        }
    
        for (let iteracio of this.usuaris){
            if (iteracio == _usuari){
                return console.log(`${_usuari.nom} ja és a ${this.nom}.`)
            }
        }
    
        this.usuaris.push(_usuari);
        console.log(`S'ha afegit a ${_usuari.nom} al tema ${this.nom}.`);
    
    }


}

const emitter = new EventEmitter();

//register a listener
emitter.on('message logged', function(){
    console.log('listener called');
});

//signal that an event has happened
emitter.emit('message logged');
