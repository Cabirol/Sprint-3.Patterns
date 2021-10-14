/*
Creu una Aplicació que creï diferents objectes Usuari. 
L'aplicació podrà crear diferents topics, i subscriure els usuaris a ells. 
Quan un Usuari afegeixi un missatge, s'imprimirà per consola des del topic. 
També ho imprimiran per consola cadascun dels usuaris que estiguin subscrits al topic (rebran el missatge).
Creu un topic amb un usuari i un altre amb dos, i mostri la recepció dels missatges pels usuaris. Utilitzi el modulo events.
*/

const EventEmitter = require('events');

class Emisor extends EventEmitter{};

let emisorEvents = new Emisor();

class Usuari{
    constructor(_nom){
        this.nom = _nom;

    }

    afegirMissatgeATema(_tema, _missatge){

        //comprovar que _tema sigui un objecte de la classe tema.

        //comprovar que aquest usuari està subscrit al tema.

        emisorEvents.emit('missatge emès a '+ _tema.nom, this, _missatge);

    }

    rebreMissatge(_usuari, _tema, _missatge){
        console.log(`Rebut per ${this.nom} que l'usuari ${_usuari.nom} ha publicat a ${_tema.nom}:`);
        console.log(_missatge);
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

            
        emisorEvents.on('missatge emès a ' + this.nom, (_usuari, _missatge) => {
            this.imprimirMissatge(_usuari, _missatge);
        });
        
        emisorEvents.on('avisa els usuaris de ' + this.nom, (_usuari, _missatge) => {
            let altresUsuarisDelTema;
            if (altresUsuarisDelTema instanceof Usuari && altresUsuarisDelTema != _usuari){
                altresUsuarisDelTema.rebreMissatge(_usuari, this, _missatge)
            }
        });

        console.log(`S'ha afegit a ${_usuari.nom} al tema ${this.nom}.`);
    
    }

    imprimirMissatge(_usuari, _missatge){
        console.log(`L'usuari ${_usuari.nom} ha publicat a ${this.nom}:`);
        console.log(_missatge);

        emisorEvents.emit('avisa els usuaris de ' + this.nom, _usuari, _missatge);

    }


}

let usuari1 = new Usuari('Dani');
let usuari2 = new Usuari('Marc');
let usuari3 = new Usuari('Pau');

let tema1 = new Tema('Whatsapp');

tema1.subscriureUsuari(usuari1);
tema1.subscriureUsuari(usuari2);

usuari1.afegirMissatgeATema(tema1, 'Hola bon dia');
