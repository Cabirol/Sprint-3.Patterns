# Estructura de l'entrega

callback_hell.js és el codi proporcionat, callback_heaven.js preten ser el nou codi reestructurat.

inbox conté dos .txt i s'ha de crear el folder outbox (amb el mateix path que inbox) abans de fer còrrer el codi.

La resta son apunts i recordatoris sobre el codi.

# Què fa callback_hell.js?

Copia els arxius de la carpeta inbox, inverteix el seu contingut, i els guarda a la carpeta outbox.

# Apunts de Callback Hell

> `fs.readdir( path[, options], callback)`

- path:  It holds the path of the directory from where the contents have to be read.
- callback(err, files): if not error it returns an array of all the file names in the directory. 

> `fs.readFile( filename, encoding, callback)`

- filename: It holds the name of the file to read or the entire path if stored at other location.
- encoding: It holds the encoding of file. Its default value is ‘utf8’.
- callback(err, data): If not error, it returns a string with the contents of the file.

> `fs.writeFile(filename, data[, options], callback)`

- filename: filename with path.
- data: String with the contents that will be written in filename. Filename is created if it didn't exist, or overwritten if did.
- callback(err).

> `path.join()`

- Join several segments into one path:

`console.log( path.join('Users', 'Refsnes', 'demo_path.js') );`

retorna:

`Users\Refsnes\demo_path.js`

>`__dirname`

Returns absolute path of the directory containing the currently executing file.

# How to convert Callback to promise:

https://stackabuse.com/converting-callbacks-to-promises-in-node-js/





