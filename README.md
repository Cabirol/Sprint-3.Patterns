# Sprint 3.Patterns

Aquest document conté l'enunciat dels exercicis i una explicació del contingut del codi.

## Patterns1, Nivell 1 - Callback Hell
*El codi adjunt llegeix un fitxer situat en un directori 'inbox' i fixa el seu contingut de manera inversa en un altre fitxer en el directori 'outbox'. Reestructuri i simplifiqui el codi existent per a evitar el denominat 'Callback Hell'*

L'explicació del codi és al readme de la carpeta Patterns1-nivell1.

## Patterns 1, Nivell 2 - Singleton
*Construeix una aplicació que creï diversos jugadors. Els jugadors podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador. Podrà fixar en cada jugador punts guanyats o perduts perquè el marcador canviï. La classe Marcador deurà, com a requisit indispensable, implementar un patró Singleton.*

### Què fa patterns1_nivell2_singleton.js?

Hi ha tres classes: Jugador, Joc i Marcador.

Jugador només té una propietat: nom. Joc té tres propietats: nom, jugadors, i punts, i tres mètodes: afegirJugadors, afegirPunts i mostrarMarcador. Quan es crea un objecte joc, les propietats jugadors i punts estan buides.

Amb el mètode afegirJugador es posa un jugador a la primera posició lliure de l'array jugadors, i se li assigna una puntuació de zero també a la primera posició lliure, en aquest cas de l'array punts.

Amb el mètode afegirPunts es modifica la puntuació en la quantitat destijada, en la posició de l'array punts corresponent al jugador al qual se li vol modificar la puntuació.

El mètode mostrarMarcador crea una (única) instància de la classe Marcador, i crida els seus dos mètodes, mostrarGuanyador i mostrarPuntuacions, que imprimeixen per pantalla les puntuacions i el guanyador del joc des del que hem cridat el mètode mostrarMarcador.


## Patterns1, Nivell 3 - Observer
*Crea una Aplicació que creï diferents objectes Usuari. L'aplicació podrà crear diferents topics, i subscriure els usuaris a ells. Quan un Usuari afegeixi un missatge, s'imprimirà per consola des del topic. També ho imprimiran per consola cadascun dels usuaris que estiguin subscrits al topic (rebran el missatge). Creu un topic amb un usuari i un altre amb dos, i mostri la recepció dels missatges pels usuaris. Utilitzi el modulo events.*

### Què fa patterns1_nivell3_observer.js?

Hi ha dues classes: Usuari i Tema. Usuari té només la propietat nom, i Tema les propietats nom i usuaris(un array). Mitjançant el mètode de la classe Tema "subscriureUsuari", s'afegeixen Usuaris a l'array "usuaris" de Tema.

Mitjançant el mètode de la classe Usuari "afegirMissatgeATema", els usuaris poden publicar missatges als temes als que estiguin subscrits (es crida el mètode "imprimirMissatge" de la classe Tema) i un cop passa això la resta d'usuaris reben el missatge publicat (es crida el mètode "rebreMissatge" de la classe Usuari.)

Per fer totes aquestes crides s'utilitzen events.

- Hi ha un event al constructor de la classe Tema. És un event diferent per cada tema, que es dispara cada cop que un usuari "afegeixMissatgeATema". Aquest event crida la funció "imprimirMissatge" del tema corresponent.

- Hi ha un altre event al cos del mètode "subscriureUsuari". És un event diferent per cada vegada que un usuari és subscrit a un tema. Es dispara per cada usuari subscrit a un tema, quan s'ha "imprèsMissatge" en aquest tema. Aquest event crida el mètode "rebreMissatge" de la classe Usuari, que fa dues coses diferents: si l'usuari és l'emissor del missatge, avisa que el missatge s'ha emès amb èxit. Si l'usuari és qualsevol dels altres usuaris del tema, publica el missatge i indica de quin tema i usuari prové.

Hi ha dues coses que no he sapigut fer:

Una, els events depenen del nom dels usuaris i dels temes. He afegit al constructor de cadascuna de les classes una forma de no poder crear un objecte amb un nom que ja existeix. Però això no evita que a posteriori es canvii el nom a un que ja existeix.

L'altra, la classe Usuari té dos mètodes, "afegirMissatgeATema" i "rebreMissatge", mentre que la classe Tema té dos mètodes, "subscriureUsuari" i "imprimirMissatge". Només els mètodes "afegirMissatgeATema" i "subscriureUsuari" haurien de poder ser cridats pels usuaris, mentre que els mètodes "rebreMissatge" i "imprimirMissatge" només s'haurien de cridar quan es disparessin els events corresponents, i no pels usuaris, com ara per ara passa.

## Patterns2, Nivell 1 - Middleware
*Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON.
Crea, en un fitxer extern, una classe que emmagatzemi middlewares (funcions).
Invoca les execucions de la suma, la resta i la multiplicació de manera natural. Insereix a la invocació middlewares que canviïn el resultat natural oferint com a resultat final el quadrat, el cub i la divisió entre 2 del resultat inicial en cadascuna de les operacions.*

L'explicació del codi és al readme de la carpeta Patterns2-nivell1.

## Patterns2, Nivell2 - Decorator

*Crea un Decorator en un file js que retorni una funció. Aquesta funció efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió del fitxer adjunt currency_conversions.json, en funció de la divisa original.
Crea una petita aplicació que calculi el cost de N articles al preu X, aplicant diverses conversions que usin el Decorator del punt anterior.*

## Patterns2, Nivell 3 - Publisher / Subscriber

*Utilitzant RabbitMQ com a element imprescindible, crea una queue on una classe Publisher publiqui missatges que siguin llegits per una classe Subscriber. Mostra l'emissió i recepció de cada missatge en consoles diferents.*
