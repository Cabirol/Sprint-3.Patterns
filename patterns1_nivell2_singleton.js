/*
Construeixi una aplicació que creï diversos jugadors.
Els jugadors podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador. 
Podrà fixar en cada jugador punts guanyats o perduts perquè el marcador canviï. 
La classe Marcador deurà, com a requisit indispensable, implementar un patró Singleton.
*/

class Jugador{
    constructor(_nom){
        this.nom = _nom;
    }
}

let jugador1 = new Jugador("Manu");
let jugador2 = new Jugador("Dani");
let jugador3 = new Jugador("Sergi");

class Joc{
    constructor(_nom){
        this.nom = _nom;
        this.jugadors = [];
        this.punts = [];
    }

    afegirJugador(_noujugador){

        if (!(_noujugador instanceof Jugador)){
            return console.log(`El jugador ${_jugador} no existeix.`);
        }

        for (let iteracio of this.jugadors){
            if (iteracio == _noujugador){
                return console.log(`${_noujugador} ja és a ${this.nom}`)
            }
        }
        return this.jugadors.push(_noujugador);
    }

    afegirPunts(_jugador, _punts){

        if(!(_jugador instanceof Jugador)){
            return console.log(`El jugador ${_jugador} no existeix.`);
        }

        for(let i=0; i<this.jugadors.length; i++){
            
            if (_jugador == this.jugadors[i]){
                if (this.punts[i] == null){
                    return this.punts[i] = _punts;
                }
                return this.punts[i] = this.punts[i] + _punts;
            }

        }
        return console.log(`${_jugador.nom} no és al joc ${this.nom} `);
    }
    
    mostraMarcador(){
        //invoca marcador
        //fes anar method del marcador
    }
}

let joc1 = new Joc("Monster Hunter");
let joc2 = new Joc("Magic The Gathering");

joc1.afegirJugador(jugador1);
joc1.afegirJugador(jugador2);
joc2.afegirJugador(jugador2);
joc2.afegirJugador(jugador3);

joc1.afegirPunts(jugador1, 11);
joc1.afegirPunts(jugador2, 12);
joc1.afegirPunts(jugador3, 13);
joc2.afegirPunts(jugador1, 21);
joc2.afegirPunts(jugador2, 22);
joc2.afegirPunts(jugador3, 23);

console.log(jugador1);
console.log(jugador2);
console.log(jugador3);
console.log(joc1);
console.log(joc2);
