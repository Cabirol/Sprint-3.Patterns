# Sprint 3.Patterns

Aquest document conté l'enunciat dels exercicis i una explicació del contingut del codi.

# Patterns1, Nivell 1 - Callback Hell
*El codi adjunt llegeix un fitxer situat en un directori 'inbox' i fixa el seu contingut de manera inversa en un altre fitxer en el directori 'outbox'. Reestructuri i simplifiqui el codi existent per a evitar el denominat 'Callback Hell'*

L'explicació del codi és al readme de la carpeta Patterns1-nivell1.

# Patterns 1, Nivell 2 - Singleton
*Construeix una aplicació que creï diversos jugadors. Els jugadors podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador. Podrà fixar en cada jugador punts guanyats o perduts perquè el marcador canviï. La classe Marcador deurà, com a requisit indispensable, implementar un patró Singleton.*

## Què fa patterns1_nivell2_singleton.js?

Hi ha tres classes: Jugador, Joc i Marcador.

Jugador només té una propietat: nom. Joc té tres propietats: nom, jugadors, i punts, i tres mètodes: afegirJugadors, afegirPunts i mostrarMarcador. Quan es crea un objecte joc, les propietats jugadors i punts estan buides.

Amb el mètode afegirJugador es posa un jugador a la primera posició lliure de l'array jugadors, i se li assigna una puntuació de zero també a la primera posició lliure, en aquest cas de l'array punts.

Amb el mètode afegirPunts es modifica la puntuació en la quantitat destijada, en la posició de l'array punts corresponent al jugador al qual se li vol modificar la puntuació.

El mètode mostrarMarcador crea una (única) instància de la classe Marcador, i crida els seus dos mètodes, mostrarGuanyador i mostrarPuntuacions, que imprimeixen per pantalla les puntuacions i el guanyador del joc des del que hem cridat el mètode mostrarMarcador.


# Patterns1, Nivell 3 - Observer
*Crea una Aplicació que creï diferents objectes Usuari. L'aplicació podrà crear diferents topics, i subscriure els usuaris a ells. Quan un Usuari afegeixi un missatge, s'imprimirà per consola des del topic. També ho imprimiran per consola cadascun dels usuaris que estiguin subscrits al topic (rebran el missatge). Creu un topic amb un usuari i un altre amb dos, i mostri la recepció dels missatges pels usuaris. Utilitzi el modulo events.*

### Què fa patterns1_nivell3_observer.js?



