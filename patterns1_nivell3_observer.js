/*
Creu una Aplicació que creï diferents objectes Usuari. 
L'aplicació podrà crear diferents topics, i subscriure els usuaris a ells. 
Quan un Usuari afegeixi un missatge, s'imprimirà per consola des del topic. 
També ho imprimiran per consola cadascun dels usuaris que estiguin subscrits al topic (rebran el missatge).
Creu un topic amb un usuari i un altre amb dos, i mostri la recepció dels missatges pels usuaris. Utilitzi el modulo events.
*/

const EventEmitter = require('events');

class Emissor extends EventEmitter{};

let emissorEvents = new Emissor();

class Usuari{
    constructor(_nom){
        this.nom = _nom;

    }

    afegirMissatgeATema(_tema, _missatge){

        //comprovar que _tema sigui un objecte de la classe tema.

        //comprovar que aquest usuari està subscrit al tema.

        emissorEvents.emit('missatge emès a ' + _tema.nom, this, _missatge);

    }

    rebreMissatge(_emissor, _tema, _missatge){
        if (this != _emissor){
            console.log(`Rebut per ${this.nom} que l'usuari ${_emissor.nom} ha publicat a ${_tema.nom}:`);
            console.log(_missatge);
        }else{
            console.log(`El nostre missatge (${this.nom}) ha estat rebut per la resta d'usuaris de ${_tema.nom}.`);
        }
    }
}

class Tema{
    constructor(_nom){
        this.nom = _nom;
        this.usuaris = [];

        emissorEvents.on('missatge emès a ' + this.nom, (_emissor, _missatge) => {
            this.imprimirMissatge(_emissor, _missatge);
        });

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
        
        emissorEvents.on('avisa '+_usuari.nom+'de '+ this.nom, (_emissor, _missatge) => {
            _usuari.rebreMissatge(_emissor, this, _missatge);
        });

        console.log(`S'ha afegit a ${_usuari.nom} al tema ${this.nom}.`);
    
    }

    imprimirMissatge(_emissor, _missatge){

        console.log(`L'usuari ${_emissor.nom} ha publicat a ${this.nom}:`);
        console.log(_missatge);

        for(let receptor of this.usuaris){
            emissorEvents.emit('avisa '+receptor.nom+'de '+ this.nom, _emissor, _missatge);
        }
    }


}

let usuari1 = new Usuari('Dani');
let usuari2 = new Usuari('Marc');
let usuari3 = new Usuari('Pau');

let tema1 = new Tema('Whatsapp');
let tema2 = new Tema('Twitter');

tema1.subscriureUsuari(usuari1);
tema1.subscriureUsuari(usuari2);

tema2.subscriureUsuari(usuari1);
tema2.subscriureUsuari(usuari2);
tema2.subscriureUsuari(usuari3);

usuari1.afegirMissatgeATema(tema1, 'Hola bon dia');
usuari2.afegirMissatgeATema(tema2, 'No és interessant Twitter');

