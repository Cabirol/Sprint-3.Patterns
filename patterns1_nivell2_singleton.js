class Marcador{

    mostrarGuanyador(_joc){

        if(!(_joc instanceof Joc)){
            return console.log(`El joc ${_joc.nom} no existeix.`);
        }

        let maxim;
        for(let i=0; i<_joc.punts.length; i++){

            if(_joc.punts[i] || _joc.punts[i]==0){
                if(!maxim && maxim != 0){
                    maxim = _joc.punts[i];
                }else{
                    maxim = Math.max(maxim, _joc.punts[i]);
                }   
            }

        }

        if(!maxim && maxim!=0){
            return console.log(`El joc ${_joc.nom} no té cap guanyador.`)
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
        //Afegir Codi per crear parells nomjugador:puntuació i ordenar-los de major a menor.
    }
}

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
            return console.log(`El jugador ${_jugador.nom} no existeix.`);
        }

        for (let iteracio of this.jugadors){
            if (iteracio == _noujugador){
                return console.log(`${_noujugador.nom} ja és a ${this.nom}`)
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
                if (!this.punts[i]){
                    return this.punts[i] = _punts;
                }
                return this.punts[i] = this.punts[i] + _punts;
            }

        }
        return console.log(`${_jugador.nom} no és al joc ${this.nom} `);
    }
    
    mostrarMarcador(){
        var marcador = new Marcador;
        //marcador.mostrarPuntuacions(this);
        marcador.mostrarGuanyador(this);
    }
}

let joc1 = new Joc("Monster Hunter");
let joc2 = new Joc("Magic The Gathering");
let joc3 = new Joc("parxis");

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


joc1.mostrarMarcador();


//Ara mateix: quan s'assigna un jugador a un joc, aquest no té cap valor de "punts" fins que no se li n'afegeixen amb afegirPunts, si és que es fa.
//possibilitat: assignar d'entrada zero punts als jugadors amb el method afegirJugadors. té sentit que un jugador pertanyi a un joc i tingui el camp de punts buit?
//Conseqüència: simplificar funcions que manipulen l'array de puntuacions, perquè ja no han de tenir en compte els valors no definits.

//Implementar singleton

//dividir el programa en diferents arxius?
