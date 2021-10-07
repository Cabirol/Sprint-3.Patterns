/*
Construeixi una aplicació que creï diversos jugadors.
Els jugadors podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador. 
Podrà fixar en cada jugador punts guanyats o perduts perquè el marcador canviï. 
La classe Marcador deurà, com a requisit indispensable, implementar un patró Singleton.
*/

class Jugador{
    constructor(_nom){
        this.nom = _nom;
        this.jocs = [];
        this.punts = [];
    }
    afegirPunts(_joc, _punts){
        if(_joc instanceof Joc){
            for(let i=0; i<this.jocs.length; i++){
                console.log(i);
                if (_joc == this.jocs[i]){
                    if (this.punts[i] == null){
                        return this.punts[i] = _punts;
                    }else{
                        return this.punts[i] = this.punts[i] + _punts;
                    } 
                }
            }
            return console.log(`${this.nom} no és al joc ${_joc.nom} `);
        }
        return console.log(`No existeix aquest joc.`);
    }
}

let jugador1 = new Jugador("Manu");
let jugador2 = new Jugador("Dani");
let jugador3 = new Jugador("Sergi");

class Joc{
    constructor(_nom){
        this.nom = _nom;
        this.jugadors = [];
    }

    afegirJugador(_noujugador){
        if (_noujugador instanceof Jugador){
            return console.log(`El jugador ${_jugador} no existeix.`);
        }
        for (let iteracio of this.jugadors){
            if (iteracio === _noujugador){
                return console.log(`${_noujugador} ja és a ${this.nom}`)
            }
        }
        return this.jugadors.push(_noujugador);
    }

    afegirPunts(_jugador, _punts){
        if(!(_jugador instanceof Jugador)){
            return console.log(`El jugador ${_jugador} no existeix.`);
        }
        //afegir els punts al jugador.
    }
}

let joc1 = new Joc("Monster Hunter");
let joc2 = new Joc("Magic The Gathering");

joc1.afegirJugador(jugador1);
joc1.afegirJugador(jugador2);
joc2.afegirJugador(jugador2);
joc2.afegirJugador(jugador3);
joc2.afegirPunts();






