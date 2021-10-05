const {
    readdir,
    readFile,
    writeFile
} = require("fs");
const {
    join
} = require("path");
const { callbackify } = require("util");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
    str
        .split("")
        .reverse()
        .join("");

// Read and reverse contents of text files in a directory
/*readdir(inbox, (error, files) => {
    if (error) return console.log("Error: Folder inaccessible");
    files.forEach(file => {
      readFile(join(inbox, file), "utf8", (error, data) => {
        if (error) return console.log("Error: File error");
        writeFile(join(outbox, file), reverseText(data), error => {
          if (error) return console.log("Error: File could not be saved!");
          console.log(`${file} was successfully saved in the outbox!`);
        });
      });
    });
});*/


// readdir(directori, call1);


const llegirDirectori = dirPath => {
  return new Promise ((resolve, reject) => {
    readdir(dirPath, (error, files) => {
      if (error) return reject(error);
      resolve(files);
    });
  });
}

const llegirArxiu = filePath => {
  return new Promise ((resolve, reject) =>{
    readFile(filePath, "utf8",(error, data) =>{
      if (error) return reject(error);
      resolve(data);
    });
  });
}

const escriureArxiu = (filePath,contingut) => {
  return new Promise ((resolve, reject) =>{
    writeFile(filePath, contingut, error => {
      if (error) return reject(error);
      resolve(console.log(`Reversed file was successfully saved in the outbox!`));
    });
  });
}



llegirDirectori(inbox)
  .then(result => join(inbox,result[0]))
  .then(result => llegirArxiu(result))
  .then(result => reverseText(result))
  .then(result => escriureArxiu(join(outbox,"file.txt"),result))
  .catch(error => console.log(error))

