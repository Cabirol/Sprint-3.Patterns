let instance = null;
class Marcador{
    constructor(){
        if(!instance){
            instance = this;
        }
        return instance;
    }

    mostrarGuanyador(_joc){

        if(!(_joc instanceof Joc)){
            return console.log(`El joc ${_joc.nom} no existeix.`);
        }

        if(_joc.punts.length == 0){
            return console.log(`El joc ${_joc.nom} no té guanyador.`)
        }

        let maxim = _joc.punts[0];
        for(let i=1; i<_joc.punts.length; i++){
            maxim = Math.max(maxim, _joc.punts[i]);
        }

        let guanyadors = [];
        for(let i=0; i<_joc.punts.length; i++){
            if (_joc.punts[i] == maxim){
                guanyadors.push(_joc.jugadors[i].nom);
            }
        }

        return console.log(`El guanyador de ${_joc.nom} és ${guanyadors} amb ${maxim} punts.`);
    }

    mostrarPuntuacions(_joc){

        if(!(_joc instanceof Joc)){
            return console.log(`El joc ${_joc.nom} no existeix.`);
        }

        if(_joc.jugadors.length == 0){
            return console.log(`El joc ${_joc.nom} no té jugadors.`)
        }
        
        let parells = {};
        _joc.jugadors.forEach((_jugador, i) => parells[_jugador.nom] = _joc.punts[i]);
        
        let ranking = [];
        for (let key in parells) {
            ranking.push([key, parells[key]]);
        }

        ranking.sort(function(a, b) {
            return b[1] - a[1];
        });

        console.log(`Classificació del joc ${_joc.nom}:`);
        for(let i=0; i<ranking.length; i++){
            console.log(`${ranking[i][0]} amb ${ranking[i][1]} punts.`);
        }
    }
}

class Jugador{
    constructor(_nom){
        this.nom = _nom;
    }
}

class Joc{
    constructor(_nom){
        this.nom = _nom;
        this.jugadors = [];
        this.punts = [];
    }

    afegirJugador(_noujugador){

        if (!(_noujugador instanceof Jugador)){
            return console.log(`El jugador ${_jugador.nom} no existeix.`);
        }

        for (let iteracio of this.jugadors){
            if (iteracio == _noujugador){
                return console.log(`${_noujugador.nom} ja és a ${this.nom}`)
            }
        }

        this.jugadors.push(_noujugador);
        this.punts.push(0);
        console.log(`S'ha afegit a ${_noujugador.nom} al joc ${this.nom} amb una puntuació inicial de zero.`);
    }

    afegirPunts(_jugador, _punts){

        if(!(_jugador instanceof Jugador)){
            return console.log(`El jugador ${_jugador} no existeix.`);
        }

        for(let i=0; i<this.jugadors.length; i++){
            if (_jugador == this.jugadors[i]){
                this.punts[i] = this.punts[i] + _punts;
                return console.log(`S'ha afegit ${_punts} punt(s) a ${_jugador.nom}. La seva puntuació ara és de ${this.punts[i]} punt(s).`);
            }
        }

        return console.log(`${_jugador.nom} no és al joc ${this.nom}. `);
    }
    
    mostrarMarcador(){
        var marcador = new Marcador;
        marcador.mostrarPuntuacions(this);
        marcador.mostrarGuanyador(this);
    }
}

/*
let jugador1 = new Jugador("Manu");
let jugador2 = new Jugador("Dani");
let jugador3 = new Jugador("Sergi");
let jugador4 = new Jugador("Javi");
let jugador5 = new Jugador("Roger");
let jugador6 = new Jugador("Joan");

let joc1 = new Joc("Monster Hunter");
let joc2 = new Joc("Magic The Gathering");
let joc3 = new Joc("Yu-Gi-Oh!");

joc1.afegirJugador(jugador1);
joc1.afegirJugador(jugador2);
joc1.afegirJugador(jugador4);
joc1.afegirJugador(jugador5);

joc2.afegirJugador(jugador2);
joc2.afegirJugador(jugador3);
joc2.afegirJugador(jugador6);

joc1.afegirPunts(jugador1, 5);
joc1.afegirPunts(jugador2, 13);
joc1.afegirPunts(jugador3, 3);
joc1.afegirPunts(jugador4, 13);
joc1.afegirPunts(jugador5, 9);

joc2.afegirPunts(jugador2, 5);
joc2.afegirPunts(jugador3, 4);
joc2.afegirPunts(jugador6, 20);

joc1.mostrarMarcador();
joc2.mostrarMarcador();
joc3.mostrarMarcador();
*/
