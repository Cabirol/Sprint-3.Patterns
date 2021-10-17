const EventEmitter = require('events');

class Emissor extends EventEmitter{};

let emissorEvents = new Emissor();

var arrUsuaris = [];
class Usuari{
    constructor(_nom){
        this.nom = _nom;

        for(let objecte of arrUsuaris){
            if (objecte.nom == _nom){
                throw new Error('Ja hi ha un usuari amb aquest nom.');
            }
        }
        arrUsuaris.push(this);

    }

    afegirMissatgeATema(_tema, _missatge){

        if (!(_tema instanceof Tema)){
            return console.log(`El tema ${_tema.nom} no existeix.`);
        }
        
        for (let iteracio of _tema.usuaris){
            if (iteracio == this){
                return emissorEvents.emit('missatge emès a ' + _tema.nom, this, _missatge);
            }
        }
        console.log(`${this.nom} no està subscrit a ${_tema.nom}.`);
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

var arrTemes = [];
class Tema{
    constructor(_nom){
        this.nom = _nom;
        this.usuaris = [];

        for(let objecte of arrTemes){
            if (objecte.nom == _nom){
                throw new Error('Ja hi ha un tema amb aquest nom.');
            }
        }
        arrUsuaris.push(this);

        emissorEvents.on('missatge emès a ' + this.nom, (_usuariEmissor, _missatge) => {
            this.imprimirMissatge(_usuariEmissor, _missatge);
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

    imprimirMissatge(_usuariEmissor, _missatge){

        console.log(`L'usuari ${_usuariEmissor.nom} ha publicat a ${this.nom}:`);
        console.log(_missatge);

        for(let receptor of this.usuaris){
            emissorEvents.emit('avisa '+receptor.nom+'de '+ this.nom, _usuariEmissor, _missatge);
        }
    }


}

let usuari1 = new Usuari('Dani');
let usuari2 = new Usuari('Manuel');

let tema1 = new Tema('Música');
let tema2 = new Tema('Videojocs');

tema1.subscriureUsuari(usuari1);

tema2.subscriureUsuari(usuari1);
tema2.subscriureUsuari(usuari2);

usuari1.afegirMissatgeATema(tema1, 'Parlem de música.');
usuari2.afegirMissatgeATema(tema2, 'Parlem de videojocs.');

